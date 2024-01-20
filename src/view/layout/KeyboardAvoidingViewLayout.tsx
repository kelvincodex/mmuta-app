import {KeyboardAvoidingView, Platform, ScrollView, StyleProp, ViewStyle} from "react-native";
import {ReactNode} from "react";

interface KeyboardAvoidingViewLayoutProps {
    children: ReactNode,
    containerStyle?: StyleProp<ViewStyle>
}
export const KeyboardAvoidingViewLayout = ({children, containerStyle}: KeyboardAvoidingViewLayoutProps) => {
  return (
      <KeyboardAvoidingView style={[{flex: 1}, containerStyle]} behavior={Platform.OS == 'ios' ?"padding": undefined}>
          <ScrollView
            contentContainerStyle={{minHeight: "100%"}}
          >
              {children}
          </ScrollView>
      </KeyboardAvoidingView>
  )
}