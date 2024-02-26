import {useLayoutEffect} from "react";
import {useNavigation} from "@react-navigation/native";
import {TopicHeaderContainer} from "@/component/container/TopicHeaderContainer";

export const TopicScreen = () => {
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: ()=> <TopicHeaderContainer />
    })
  }, []);
  return (
      <></>
  )
}