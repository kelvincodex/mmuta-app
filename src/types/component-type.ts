import {StyleProp, TextStyle, ViewStyle} from "react-native";

export interface BaseButtonProps {
    title: string,
    textStyle?: StyleProp<TextStyle>
    containerStyle?: StyleProp<ViewStyle>
    type?: 'base'|'border'|'normal'
}