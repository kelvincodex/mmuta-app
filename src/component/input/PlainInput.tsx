import {Text, TextInput, TextInputProps, View, StyleSheet} from "react-native";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";

interface PlainInputProps {
  title: string
}
export const PlainInput = ({title, ...props}: PlainInputProps & TextInputProps) => {
  return(
      <View style={{width: 'auto', height: 'auto'}}>
        <Text style={styles.label}>{title}</Text>
        <View style={styles.inputContainer}>
          <TextInput  {...props} />

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
        }
})