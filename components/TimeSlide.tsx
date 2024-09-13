import useTimeSlide from "@/hooks/useTimeSlide";
import { formatTime } from "@/utils/helper";
import { useRef } from "react";
import { Text } from "react-native";
import { TouchableOpacity, View } from "react-native";

export default function TimeSlide() {
   const baseRef = useRef<TouchableOpacity>(null);

   const { currentSong, handleSeek, progress } = useTimeSlide({
      processLineBaseRef: baseRef,
   });

   return (
      <>
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
                           (progress.position / currentSong.duration) * 100
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
      </>
   );
}
