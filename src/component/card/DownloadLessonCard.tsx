import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import MenuDots from "@/assets/icon/menu-dots.svg"
import {ProgressBar} from "@/component/util/ProgressBar";
import {HomeLearningDataProps} from "@/app/toolkit/data/HomeLearningData";
import Animated, {SlideInLeft} from "react-native-reanimated";

interface SubjectCardProps {
    item: HomeLearningDataProps
}

export const DownloadLessonCard = ({item}: SubjectCardProps) => {
  return(
      <Animated.View
          entering={SlideInLeft.duration(500).randomDelay()}
          >
          <TouchableOpacity style={styles.container}>
              <Image source={require('@/assets/image/lesson.png')} resizeMode={'cover'}  />
              <View style={styles.textContainer}>
                  <Text>Basic Science</Text>
                  <Text style={{marginBottom: 15}}>Categorization of Light</Text>
                  <MenuDots  style={{transform: [{translateX: 200}, {translateY: -50}]}} />

                  <ProgressBar  />
              </View>
          </TouchableOpacity>

      </Animated.View>
  )
}

const styles = StyleSheet.create({
    container:{
        height: 123,
        backgroundColor: ThemeConstantUtil.COLOR.white,
        borderRadius: 10,
        elevation: 0.3,
        overflow:"hidden",
        marginVertical: 9,
        flexDirection: 'row',
    },
    textContainer:{
         marginLeft: 10,
        flex: 1,
        padding: 15
    }
})