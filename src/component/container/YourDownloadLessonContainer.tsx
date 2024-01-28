import {Text, View} from "react-native";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import {SubjectData} from "@/app/toolkit/data/SubjectData";
import {DownloadLessonCard} from "@/component/card/DownloadLessonCard";

export const YourDownloadLessonContainer = () => {
  return(
      <View>
          <Text style={{fontSize: 16, fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratMedium, lineHeight: 19, color: ThemeConstantUtil.COLOR.neutral["75"], marginVertical: 10}}>Your downloaded lessons</Text>
          {
              SubjectData.map((value, index)=>{
                  return (
                      <DownloadLessonCard key={index} item={value} />
                  )
              })
          }
      </View>
  )
}