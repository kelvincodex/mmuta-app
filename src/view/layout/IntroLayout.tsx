import React, {ReactNode} from "react";
import {Image, ImageBackground, StyleSheet, Text, View} from "react-native";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import {KeyboardAvoidingViewLayout} from "@/view/layout/KeyboardAvoidingViewLayout";
import BaseArrowLeft from "@/assets/icon/base-arrow-left.svg"
import {useNavigation} from "@react-navigation/native";

interface IntroLayoutProps {
    children: ReactNode
}
export const IntroLayout = ({children}: IntroLayoutProps) => {
    const navigation = useNavigation()
  return (
      <KeyboardAvoidingViewLayout containerStyle={{flex: 1, backgroundColor: ThemeConstantUtil.COLOR.white, }}>
          <ImageBackground source={require('@/assets/image/introTopCurve.png')} resizeMode={'cover'} style={{height: 399, width: '100%', alignItems:'center', paddingTop: 40}} >
              <Image source={require('@/assets/image/logo.png')} resizeMode={'cover'} style={{marginVertical: 20}} />
              <Text style={styles.headerTitle}>Welcome to Mmuta</Text>
              <View style={styles.line} />
              <Text style={styles.headerSubtitle}>Let’s get you started!</Text>
          </ImageBackground>
          <View style={{flex: 1, alignItems: 'center'}}>
              {children}
          </View>
          <ImageBackground source={require('@/assets/image/introBottomCurve.png')} resizeMode={'cover'} style={{height: 197, width: '100%'}} >
              <BaseArrowLeft onPress={()=> navigation.goBack()} style={{marginLeft: 50, marginTop: 130}} />
          </ImageBackground>

      </KeyboardAvoidingViewLayout>
  )
}

const styles = StyleSheet.create({
    headerTitle:{
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratBold,
        fontSize: 22,
        lineHeight: 28,
        color: ThemeConstantUtil.COLOR.primary["25"],
        textAlign: 'center',
    },
    headerSubtitle: {
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratMedium,
        fontSize: 20,
        lineHeight: 24,
        color: ThemeConstantUtil.COLOR.primary["25"],
        textAlign: 'center',
    },
    line:{
        width: 166,
        borderBottomWidth: 2,
        borderBlockColor: ThemeConstantUtil.COLOR.primary["50"],
        marginVertical: 15
    },

})