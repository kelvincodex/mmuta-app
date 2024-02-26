import {StyleProp, StyleSheet, Text, TextInput, View, ViewStyle} from "react-native";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";

interface OTPInputProps {
    containerStyle?: StyleProp<ViewStyle>,
    label?: string
}
export const OTPInput = ({label, containerStyle}: OTPInputProps) => {
    const boxes = [...Array(5)]

    console.log(label)
  return(
      <View style={[styles.container, containerStyle]}>
          <Text style={styles.title}>{label}</Text>
          <View style={styles.inputContainer}>
              {
                  boxes.map((_, index)=>{
                      return (
                          <TextInput key={index} style={styles.input} />
                      )
                  })
              }

          </View>
      </View>
  )
}

OTPInput.defaultProps ={
    label: 'Enter the code'
}

const styles = StyleSheet.create({
    container:{
        width: 'auto',
        height: 'auto',
        alignItems: 'center',
        gap: 20
    },
    input:{
        width: 49,
        height: 54,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: ThemeConstantUtil.COLOR.neutral["25"]
    },
    inputContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    title:{
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratMedium,
        fontSize: 18,
        lineHeight: 21,
        textAlign: 'center',
        color: ThemeConstantUtil.COLOR.neutral["75"]
    }
})