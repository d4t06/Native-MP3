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
import trackList from "@/constants/Tracks";
import { formatTime } from "@/utils/helper";
import usePlayer from "@/hooks/usePlayer";

export default function Player() {
   const [tab, setTab] = useState<"playing" | "queue">("playing");

   const deg = useRef(new Animated.Value(0)).current;

   const baseRef = useRef<TouchableOpacity>(null);

   const {
      currentSong,
      handleSeek,
      handleSetSong,
      next,
      previous,
      progress,
      state,
      togglePlayBack,
   } = usePlayer({ processLineBaseRef: baseRef });

   const pausing = state == State.Paused || state == State.Stopped;

   Animated.loop(
      Animated.timing(deg, {
         toValue: 1,
         easing: Easing.linear,
         duration: 1000,
         useNativeDriver: false,
      })
   ).start();

   // useEffect(() => {

   // },
   //  []);

   console.log("chekc stats", state);

   return (
      <>
         <View className="bg-amber-800 border-[4px] border-amber-900 w-[400px] max-w-[95vw] rounded-2xl p-4 max-h-[40vh]">
            <View
               className={`${
                  tab === "playing"
                     ? "opacity-100 h-auto"
                     : "h-0 pointer-events-none opacity-0"
               }`}
            >
               <Text className="font-nunito-medium text-3xl text-center text-white">
                  {currentSong?.title || "Song name"}
               </Text>
               <Text className="font-nunito-medium text-lg text-center text-white">
                  {currentSong?.artist || "..."}
               </Text>

               <TouchableOpacity
                  activeOpacity={1}
                  onPress={handleSeek}
                  ref={baseRef}
                  className="h-[26px] justify-center mt-5"
               >
                  <View className="h-[6px] flex-row bg-white/60 rounded-full items-center">
                     {currentSong?.duration && (
                        <View
                           style={{
                              width: `${
                                 (progress.position / currentSong.duration) *
                                 100
                              }%`,
                              pointerEvents: "none",
                           }}
                           className="relative  justify-center rounded-full h-full bg-amber-200"
                        >
                           <View
                              style={{ pointerEvents: "none" }}
                              className="absolute right-0 h-6 w-3 rounded-sm bg-amber-900 border-[2px] border-amber-200 translate-x-[7px]"
                           ></View>
                        </View>
                     )}
                  </View>
               </TouchableOpacity>

               <View className="flex-row items-center justify-between">
                  <Text className="text-lg text-amber-100/70">
                     {formatTime(progress.position)}
                  </Text>
                  <Text className="text-lg text-amber-100">
                     {formatTime(currentSong?.duration || 0)}
                  </Text>
               </View>

               <View className="mt-5 flex-row justify-center items-center">
                  <MyButton onPress={previous} colors={"second"}>
                     <BackwardIcon color={"#fef3c7"} size={26} />
                  </MyButton>

                  <MyButton
                     onPress={togglePlayBack}
                     disabled={state === State.Buffering}
                     backStyle={`ml-4 ${
                        state === State.Buffering ? "opacity-60" : ""
                     }`}
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
                           <ArrowPathIcon color={"#fef3c7"} size={40} />
                        </Animated.View>
                     ) : (
                        <>
                           {pausing ? (
                              <PlayIcon color={"#fef3c7"} size={40} />
                           ) : (
                              <PauseIcon color={"#fef3c7"} size={40} />
                           )}
                        </>
                     )}
                  </MyButton>

                  <MyButton onPress={next} backStyle="ml-4" colors={"second"}>
                     <ForwardIcon color={"#fef3c7"} size={26} />
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
               {trackList.map((s, index) => {
                  const active = currentSong?.id === s.id;

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
                           className={`font-nunito-medium text-xl text-center ${
                              active ? "text-amber-800" : "text-amber-100"
                           }`}
                        >
                           {s?.title || "Song name"}
                        </Text>
                        <Text
                           className={`font-nunito-medium text-lg  text-center ${
                              active ? "text-amber-800/70" : "text-amber-100/70"
                           }`}
                        >
                           {s?.artist || "..."}
                        </Text>
                     </TouchableOpacity>
                  );
               })}
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
