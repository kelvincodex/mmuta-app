import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import Terminate from "@/assets/icon/base-terminate.svg"
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import {ProfileFormik} from "@/component/formik/ProfileFormik";
import {ProfileImageContainer} from "@/component/container/ProfileImageContainer";

export const ProfileScreen = () => {
  return (
      <ScrollView contentContainerStyle={{flexGrow: 1}} >
          <StatusBar hidden={true} />
        <Image source={require('@/assets/image/selectClassTop.png')} resizeMode={'cover' } style={{width: '100%', height: 43}} />
          <View style={{flex: 1}}>
              <ProfileImageContainer />
              <View style={{height: 480, width: 312,alignSelf: 'center', borderRadius: 10, overflow:'hidden', backgroundColor: ThemeConstantUtil.COLOR.white, paddingHorizontal: 20, paddingVertical: 10}}>
                <ProfileFormik />
              </View>
              <TouchableOpacity style={{alignSelf: 'center', flexDirection:'row', marginTop: 30}}>
                  <Text>Logout</Text>
                  <Terminate />
              </TouchableOpacity>
          </View>
        <Image source={require('@/assets/image/selectClassBottom.png')} resizeMode={'cover' } style={{width: '100%', height: 35}} />
      </ScrollView>
  )
}

const styles = StyleSheet.create({

})