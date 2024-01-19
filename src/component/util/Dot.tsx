import {StyleProp, View, ViewStyle} from "react-native";
import {indexStyle} from "@/assets/style/Index";
import Animated from "react-native-reanimated";

interface DotProps {
  containerStyle?: StyleProp<ViewStyle>
}
export const Dot = ({containerStyle}:DotProps) => {
  return(
      <Animated.View style={[indexStyle.dot, containerStyle]}  />
  )
}