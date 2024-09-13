import Player from "@/components/Player";

import { Alert } from "react-native";
import useSetupLayer from "@/hooks/useSetupPlayer";

export default function Index() {
   useSetupLayer();

   // const handleAlert = () => {
   //    Alert.alert(
   //       "Permission is required",
   //       "This super cool app need to read audio files",
   //       [{ text: "Cút", onPress: () => handleAlert() }]
   //    );
   // };

   return (
      <>
         <Player />
      </>
   );
}
