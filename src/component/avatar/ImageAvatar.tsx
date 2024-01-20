import {Image, StyleProp, View, ViewStyle} from "react-native";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";

interface ImageAvatarProps {
    src?: number,
    containerStyle?: StyleProp<ViewStyle>
}
export const ImageAvatar = ({src, containerStyle}: ImageAvatarProps) => {
  return(
      <View style={[{width: 50, height: 50, borderRadius: 50, overflow: 'hidden' }, containerStyle]}>
        <Image source={src ? src : require('@/assets/image/no-mage.png')} resizeMode={'cover'} style={{width:"100%", height: "100%"}} />
      </View>
  )
}