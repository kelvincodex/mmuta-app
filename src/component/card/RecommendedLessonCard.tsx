import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import Rate from "@/assets/icon/green-rate.svg"
import Video from "@/assets/icon/video.svg"
import {HomeLearningDataProps} from "@/app/toolkit/data/HomeLearningData";
import Animated, {FadeIn} from "react-native-reanimated";

interface SubjectCardProps {
    item: HomeLearningDataProps
}
export const RecommendedLessonCard = ({item}: SubjectCardProps) => {
  return(
      <Animated.View entering={FadeIn.duration(500).randomDelay()}>
          <TouchableOpacity style={styles.container}>
              <Image source={require('@/assets/image/mathematics.png')} resizeMode={'cover'} style={{width: 162, height: 80, borderRadius: 5}} />
              <Text style={styles.topic}>Lexis & Structure</Text>
              <Text style={styles.title}>English</Text>
              <Text style={styles.author}>by Melvin James</Text>

              <View style={{borderBottomWidth: 2, width: '100%', borderBottomColor: ThemeConstantUtil.COLOR.neutral["25"]}} />

              <View style={{flexDirection: 'row', justifyContent:"space-between", alignItems:"center", width: '100%', paddingHorizontal: 15, transform: [{translateY: 15}]}}>
                  <Rate />
                  <Text style={styles.rate}>4.7</Text>
                  <Video />
              </View>
          </TouchableOpacity>
      </Animated.View>
  )
}

const styles = StyleSheet.create({
    container:{
        width: 170,
        height: 222,
        backgroundColor: ThemeConstantUtil.COLOR.white,
        borderRadius: 10,
        marginTop: 15,
        overflow:'hidden',
        alignItems:"center",
        paddingTop: 5
    },
    topic: {
        alignSelf: 'flex-start',
        marginLeft: 15,
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratMedium,
        fontSize: 12,
        lineHeight: 14,
        color: ThemeConstantUtil.COLOR.neutral["100"],
        marginVertical: 10
    },
    author: {
        alignSelf: 'flex-start',
        marginLeft: 15,
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratMedium,
        fontSize: 9,
        lineHeight: 10,
        color: ThemeConstantUtil.COLOR.neutral["75"],
        marginVertical: 20

    },
    title: {
        alignSelf: 'flex-start',
        marginLeft: 15,
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratMedium,
        fontSize: 9,
        lineHeight: 10,
        color: ThemeConstantUtil.COLOR.neutral["50"],

    },
    rate:{
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratMedium,
        fontSize: 12,
        lineHeight: 14,
        color: ThemeConstantUtil.COLOR.neutral["50"],
        transform: [{translateX: -40}]
    }
})