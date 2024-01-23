import {TouchableOpacity, Text, TouchableOpacityProps, View} from "react-native";
import {BaseButtonProps} from "@/app/types/component-type";
import {baseStyle} from "@/assets/style/__base";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import Animated, {BounceIn, BounceInLeft, FadeIn} from "react-native-reanimated";

export const BaseButton = ({title, textStyle, type,containerStyle,...props}: BaseButtonProps & TouchableOpacityProps) => {
    const backgroundColor = type == 'base' ? ThemeConstantUtil.COLOR.secondary["100"] : type == 'border' ? "transparent" : ThemeConstantUtil.COLOR.white
    const borderWidth = type == 'border'? 2 : 0
    const color =type == 'base' ? ThemeConstantUtil.COLOR.white : ThemeConstantUtil.COLOR.secondary["100"]
  return(
      <Animated.View entering={FadeIn.duration(500).randomDelay()}>
          <TouchableOpacity
              style={[baseStyle.baseButtonContainer, {backgroundColor:backgroundColor, borderWidth: borderWidth}, containerStyle ]}
              {...props}
          >
              <Text style={[baseStyle.baseButtonTitle, {color: color}, textStyle]}>{title}</Text>
          </TouchableOpacity>
      </Animated.View>

  )
}

BaseButton.defaultProps = {
    type: 'border'
}