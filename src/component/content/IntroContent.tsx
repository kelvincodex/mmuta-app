import {StyleSheet, Text, View} from "react-native";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import {IntroContainer} from "@/component/container/IntroContainer";
import {IntroDotContainer} from "@/component/container/IntroDotContainer";
import {useLayoutEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store";
import {IntroData, IntroDataProps} from "@/app/toolkit/data/IntroData";
import {intro} from "@/store/modules/intro";

export const IntroContent = () => {
    // const introData = useSelector<RootState>((state)=> state.intro.introData) as  IntroDataProps
    // const dispatch = useDispatch<AppDispatch>()

  return (
      <View>
          {/*<IntroContainer  item={introData} />*/}
          {/*<IntroDotContainer currentIndex={introData.id} />*/}
      </View>
  )
}

const styles = StyleSheet.create({
    counterContainer:{
        alignItems: "center",
        transform: [{translateY: -90}],
        gap: 15
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

})