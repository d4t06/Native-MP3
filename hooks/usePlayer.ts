import trackList from "@/constants/Tracks";
import { PlaybackService } from "@/services/PlayBackService";
import { RefObject, useEffect, useRef } from "react";
import { GestureResponderEvent, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TrackPlayer, {
   Capability,
   Event,
   State,
   useActiveTrack,
   usePlaybackState,
   useProgress,
   useTrackPlayerEvents,
} from "react-native-track-player";

type Props = {
   processLineBaseRef: RefObject<TouchableOpacity>;
};

export default function usePlayer({ processLineBaseRef }: Props) {
   const playBackState = usePlaybackState();
   const progress = useProgress();
   const currentSong = useActiveTrack();

   const ranEffect = useRef(false);

   const pausing =
      playBackState.state == State.Paused ||
      playBackState.state == State.Ready ||
      playBackState.state == State.Stopped;

   useTrackPlayerEvents([Event.PlayerError], async (event) => {
      next();
   });

   useTrackPlayerEvents([Event.PlaybackQueueEnded], async (event) => {
      await TrackPlayer.skip(0);
      await TrackPlayer.stop();
   });

   useTrackPlayerEvents([Event.PlaybackProgressUpdated], async (event) => {
      try {
         if (!(event.position % 5))
            await AsyncStorage.setItem("position", event.position + "");
      } catch (error) {}
   });

   useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async (event) => {
      try {
         if (event.index === undefined) throw Error("index is undefined");
         await AsyncStorage.setItem("current-index", event.index + "");
         // await AsyncStorage.setItem("current-song-id", event.index + "");
      } catch (error) {}
   });

   const next = async () => {
      try {
         const currentIndex = await TrackPlayer.getActiveTrackIndex();
         if (currentIndex === undefined) return;

         if (currentIndex < trackList.length - 1) {
            await TrackPlayer.skipToNext();
         } else {
            await TrackPlayer.skip(0);
         }
      } catch (error) {}
   };

   const previous = async () => {
      try {
         const currentIndex = await TrackPlayer.getActiveTrackIndex();
         if (currentIndex === undefined) return;

         if (currentIndex > 0) {
            await TrackPlayer.skipToPrevious();
         } else {
            await TrackPlayer.skip(trackList.length - 1);
         }
      } catch (error) {}
   };

   const togglePlayBack = async () => {
      const currentTrack = await TrackPlayer.getActiveTrack();

      if (currentTrack != null) {
         if (pausing) {
            console.log("play");
            await TrackPlayer.play();
         } else {
            console.log("paused");
            await TrackPlayer.pause();
         }
      }
   };

   const handleSeek = (e: GestureResponderEvent) => {
      e.persist();
      processLineBaseRef.current?.measure((_x, _y, width) => {
         if (!currentSong || !currentSong.duration) return;
         const ratio = e.nativeEvent.locationX / width;
         const newTime = Math.round(currentSong.duration * ratio);
         TrackPlayer.seekTo(newTime);
      });
   };

   const handleSetSong = async (index: number) => {
      await TrackPlayer.skip(index);

      if (playBackState.state !== State.Playing) await TrackPlayer.play();
   };

   const setUp = async () => {
      try {
         TrackPlayer.registerPlaybackService(() => PlaybackService);
         await TrackPlayer.setupPlayer();
         await TrackPlayer.updateOptions({
            capabilities: [
               Capability.Play,
               Capability.Pause,
               Capability.SkipToNext,
               Capability.SkipToPrevious,
            ],
         });

         await TrackPlayer.add(trackList);
         await TrackPlayer.setQueue(trackList);

         const index = await AsyncStorage.getItem("current-index");
         if (index) await TrackPlayer.skip(+index);

         await TrackPlayer.stop();
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      if (!ranEffect.current) {
         ranEffect.current = true;
         setUp();
      }
   }, []);

   return {
      next,
      previous,
      handleSeek,
      handleSetSong,
      progress,
      currentSong,
      state: playBackState.state,
      togglePlayBack,
   };
}
