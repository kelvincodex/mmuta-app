import {StyleSheet, Text, TextInput, TextInputProps, View} from "react-native";
import {baseStyle} from "@/assets/style/__base";
import React from "react";
import {SvgProps} from "react-native-svg";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";

interface BaseInputProps {
    label?: string,
    Icon?: React.FC<SvgProps>,
}
export const IconInput = ({label, Icon, ...props}: BaseInputProps & TextInputProps) => {
  return(
      <View style={baseStyle.textInputContainer}>
          <Text style={baseStyle.textInputLabel}>{label}</Text>
          <View style={baseStyle.inputContainer}>
              <View style={baseStyle.iconContainer}>
                  {
                     Icon && <Icon />
                  }
              </View>
              <TextInput
                  style={baseStyle.input}
                  cursorColor={ThemeConstantUtil.COLOR.neutral["25"]}
                  placeholderTextColor={ThemeConstantUtil.COLOR.neutral["25"]}
                  {...props}
              />
              <View style={baseStyle.eyeIconContainer}></View>
          </View>

      </View>
  )
}

const styles = StyleSheet.create({
    placeholder:{

    }
})