import {StyleProp, StyleSheet, View, ViewStyle} from "react-native";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import React from "react";
import {SvgProps} from "react-native-svg";

interface FloatIconProps {
    containerStyle?: StyleProp<ViewStyle>,
    Icon: React.FC<SvgProps>
}
export const FloatIcon = ({containerStyle, Icon, ...props}: FloatIconProps) => {
  return(
      <View style={[styles.container, containerStyle]}>
          {Icon && <Icon {...props} />}
      </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width: 55,
        height: 55,
        borderRadius: 50,
        position: 'absolute',
        zIndex: 9999,
        overflow: 'hidden',
        backgroundColor: ThemeConstantUtil.COLOR.accent["100"],
        justifyContent:"center",
        alignItems:"center"
    }
})