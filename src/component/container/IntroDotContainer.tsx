import {StyleSheet, View} from "react-native";
import {Dot} from "@/component/util/Dot";
import {IntroData} from "@/app/toolkit/data/IntroData";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";

interface IntroDotContainerProps {
    currentIndex: number
}
export const IntroDotContainer = ({currentIndex}: IntroDotContainerProps) => {
  return(
      <View style={styles.container}>
          {
              IntroData.map((_, index)=>{
                  return (
                      <Dot key={index} containerStyle={[{width:9, height: 9}, {backgroundColor: index == currentIndex ? ThemeConstantUtil.COLOR.secondary["100"] : ThemeConstantUtil.COLOR.neutral["25"]}]} />
                  )
              })
          }
      </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        gap: 10,
        alignItems: "center",
        justifyContent:'center',
        // transform: [{translateY: 200}]
        marginTop: 20
    }
})