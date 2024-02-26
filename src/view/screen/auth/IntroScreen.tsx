import {IntroLayout} from "@/view/layout/IntroLayout";
import {StyleSheet, Text, View} from "react-native";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import {IntroContent} from "@/component/content/IntroContent";

export const IntroScreen = () => {
  return(
      <IntroLayout>
        <IntroContent />
      </IntroLayout>
  )
}

