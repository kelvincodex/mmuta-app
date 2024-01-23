import {ScrollView, View} from "react-native";
import {SubjectData} from "@/app/toolkit/data/SubjectData";
import {SubjectCard} from "@/component/card/SubjectCard";

export const SubjectContent = () => {
  return(
      <ScrollView
          contentContainerStyle={{paddingHorizontal: 20}}
      >
          <View>
              {
                  SubjectData.map((value, index)=>{
                      return (
                          <SubjectCard key={index} item={value} />
                      )
                  })
              }
          </View>
      </ScrollView>
  )
}