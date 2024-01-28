import {ScrollView} from "react-native";
import {HomeRecommendedLessonContainer} from "@/component/container/HomeRecommendedLessonContainer";
import {YourDownloadLessonContainer} from "@/component/container/YourDownloadLessonContainer";

export const MyLessonContent = () => {
  return(
      <ScrollView
          contentContainerStyle={{paddingHorizontal: 30}}
      >
          <YourDownloadLessonContainer />
          <HomeRecommendedLessonContainer />
      </ScrollView>
  )
}