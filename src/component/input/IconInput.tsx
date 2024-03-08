import {Pressable, StyleSheet, Text, TextInput, TextInputProps, View} from "react-native";
import {baseStyle} from "@/assets/style/__base";
import React, {useState} from "react";
import {SvgProps} from "react-native-svg";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import Eye from "@/assets/icon/eye.svg"
import EyeSlash from "@/assets/icon/eye-slash.svg"

interface BaseInputProps {
    label?: string,
    Icon?: React.FC<SvgProps>,
    errorText?: string,
    secureTextEntry?: boolean
}
export const IconInput = ({label, Icon, secureTextEntry, errorText, ...props}: BaseInputProps & TextInputProps) => {
    const [eye, setEye] = useState<boolean>(true)

    function handleEye() {
        setEye(!eye)
    }
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
                  secureTextEntry={secureTextEntry && eye}
                  cursorColor={ThemeConstantUtil.COLOR.neutral["25"]}
                  placeholderTextColor={ThemeConstantUtil.COLOR.neutral["25"]}
                  {...props}
              />
              <View style={baseStyle.eyeIconContainer}>
                  {
                      secureTextEntry && (
                          <Pressable onPress={handleEye}>
                              { !eye ? <EyeSlash  /> : <Eye />}
                          </Pressable>

                      )
                  }
              </View>
          </View>
          {errorText &&
              <Text style={styles.errorText}>{errorText}</Text>
          }
      </View>
  )
}

const styles = StyleSheet.create({
    placeholder:{

    },
    errorText:{
        fontSize: 13,
        lineHeight: 15.85,
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratAltRegular,
        color: ThemeConstantUtil.COLOR.error,
        textAlign: 'right',
        marginTop: 5
    }
})