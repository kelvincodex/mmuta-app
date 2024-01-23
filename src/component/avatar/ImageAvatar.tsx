import {Image, StyleProp, TouchableOpacity, TouchableOpacityProps, View, ViewStyle} from "react-native";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";

interface ImageAvatarProps {
    src?: number,
    containerStyle?: StyleProp<ViewStyle>
}
export const ImageAvatar = ({src, containerStyle, ...props}: ImageAvatarProps & TouchableOpacityProps) => {
  return(
      <TouchableOpacity activeOpacity={0.8} style={[{width: 50, height: 50, borderRadius: 50, overflow: 'hidden' }, containerStyle]} {...props}>
        <Image source={src ? src : require('@/assets/image/no-mage.png')} resizeMode={'cover'} style={{width:"100%", height: "100%"}} />
      </TouchableOpacity>
  )
}