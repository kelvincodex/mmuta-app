import {FlatList, StyleSheet, Text, View} from "react-native";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import {HomeLearningData} from "@/app/toolkit/data/HomeLearningData";
import {SubjectCard} from "@/component/card/SubjectCard";
import {RecommendedLessonCard} from "@/component/card/RecommendedLessonCard";
import Animated, {FadeIn} from "react-native-reanimated";

export const HomeRecommendedLessonContainer = () => {
  return(
      <View style={styles.container}>
          <View style={{flexDirection: 'row', justifyContent:'space-between', marginTop: 10}}>
              <Text style={{fontSize: 16, fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratMedium, lineHeight: 19, color: ThemeConstantUtil.COLOR.neutral["75"]}}>Recommended Lessons</Text>
              <Text style={{fontSize: 16, fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratRegular, lineHeight: 19, color: ThemeConstantUtil.COLOR.primary["100"]}}>See all</Text>
          </View>

          <View style={{flexDirection: 'row', gap: 10}}>
              {
                  HomeLearningData.map((value, index)=>{
                      return(
                          <RecommendedLessonCard item={value} key={index} />
                      )
                  })
              }
          </View>
      </View>
  )
}


const styles = StyleSheet.create({
    container:{

    }
})