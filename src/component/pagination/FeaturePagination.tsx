import Animated, {interpolateColor, SharedValue, useAnimatedStyle} from "react-native-reanimated"
import {Dot} from "@/component/util/Dot";
import {Dimensions, StyleSheet} from "react-native";
import {FeatureData} from "@/toolkit/data/FeatureData";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";

interface FeaturePaginationProps {
    x: SharedValue<number>
}
export const FeaturePagination = ({x}: FeaturePaginationProps) => {
    const { width} = Dimensions.get('window')

  return(
      <Animated.View style={style.container}>
          {
              FeatureData.map((_, index)=>{
                  const animatedDotStyle = useAnimatedStyle(()=>{
                      const interpolateDotStyle = interpolateColor(x.value, [
                          (index - 1) * width,
                          (index) * width,
                          (index + 1) * width,
                      ], [
                          ThemeConstantUtil.COLOR.neutral["25"],
                          ThemeConstantUtil.COLOR.secondary["100"],
                          ThemeConstantUtil.COLOR.neutral["25"],
                      ])
                      return{
                          backgroundColor: interpolateDotStyle
                      }
                  })

                  return <Dot key={index} containerStyle={animatedDotStyle}  />
              })
          }
      </Animated.View>
  )
}


const style = StyleSheet.create({
    container:{
        flexDirection: "row",
        gap: 6
    }
})