import {ScrollView, View} from "react-native";
import {MostRecentContainer} from "@/component/container/MostRecentContainer";
import {EarlierContainer} from "@/component/container/EarlierContainer";
import {SearchInput} from "@/component/input/SearchInput";

export const NotificationContent = () => {
  return(
      <ScrollView
          contentContainerStyle={{paddingHorizontal: 30}}
      >
          <MostRecentContainer />
          <EarlierContainer />
      </ScrollView>
  )
}