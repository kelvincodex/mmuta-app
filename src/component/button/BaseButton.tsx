import {
    TouchableOpacity,
    Text,
    TouchableOpacityProps,
    View,
    StyleProp,
    TextStyle,
    ViewStyle,
    ActivityIndicator
} from "react-native";
import {baseStyle} from "@/assets/style/__base";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import Animated, {BounceIn, BounceInLeft, FadeIn} from "react-native-reanimated";

export interface BaseButtonProps {
    title: string,
    textStyle?: StyleProp<TextStyle>
    containerStyle?: StyleProp<ViewStyle>
    type?: 'base'|'border'|'normal',
    animated?: boolean,
    loading?: boolean
}
export const BaseButton = ({title, textStyle, loading, type,containerStyle, animated,...props}: BaseButtonProps & TouchableOpacityProps) => {
    const backgroundColor = loading ? ThemeConstantUtil.COLOR.secondary["50"] : type == 'base' ? ThemeConstantUtil.COLOR.secondary["100"] : type == 'border' ? "transparent" : ThemeConstantUtil.COLOR.white
    const borderWidth = type == 'border'? 2 : 0
    const color =  type == 'base' ? ThemeConstantUtil.COLOR.white : ThemeConstantUtil.COLOR.secondary["100"]
  return(
      <Animated.View entering={FadeIn.duration(350)}>
                  <TouchableOpacity
                      style={[baseStyle.baseButtonContainer, {backgroundColor:backgroundColor, borderWidth: borderWidth}, containerStyle ]}
                      disabled={loading}
                      {...props}
                  >
                      {
                          !loading ?
                              <Text style={[baseStyle.baseButtonTitle, {color: color}, textStyle]}>{title}</Text> :
                              <ActivityIndicator color={ThemeConstantUtil.COLOR.white} />
                      }


                  </TouchableOpacity>
      </Animated.View>
  )
}

BaseButton.defaultProps = {
    type: 'border'
}