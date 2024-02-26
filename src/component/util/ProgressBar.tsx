import {StyleProp, StyleSheet, View, ViewStyle} from "react-native";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";


interface ProgressBarProps {
    containerStyle?: StyleProp<ViewStyle>,
    innerContainerStyle?: StyleProp<ViewStyle>,
}

export const ProgressBar = ({containerStyle, innerContainerStyle}: ProgressBarProps) => {
  return(
      <View style={[styles.container, containerStyle]}>
          <View style={[styles.innerContainer, innerContainerStyle]} />
      </View>
  )
}

const styles = StyleSheet.create({
    container:{
        height: 6,
        borderRadius: 50,
        backgroundColor: ThemeConstantUtil.COLOR.accent["25"],
        overflow: 'hidden'
    },
    innerContainer: {
        width: '50%',
        height: '100%',
        backgroundColor: ThemeConstantUtil.COLOR.accent["75"],
        borderRadius: 50,

    }
})