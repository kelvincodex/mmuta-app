import {StyleSheet, Text, View} from "react-native";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import {IntroData, IntroDataProps} from "@/app/toolkit/data/IntroData";

interface IntroContainerProps {
  item: IntroDataProps
}
export const IntroContainer = ({item}: IntroContainerProps) => {

  console.log(item.question)
  return(
      <View style={{paddingHorizontal: 50}}>
        <View style={styles.counterContainer}>
          <Text style={styles.counterText}>{item.id} / {IntroData.length}</Text>
          <Text style={styles.counterSubText}>{item.question}</Text>
          {
            item.subQuestion && (
                  <View style={styles.line} />
              )
          }
          <Text style={styles.text}>{item.subQuestion}</Text>
        </View>
        <View style={{marginTop: -100}}>

          {item.component && <item.component ></item.component>}
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  counterContainer:{
    alignItems: "center",
    transform: [{translateY: -90}],
    gap: 15,
    marginBottom: 10
  },
  counterText:{
    fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratBold,
    fontSize: 20,
    lineHeight: 24,
    color: ThemeConstantUtil.COLOR.neutral["75"],
    textAlign: 'center',
  },
  counterSubText:{
    fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratBold,
    fontSize: 20,
    lineHeight: 24,
    color: ThemeConstantUtil.COLOR.neutral["75"],
    textAlign: 'center',

  },
  line:{
    width: 166,
    borderBottomWidth: 2,
    borderBlockColor: ThemeConstantUtil.COLOR.neutral["25"],
    marginVertical: 15
  },
  text:{
    fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratAltRegular,
    fontSize: 15,
    lineHeight: 18,
    color: ThemeConstantUtil.COLOR.neutral["75"],
    textAlign: 'center',

  }
})