import {StyleProp, TextStyle, ViewStyle} from "react-native";
import {FeatureDataProps} from "@/app/types/toolkit-type";
import {SharedValue} from "react-native-reanimated";

export interface BaseButtonProps {
    title: string,
    textStyle?: StyleProp<TextStyle>
    containerStyle?: StyleProp<ViewStyle>
    type?: 'base'|'border'|'normal'
}

export interface FeatureRenderContainerProps {
    item: FeatureDataProps,
    index: number,
    flatListIndex: SharedValue<number>
}