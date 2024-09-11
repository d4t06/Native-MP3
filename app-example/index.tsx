import MyButton from "@/components/MyButton";
import { Text, View } from "react-native";

export default function App() {
   return (
      <View className="text-center ">
         {/* <Text className="text-red-500 text-2xl font-nunito-medium">
            This sdf is sdf home page
         </Text> */}

         <MyButton
            onPress={() => console.log("press")}
            title="This is my button"
         />

         {/* <View> */}
         {/* </View> */}
      </View>
   );
}
