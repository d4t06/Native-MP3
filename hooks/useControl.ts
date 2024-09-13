import trackList from "@/constants/Tracks";
import { useRef, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TrackPlayer, {
   Event,
   State,
   useActiveTrack,
   usePlaybackState,
   useTrackPlayerEvents,
} from "react-native-track-player";

export default function useControl() {
   const firstTimeLoadedSong = useRef(true);

   const playBackState = usePlaybackState();
   const currentSong = useActiveTrack();
   const [currentIndex, setCurrentIndex] = useState(0);

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

   useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async (event) => {
      try {
         if (event.index === undefined) throw Error("index is undefined");

         await AsyncStorage.setItem("current-index", event.index + "");
         setCurrentIndex(event.index);

         if (!firstTimeLoadedSong.current)
            await AsyncStorage.setItem("position", "0");
         else firstTimeLoadedSong.current = false;
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

      if (playBackState.state === undefined) return;

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

   const handleSetSong = async (index: number) => {
      await TrackPlayer.skip(index);

      if (playBackState.state !== State.Playing) await TrackPlayer.play();
   };

   return {
      next,
      previous,
      currentIndex,
      handleSetSong,
      currentSong,
      state: playBackState.state,
      togglePlayBack,
   };
}
