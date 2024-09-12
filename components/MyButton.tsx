import { cva, VariantProps } from "class-variance-authority";
import { ReactNode, useState } from "react";
import { TouchableOpacity, View } from "react-native";

const BackVariant = cva("rounded-2xl", {
   variants: {
      colors: {
         primary: "bg-amber-900",
         second: "bg-amber-900",
         clear: "",
      },
   },
   defaultVariants: {
      colors: "primary",
   },
});

const FontVariant = cva(
   "rounded-2xl flex space-x-1 items-center justify-center flex-row",
   {
      variants: {
         colors: {
            primary: "bg-amber-800",
            second: "bg-amber-700 ",
            clear: "",
         },
         sizes: {
            primary: "px-6 py-2",
            clear: "",
         },
      },
      defaultVariants: {
         colors: "primary",
         sizes: "primary",
      },
   }
);

interface Props
   extends VariantProps<typeof BackVariant>,
      VariantProps<typeof FontVariant> {
   onPress?: () => void;
   loading?: boolean;
   disabled?: boolean;
   backStyle?: string;
   fontStyle?: string;
   active?: boolean;
   children: ReactNode;
}

export default function MyButton({
   colors,
   onPress,
   backStyle = "",
   fontStyle,
   sizes,
   children,
   disabled,
}: Props) {
   const [press, setPress] = useState(false);

   return (
      <View className={`${BackVariant({ colors, className: backStyle })} `}>
         <TouchableOpacity
            onPress={onPress}
            onPressIn={() => setPress(true)}
            onPressOut={() => setPress(false)}
            activeOpacity={1}
            disabled={disabled}
            className={`${FontVariant({
               colors,
               sizes,
               className: fontStyle,
            })} ${press ? "translate-y-[-3px]" : "translate-y-[-6px]"}`}
         >
            {children}
         </TouchableOpacity>
      </View>
   );
}
