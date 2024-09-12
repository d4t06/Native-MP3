import { Slot } from "expo-router";
import { View } from "react-native";
import { useFonts } from "expo-font";
import TrackPlayer, { Capability } from "react-native-track-player";
import { PlaybackService } from "@/services/PlayBackService";
import { useEffect, useState } from "react";
import trackList from "@/constants/Tracks";

export default function RootLayout() {
   const [loadedPlayer, setLoadedPlayer] = useState(false);
   const [loaded] = useFonts({
      Nunito: require("../assets/fonts/Nunito-Regular.ttf"),
      "Nunito-Medium": require("../assets/fonts/Nunito-Medium.ttf"),
   });

   useEffect(() => {
      const setUp = async () => {
         TrackPlayer.registerPlaybackService(() => PlaybackService);
         await TrackPlayer.setupPlayer();
         await TrackPlayer.add(trackList);
         await TrackPlayer.updateOptions({
            capabilities: [
               Capability.Play,
               Capability.Pause,
               Capability.SkipToNext,
               Capability.SkipToPrevious,
               Capability.Stop,
           ],
           compactCapabilities: [Capability.Play, Capability.Pause],
         })

         setLoadedPlayer(true);
      };

      setUp();
   }, []);

   if (!loaded || !loadedPlayer) return null;

   return (
      <View className="flex-1 bg-amber-100 justify-center items-center">
         <Slot />
      </View>
   );
}
