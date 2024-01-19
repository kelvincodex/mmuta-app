import {Image, ImageBackground, StyleSheet, Text, View} from "react-native";
import {indexStyle} from "@/assets/style/Index";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import BaseArrowLeft from "@/assets/icon/base-arrow-left.svg"
import React, {ReactNode} from "react";

interface AuthLayoutProps {
    title: string,
    children: ReactNode
}
export const AuthLayout = ({title, children}: AuthLayoutProps) => {
  return(
      <View style={indexStyle.baseContainer}>
          <ImageBackground source={require('@/assets/image/authToCurve.png')} resizeMode={'cover'} style={[{flex: 0.25}, {justifyContent:"center", alignItems:"center"}]}>
            <Image source={require('@/assets/image/logo.png')} resizeMode={'cover'} style={{marginBottom: 50, width: 59, height: 61}}  />
          </ImageBackground>
          <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
              {children}
          </View>
          <ImageBackground source={require('@/assets/image/authBoCurve.png.png')} resizeMode={'cover'} style={[{flex: 0.15}, {justifyContent:"center"}]}>
            <BaseArrowLeft style={{marginLeft: 50, marginTop: 50}} />
          </ImageBackground>
      </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 0.6,
        alignItems:"center"
    },
    title: {
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratBold,
        fontSize: 22,
        lineHeight: 26,
        color: ThemeConstantUtil.COLOR.neutral["75"],
    }
})