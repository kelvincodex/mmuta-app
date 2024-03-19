import {StyleSheet, Text, View} from "react-native";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import {IntroData, IntroDataProps} from "@/app/toolkit/data/IntroData";
import {useSelector} from "react-redux";
import {RootState} from "@/store";
import {useEffect, useState} from "react";
import {IntroDotContainer} from "@/component/container/IntroDotContainer";

interface IntroContainerProps {
}
export const IntroContainer = ({}: IntroContainerProps) => {
  const [introData, setIntroData] = useState<IntroDataProps>(IntroData[0])
  const introState = useSelector<RootState>((state)=> state.intro) as any

  useEffect(() => {
    setIntroData(IntroData[introState.index])
  }, [introState.index]);

  return(
      <View style={{paddingHorizontal: 50}}>
        <View style={styles.counterContainer}>
          <Text style={styles.counterText}>{introData.id} / {IntroData.length}</Text>
          <Text style={styles.counterSubText}>{introData.question}</Text>
          {
              introData.subQuestion && (
                  <View style={styles.line} />
              )
          }
          <Text style={styles.text}>{introData.subQuestion}</Text>
        </View>
        <View style={{marginTop: -100}}>

          {introData.component && <introData.component ></introData.component>}
        </View>

        <IntroDotContainer currentIndex={introState.index} />
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