import { PlaybackService } from "@/services/PlayBackService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useRef } from "react";
import TrackPlayer, { Capability } from "react-native-track-player";
import { Alert } from "react-native";
import { useSongContext } from "@/stores/SongContext";
import trackList from "@/constants/Tracks";

export default function useSetupLayer() {
   const { setSongs } = useSongContext();

   // const [permissionResponse, requestPermission] =
   //    MediaLibrary.usePermissions();

   const ranEffect = useRef(false);

   const handleAlert = () => {
      Alert.alert(
         "Permission is required",
         "This super cool app need to read audio  files",
         [{ text: "Cút", onPress: () => handleAlert() }]
      );
   };

   // const handlerPermission = async () => {
   //    if (permissionResponse === null) return await requestPermission();

   //    if (permissionResponse.status === "denied") {
   //       if (permissionResponse.canAskAgain) return await requestPermission();
   //       else return handleAlert();
   //    }
   // };

   const getSongs = async () => {
      try {
         // const trackList: Track[] = [];
         // const { assets } = await MediaLibrary.getAssetsAsync({
         //    mediaType: "audio",
         // });

         // if (!assets.length) return;

         // for (const asset of assets) {
         //    trackList.push({
         //       url: asset.uri,
         //       duration: asset.duration,
         //       artist: "...",
         //       title: asset.filename,
         //    });
         // }

         setSongs(trackList);

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

         await TrackPlayer.reset();

         const index = await AsyncStorage.getItem("current-index");
         if (index) {
            await TrackPlayer.skip(+index);
            const position = await AsyncStorage.getItem("position");

            if (!!position && !isNaN(+position)) {
               await TrackPlayer.seekTo(+position);
            }
         }

         await TrackPlayer.setQueue(trackList);
         await TrackPlayer.stop();
      } catch (error) {
         console.log(error);
      }
   };

   // useEffect(() => {
   //    handlerPermission();
   // }, []);

   useEffect(() => {
      if (!ranEffect.current) {
         ranEffect.current = true;
         getSongs();
      }
      // if (permissionResponse?.status === "granted") {
      // }
   }, []);
}
