import {FlatList, StyleSheet, Text, View} from "react-native";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import {HomeLearningData} from "@/app/toolkit/data/HomeLearningData";
import {SubjectCard} from "@/component/card/SubjectCard";
import Animated, {FadeIn} from "react-native-reanimated";

export const HomeLearningContainer = () => {
  return(
      <View
          style={styles.container}>
          <View style={{flexDirection: 'row', justifyContent:'space-between', marginTop: 10}}>
              <Text style={{fontSize: 16, fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratMedium, lineHeight: 19, color: ThemeConstantUtil.COLOR.neutral["75"]}}>Continue learning</Text>
              <Text style={{fontSize: 16, fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratRegular, lineHeight: 19, color: ThemeConstantUtil.COLOR.primary["100"]}}>See all</Text>
          </View>

          <View>
              {
                  HomeLearningData.map((value, index)=>{
                      return(
                          <SubjectCard item={value} key={index} />
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