import {ScrollView, Text, View} from "react-native";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import {SubjectData} from "@/app/toolkit/data/SubjectData";
import {DownloadLessonCard} from "@/component/card/DownloadLessonCard";
import {YourDownloadLessonContainer} from "@/component/container/YourDownloadLessonContainer";

export const SavedContent = () => {
  return(
      <ScrollView
          contentContainerStyle={{paddingHorizontal: 30}}
      >
         <YourDownloadLessonContainer />
      </ScrollView>
  )
}