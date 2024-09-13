import {
   Animated,
   Easing,
   ScrollView,
   Text,
   TouchableOpacity,
} from "react-native";
import { View } from "react-native";
import MyButton from "./MyButton";
import {
   ArrowPathIcon,
   BackwardIcon,
   ForwardIcon,
   PauseIcon,
   PlayIcon,
   QueueListIcon,
} from "react-native-heroicons/outline";
import { useRef, useState } from "react";
import { State } from "react-native-track-player";
import useControl from "@/hooks/useControl";
import TimeSlide from "./TimeSlide";
import { useSongContext } from "@/stores/SongContext";

export default function Player() {
   const { songs } = useSongContext();

   const [tab, setTab] = useState<"playing" | "queue">("playing");

   const deg = useRef(new Animated.Value(0)).current;

   const {
      currentSong,
      currentIndex,
      handleSetSong,
      next,
      previous,
      state,
      togglePlayBack,
   } = useControl();

   const pausing =
      state == State.Paused ||
      state == State.Stopped ||
      state === State.Ready ||
      !state;

   Animated.loop(
      Animated.timing(deg, {
         toValue: 1,
         easing: Easing.linear,
         duration: 1000,
         useNativeDriver: false,
      })
   ).start();

   console.log("check state", state);

   return (
      <>
         {/* <Video
            source={{
               uri: "https://firebasestorage.googleapis.com/v0/b/zingmp3-clone-61799.appspot.com/o/test%2Fhuudat01234560-daloyeuemnhieuhoaproxretromix-justateehoaprox-5322814-mp3_1725615613911?alt=media&token=b177eb86-64d5-4459-a24b-87c3e7abaeaa",
            }}
         /> */}

         <View className="bg-amber-800 border-[4px] border-amber-900 w-[400px] max-w-[95vw] rounded-2xl p-4 max-h-[40vh]">
            <View
               className={`${
                  tab === "playing"
                     ? "opacity-100 h-auto"
                     : "h-0 pointer-events-none opacity-0"
               }`}
            >
               <Text
                  numberOfLines={1}
                  className=" font-nunito-bold text-2xl text-center text-amber-100"
               >
                  {currentSong?.title || "Song name"}
               </Text>
               <Text className=" font-nunito-medium text-base text-center text-amber-100">
                  {currentSong?.artist || "..."}
               </Text>

               <TimeSlide />

               <View className="mt-5 flex-row justify-center items-center">
                  <MyButton rounded={"lg"} onPress={previous} colors={"second"}>
                     <BackwardIcon color={"#fef3c7"} size={28} />
                  </MyButton>

                  <MyButton
                     rounded={"lg"}
                     onPress={togglePlayBack}
                     disabled={state === State.Buffering || !state}
                     backStyle={`ml-4`}
                     colors={"second"}
                  >
                     {state === State.Buffering ? (
                        <Animated.View
                           style={{
                              transform: [
                                 {
                                    rotate: deg.interpolate({
                                       inputRange: [0, 1],
                                       outputRange: ["0deg", "360deg"],
                                    }),
                                 },
                              ],
                           }}
                        >
                           <ArrowPathIcon
                              className="hidden"
                              color={"#fef3c7"}
                              size={40}
                           />
                        </Animated.View>
                     ) : (
                        <View className={`${!state ? "opacity-60" : ""}`}>
                           {pausing ? (
                              <PlayIcon color={"#fef3c7"} size={40} />
                           ) : (
                              <PauseIcon color={"#fef3c7"} size={40} />
                           )}
                        </View>
                     )}
                  </MyButton>

                  <MyButton
                     rounded={"lg"}
                     onPress={next}
                     backStyle="ml-4"
                     colors={"second"}
                  >
                     <ForwardIcon color={"#fef3c7"} size={28} />
                  </MyButton>
               </View>
            </View>

            <ScrollView
               className={`${
                  tab === "queue"
                     ? "opacity-100 h-auto"
                     : "h-0 pointer-events-none opacity-0"
               }`}
            >
               {songs.length ? (
                  songs.map((s, index) => {
                     const active = index === currentIndex;

                     return (
                        <TouchableOpacity
                           activeOpacity={1}
                           onPress={() => handleSetSong(index)}
                           key={index}
                           className={`items-start p-2 rounded-lg ${
                              active ? "bg-amber-100" : ""
                           }`}
                        >
                           <Text
                              className={`font-nunito-bold text-xl text-left ${
                                 active ? "text-amber-800" : "text-amber-100"
                              }`}
                           >
                              {s?.title || "Song name"}
                           </Text>
                           <Text
                              className={`font-nunito-medium text-base text-left ${
                                 active
                                    ? "text-amber-800/70"
                                    : "text-amber-100/70"
                              }`}
                           >
                              {s?.artist || "..."}
                           </Text>
                        </TouchableOpacity>
                     );
                  })
               ) : (
                  <Text className="text-base text-amber-100 text-center font-nunito-medium">
                     No songs jet...
                  </Text>
               )}
            </ScrollView>
         </View>

         <View className="absolute bottom-5 right-5">
            <MyButton
               onPress={() =>
                  tab === "playing" ? setTab("queue") : setTab("playing")
               }
               sizes={"clear"}
               fontStyle="p-2"
            >
               <QueueListIcon color={"#fef3c7"} size={30} />
            </MyButton>
         </View>
      </>
   );
}
