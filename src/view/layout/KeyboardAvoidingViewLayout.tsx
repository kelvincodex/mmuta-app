import {KeyboardAvoidingView, Platform, ScrollView, ScrollViewProps, StyleProp, ViewStyle} from "react-native";
import {ReactNode} from "react";

interface KeyboardAvoidingViewLayoutProps {
    children: ReactNode,
    containerStyle?: StyleProp<ViewStyle>
}
export const KeyboardAvoidingViewLayout = ({children, containerStyle, ...props}: KeyboardAvoidingViewLayoutProps & ScrollViewProps) => {
  return (
      <KeyboardAvoidingView style={[{flex: 1}, containerStyle]} behavior={Platform.OS == 'ios' ?"padding": undefined}>
          <ScrollView
              automaticallyAdjustKeyboardInsets={true}
              contentContainerStyle={{minHeight: "100%"}}
              {...props}
          >
              {children}
          </ScrollView>
      </KeyboardAvoidingView>
  )
}