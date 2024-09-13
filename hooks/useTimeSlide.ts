import AsyncStorage from "@react-native-async-storage/async-storage";
import { RefObject, useEffect } from "react";
import { GestureResponderEvent, TouchableOpacity } from "react-native";
import TrackPlayer, {
   useActiveTrack,
   useProgress,
} from "react-native-track-player";

type Props = {
   processLineBaseRef: RefObject<TouchableOpacity>;
};

export default function useTimeSlide({ processLineBaseRef }: Props) {
   const currentSong = useActiveTrack();
   const progress = useProgress();

   const handleSeek = (e: GestureResponderEvent) => {
      e.persist();
      processLineBaseRef.current?.measure((_x, _y, width) => {
         if (!currentSong || !currentSong.duration) return;
         const ratio = e.nativeEvent.locationX / width;
         const newTime = Math.round(currentSong.duration * ratio);
         TrackPlayer.seekTo(newTime);
      });
   };

   const updateStorage = async (position: number) => {
      await AsyncStorage.setItem("position", position + "");
   };

   useEffect(() => {
      if (!progress.position) return;

      if (!(Math.round(progress.position) % 5)) {
         console.log("set store");
         updateStorage(progress.position);
      }
   }, [progress]);

   return { handleSeek, currentSong, progress };
}
