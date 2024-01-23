import {StyleSheet, Text, View} from "react-native";
import {ImageAvatar} from "@/component/avatar/ImageAvatar";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import BasePencil from "@/assets/icon/base-pencil.svg";
import BaseCancel from "@/assets/icon/base-cancel.svg";
import {useNavigation} from "@react-navigation/native";

export const ProfileImageContainer = () => {
    const navigation = useNavigation()
  return(
      <View style={{flexDirection: 'row', justifyContent:"center", marginTop: 20}}>
          <View style={{alignItems:"center", gap: 9}}>
              <ImageAvatar containerStyle={{width: 139, height: 139, borderRadius: 100, borderWidth: 2, borderColor: ThemeConstantUtil.COLOR.primary["100"]}} src={require('@/assets/image/pic.jpg')} />
              <Text style={styles.name}>John Doe</Text>
              <Text style={styles.edit}>Edit profile</Text>
              <BasePencil style={{transform: [{translateY: -25}, {translateX: -50}] }} />
          </View>
          <BaseCancel onPress={()=> navigation.goBack()} style={{transform: [{translateX: 80}]}} />
      </View>
  )
}

const styles = StyleSheet.create({
    name: {
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratMedium,
        fontSize: 20,
        color: ThemeConstantUtil.COLOR.neutral["100"],
        lineHeight: 24,
    },
    edit:{
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratAltRegular,
        fontSize: 14,
        color: ThemeConstantUtil.COLOR.primary["75"],
        lineHeight: 17,
    }
})