import { Text } from "react-native";
import { View } from "react-native";
import MyButton from "./MyButton";
import { BackwardIcon } from "react-native-heroicons/outline";

export default function Player() {
   return (
      <View className="bg-amber-800 border-[4px] border-amber-900 w-[400px] max-w-[95vw] rounded-2xl p-4">


         <Text className="font-nunito-medium text-3xl text-center text-white">
            Song name
         </Text>
         <Text className="font-nunito-medium text-lg text-center text-white">
            ...
         </Text>

         <View className="h-[6px] justify-center w-full rounded-full bg-white/60 mt-5 relative">
            <View className="absolute h-6 w-3 rounded-sm bg-amber-900 border-[2px] border-amber-200 translate-x-[-7px]"></View>
         </View>

         <View className="mt-5 flex-row justify-center">
            <MyButton colors={"second"}>
               <BackwardIcon color={"#fef3c7"} size={26} />
            </MyButton>

            <MyButton backStyle={"ml-4"} colors={"second"}>
               <BackwardIcon color={"#fef3c7"} size={26} />
            </MyButton>

            <MyButton backStyle="ml-4" colors={"second"}>
               <BackwardIcon color={"#fef3c7"} size={26} />
            </MyButton>
         </View>
      </View>
   );
}
