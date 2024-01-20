import {View} from "react-native";
import {SearchInput} from "@/component/input/SearchInput";
import {NewestFeatureCard} from "@/component/card/NewestFeatureCard";
import {HomeFeaturedContainer} from "@/component/container/HomeFeaturedContainer";
import {HomeLearningContainer} from "@/component/container/HomeLearningContainer";
import {HomeRecommendedLessonContainer} from "@/component/container/HomeRecommendedLessonContainer";

export const HomeContent = () => {
  return(
        <View>
            <SearchInput />
            <NewestFeatureCard />
            <HomeFeaturedContainer />
            <HomeLearningContainer />
            <HomeRecommendedLessonContainer />
        </View>
  )
}