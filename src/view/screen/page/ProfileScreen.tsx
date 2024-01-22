import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import BaseArrowLeft from "@/assets/icon/base-arrow-left.svg"
import BaseCancel from "@/assets/icon/base-cancel.svg"
import BasePencil from "@/assets/icon/base-pencil.svg"
import Terminate from "@/assets/icon/base-terminate.svg"
import {ImageAvatar} from "@/component/avatar/ImageAvatar";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import {KeyboardAvoidingViewLayout} from "@/view/layout/KeyboardAvoidingViewLayout";
import {BaseInput} from "@/component/input/BaseInput";

export const ProfileScreen = () => {
  return (
      <View style={{flex: 1}}>
          <StatusBar hidden={true} />
        <Image source={require('@/assets/image/selectClassTop.png')} resizeMode={'cover' } style={{width: '100%', height: 43}} />
          <View style={{flex: 1}}>
                <View style={{flexDirection: 'row', justifyContent:"space-around", marginTop: 20}}>
                    <BaseArrowLeft />
                    <View style={{alignItems:"center", gap: 9}}>
                        <ImageAvatar containerStyle={{width: 139, height: 139, borderRadius: 100, borderWidth: 2, borderColor: ThemeConstantUtil.COLOR.primary["100"]}} src={require('@/assets/image/pic.jpg')} />
                            <Text style={styles.name}>John Doe</Text>
                            <Text style={styles.edit}>Edit profile</Text>
                        <BasePencil style={{transform: [{translateY: -25}, {translateX: -50}] }} />
                    </View>
                    <BaseCancel />
                </View>
              <View style={{height: 480, width: 312,alignSelf: 'center', borderRadius: 10, overflow:'hidden', backgroundColor: ThemeConstantUtil.COLOR.white}}>
                  <KeyboardAvoidingViewLayout containerStyle={{}}>
                        <BaseInput />
                        <BaseInput />
                        <BaseInput />
                        <BaseInput />
                        <BaseInput />
                        <BaseInput />
                  </KeyboardAvoidingViewLayout>
              </View>

                  <TouchableOpacity style={{alignSelf: 'center', flexDirection:'row', marginTop: 30}}>
                      <Text>Logout</Text>
                      <Terminate />
                  </TouchableOpacity>
          </View>
        <Image source={require('@/assets/image/selectClassBottom.png')} resizeMode={'cover' } style={{width: '100%', height: 35}} />
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