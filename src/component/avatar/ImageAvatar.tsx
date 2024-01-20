import {Image, View} from "react-native";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";

interface ImageAvatarProps {
    src?: number
}
export const ImageAvatar = ({src}: ImageAvatarProps) => {
  return(
      <View style={{width: 50, height: 50, borderWidth: 2, borderRadius: 50, overflow: 'hidden', borderColor: ThemeConstantUtil.COLOR.primary["100"], backgroundColor: ThemeConstantUtil.COLOR.neutral["25"]}}>
        <Image source={src ? src : require('@/assets/image/no-mage.png')} resizeMode={'cover'} style={{width:"100%", height: "100%"}} />
      </View>
  )
}