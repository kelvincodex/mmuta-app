import {FlatList, StyleSheet, View} from "react-native";
import {BaseButton} from "@/component/button/BaseButton";
import Animated, {SharedValue, useAnimatedStyle} from "react-native-reanimated";
import {FeatureData} from "@/app/toolkit/data/FeatureData";
import {RefObject} from "react";
import {FeatureDataProps} from "@/app/types/toolkit-type";
import {RouteHelperUtil} from "@/util/helper/RouteHelperUtil";
import {useNavigation} from "@react-navigation/native";
import {RouterConstantUtil} from "@/util/constant/RouterConstantUtil";

interface FeatureGroupButtonProps {
    index: SharedValue<number>,
    reff: RefObject<Animated.FlatList<FeatureDataProps>>
}

export const FeatureGroupButton = ({index, reff}: FeatureGroupButtonProps) => {

    const navigation = useNavigation()
    const singleNextStyle = useAnimatedStyle(()=>{
        return {
            display: index.value !== 0 ? 'none' : 'flex'
        }
    })
    const groupButtonStyle = useAnimatedStyle(()=>{

        return {
            display: index.value !== 0 && index.value !== FeatureData.length - 1 ? 'flex' : 'none'
        }
    })
    const singleContinueStyle = useAnimatedStyle(()=>{

        return {
            display: index.value == FeatureData.length - 1 ? 'flex' : 'none'
        }
    })
    function next (){
        // @ts-ignore
        reff?.current?.scrollToIndex({
            index: index.value + 1,
            animated: true
        })
    }

    function prev (){
        // @ts-ignore
        reff?.current?.scrollToIndex({
            index: index.value - 1,
            animated: true
        })
    }

    function continues (){
        RouteHelperUtil.navigate(navigation, RouterConstantUtil.auth.signup)
    }

  return (
      <View style={style.buttonContainer}>
        <Animated.View style={singleNextStyle}>
            <BaseButton onPress={next} type={'base'}  title={'Next'} />
        </Animated.View>

          <Animated.View style={[style.group, groupButtonStyle]}>
            <BaseButton containerStyle={{width: 154 }} onPress={prev} type={'base'}  title={'Prev'} />
            <BaseButton containerStyle={{width: 154}} onPress={next} type={'base'}  title={'Next'} />
        </Animated.View>

          <Animated.View style={singleContinueStyle}>
            <BaseButton onPress={continues} type={'base'}  title={'Continue'} />
        </Animated.View>
      </View>
  )
}

const style = StyleSheet.create({
    buttonContainer: {
        width: "100%",
        alignItems:"center",

    },
    group:{
        justifyContent:"space-around",
        alignItems:"center",
        gap: 30,
        flexDirection: "row",
        paddingHorizontal: 35
    }
})