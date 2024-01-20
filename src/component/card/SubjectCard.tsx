import {Image, StyleSheet, Text, View} from "react-native";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import {ImageAvatar} from "@/component/avatar/ImageAvatar";
import Player from "@/assets/icon/base-player.svg"
import BaseArrowRight from "@/assets/icon/base-arrow-right.svg"
import {ProgressBar} from "@/component/util/ProgressBar";
import {HomeLearningDataProps} from "@/toolkit/data/HomeLearningData";

interface SubjectCardProps {
    item: HomeLearningDataProps
}
export const SubjectCard = ({item}: SubjectCardProps) => {
  return(
      <View style={styles.container}>
          <View style={{flexDirection: 'row', gap: 10, marginBottom: 20, }}>
              <ImageAvatar src={require('@/assets/image/feature-subject.png')} containerStyle={{width: 45, height: 45}} />
              <View>
                  <Text style={styles.title}>Basic Science</Text>
                  <View style={{flexDirection: 'row', alignItems:'center', marginTop: 5}}>
                      <Player />
                      <Text style={styles.smallText}> 1 topics completed (1/9)</Text>
                  </View>
              </View>
              <BaseArrowRight style={{transform: [{translateX: 70}]}} />
          </View>
          <ProgressBar />
      </View>
  )
}

const styles = StyleSheet.create({
    container:{
        height: 110,
        backgroundColor: ThemeConstantUtil.COLOR.white,
        borderRadius: 10,
        elevation: 0.3,
        overflow: 'hidden',
        marginTop: 10,
        padding: 15
    },
    title: {
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratMedium,
        fontSize: 16,
        lineHeight: 19,
        color: ThemeConstantUtil.COLOR.neutral["100"]
    },
    smallText:{
        color: ThemeConstantUtil.COLOR.neutral["75"],
        fontSize: 12,
        lineHeight: 14,
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratRegular
    }
})