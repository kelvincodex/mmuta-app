import {Text, TextInput, TextInputProps, View, StyleSheet, StyleProp, ViewStyle} from "react-native";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";

interface PlainInputProps {
  title: string,
    containerStyle?: StyleProp<ViewStyle>
}
export const PlainInput = ({title, containerStyle, ...props}: PlainInputProps & TextInputProps) => {
  return(
      <View style={{width: 'auto', height: 'auto'}}>
        <Text style={styles.label}>{title}</Text>
        <View style={[styles.inputContainer, containerStyle]}>
          <TextInput style={styles.input}  placeholderTextColor={ThemeConstantUtil.COLOR.neutral["25"]}  {...props} />

        </View>
      </View>
  )
}

const styles = StyleSheet.create({
    inputContainer:{
        borderWidth: 1,
        height: 31,
        borderRadius: 5,
        borderColor: ThemeConstantUtil.COLOR.neutral["25"]
    },
    label:{
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratRegular,
        color: ThemeConstantUtil.COLOR.neutral["50"],
        fontSize: 12,
        lineHeight: 14
    },
    input:{
        flex: 1,
        padding: 10,
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratRegular,
        fontSize: 16,
        lineHeight: 19,
        color: ThemeConstantUtil.COLOR.neutral["75"]
    }
})