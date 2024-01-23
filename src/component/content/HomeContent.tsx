import {ScrollView} from "react-native";
import {NewestFeatureCard} from "@/component/card/NewestFeatureCard";
import {HomeFeaturedContainer} from "@/component/container/HomeFeaturedContainer";
import {HomeLearningContainer} from "@/component/container/HomeLearningContainer";
import {HomeRecommendedLessonContainer} from "@/component/container/HomeRecommendedLessonContainer";

export const HomeContent = () => {
  return (
      <ScrollView
          contentContainerStyle={{paddingHorizontal: 30}}
      >
          <NewestFeatureCard />
          <HomeFeaturedContainer />
          <HomeLearningContainer />
          <HomeRecommendedLessonContainer />
      </ScrollView>
  )
}