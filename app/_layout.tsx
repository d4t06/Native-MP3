import { Slot } from "expo-router";
import { View } from "react-native";
import { useFonts } from "expo-font";

export default function RootLayout() {
   const [loaded] = useFonts({
      Nunito: require("../assets/fonts/Nunito-Regular.ttf"),
      "Nunito-Medium": require("../assets/fonts/Nunito-Medium.ttf"),
      "Nunito-Bold": require("../assets/fonts/Nunito-Bold.ttf"),
   });

   if (!loaded) return null;

   return (
      <View className="flex-1 bg-amber-100 justify-center items-center">
         <Slot />
      </View>
   );
}
