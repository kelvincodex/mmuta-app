import { View} from "react-native";
import {indexStyle} from "@/assets/style/Index";
import {FeatureContent} from "@/component/content/FeatureContent";

export const FeatureScreen = () => {

    return (
      <View style={indexStyle.baseContainer}>
          <FeatureContent />
      </View>
  )
}

