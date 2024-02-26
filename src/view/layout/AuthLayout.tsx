import {Image, ImageBackground, StyleProp, StyleSheet, Text, View, ViewProps, ViewStyle} from "react-native";
import {indexStyle} from "@/assets/style/Index";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import BaseArrowLeft from "@/assets/icon/base-arrow-left.svg"
import React, {ReactNode} from "react";
import {KeyboardAvoidingViewLayout} from "@/view/layout/KeyboardAvoidingViewLayout";
import {useNavigation} from "@react-navigation/native";

interface AuthLayoutProps {
    title: string,
    children: ReactNode,
    childrenStyle?: StyleProp<ViewStyle>
}
export const AuthLayout = ({title, children, childrenStyle}: AuthLayoutProps) => {
    const navigation = useNavigation()
  return(
      <KeyboardAvoidingViewLayout containerStyle={{backgroundColor: ThemeConstantUtil.COLOR.white}}>
              <ImageBackground source={require('@/assets/image/authToCurve.png')} resizeMode={'cover'} style={[{height: 228}, {justifyContent:"center", alignItems:"center"}]}>
                  <Image source={require('@/assets/image/logo.png')} resizeMode={'cover'} style={{marginBottom: 50, width: 59, height: 61}}  />
              </ImageBackground>
              <View style={[styles.container, childrenStyle]}>
                  <Text style={styles.title}>{title}</Text>
                  {children}
              </View>
              <ImageBackground source={require('@/assets/image/authBoCurve.png.png')} resizeMode={'cover'} style={[{height: 164}, {justifyContent:"center"}]}>
                  <BaseArrowLeft onPress={()=> navigation.goBack()} style={{marginLeft: 50, marginTop: 50}} />
              </ImageBackground>
      </KeyboardAvoidingViewLayout>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:"center"
    },
    title: {
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratBold,
        fontSize: 22,
        lineHeight: 26,
        color: ThemeConstantUtil.COLOR.neutral["75"],
        textAlign:'center'
    }
})