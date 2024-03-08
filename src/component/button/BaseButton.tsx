import {TouchableOpacity, Text, TouchableOpacityProps, View, StyleProp, TextStyle, ViewStyle} from "react-native";
import {baseStyle} from "@/assets/style/__base";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import Animated, {BounceIn, BounceInLeft, FadeIn} from "react-native-reanimated";

export interface BaseButtonProps {
    title: string,
    textStyle?: StyleProp<TextStyle>
    containerStyle?: StyleProp<ViewStyle>
    type?: 'base'|'border'|'normal',
    animated?: boolean
}
export const BaseButton = ({title, textStyle, type,containerStyle, animated,...props}: BaseButtonProps & TouchableOpacityProps) => {
    const backgroundColor = type == 'base' ? ThemeConstantUtil.COLOR.secondary["100"] : type == 'border' ? "transparent" : ThemeConstantUtil.COLOR.white
    const borderWidth = type == 'border'? 2 : 0
    const color =type == 'base' ? ThemeConstantUtil.COLOR.white : ThemeConstantUtil.COLOR.secondary["100"]
  return(
      <>

          {
              animated ?
                  <Animated.View entering={FadeIn.duration(350)}>
                      <TouchableOpacity
                          style={[baseStyle.baseButtonContainer, {backgroundColor:backgroundColor, borderWidth: borderWidth}, containerStyle ]}
                          {...props}
                      >
                          <Text style={[baseStyle.baseButtonTitle, {color: color}, textStyle]}>{title}</Text>
                      </TouchableOpacity>
                  </Animated.View> :
                  <TouchableOpacity
                      style={[baseStyle.baseButtonContainer, {backgroundColor:backgroundColor, borderWidth: borderWidth}, containerStyle ]}
                      {...props}
                  >
                      <Text style={[baseStyle.baseButtonTitle, {color: color}, textStyle]}>{title}</Text>
                  </TouchableOpacity>
          }
      </>
  )
}

BaseButton.defaultProps = {
    type: 'border'
}