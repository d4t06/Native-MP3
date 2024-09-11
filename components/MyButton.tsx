import { cva, VariantProps } from "class-variance-authority";
import { Text, TouchableOpacity } from "react-native";

const classes = {
   active:
      "before:shadow-none translate-y-[2px] text-amber-100 before:bg-amber-800",
   button: "inline-flex relative  items-center justify-center z-0",
};

const ButtonVariant = cva(classes.button, {
   variants: {
      variant: {
         primary:
            "before:border-[#78350f] before:content-[''] before:absolute before:z-[-1] before:inset-0 before:rounded-lg  before:shadow-[0_2px_0_#78350f] active:translate-y-[2px] active:before:shadow-none",
         clear: "",
      },
      size: {
         clear: "",
         primary: "px-[15px] py-[5px]",
      },
      colors: {
         primary: "text-amber-800 before:bg-amber-100",
         second: "text-amber-100 before:bg-amber-800",
         clear: "",
      },
      border: {
         primary: "before:border-[2px]",
         thin: "before:border-[1px]",
         clear: "before:border-b-[2px]",
      },
      fontWeight: {
         primary: "font-[500]",
         thin: "",
      },
   },
   defaultVariants: {
      size: "primary",
      colors: "primary",
      variant: "primary",
      border: "primary",
      fontWeight: "primary",
   },
});

interface Props extends VariantProps<typeof ButtonVariant> {
   title: string;
   onPress?: () => void;
   loading?: boolean;
   disabled?: boolean;
   className?: string;
   active?: boolean;
}

export default function MyButton({
   title,
   border,
   colors,
   size,
   variant,
   onPress,
   className,
}: Props) {
   return (
      <TouchableOpacity
         className={ButtonVariant({ border, colors, size, variant, className })}
      >
         <Text className="font-nunito">{title}</Text>
      </TouchableOpacity>
   );
}
