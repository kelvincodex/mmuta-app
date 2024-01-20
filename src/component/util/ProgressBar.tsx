import {StyleSheet, View} from "react-native";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";



export const ProgressBar = () => {
  return(
      <View style={styles.container}>
          <View style={styles.innerContainer} />
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