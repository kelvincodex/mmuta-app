import {ImageBackground, StyleSheet, Text, View} from "react-native";
import BaseArrow from "@/assets/icon/base-arrow-left.svg"
import BaseMenu from "@/assets/icon/base-menu.svg"
import Player from "@/assets/icon/white-base-player.svg"
import {ProgressBar} from "@/component/util/ProgressBar";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import {useNavigation} from "@react-navigation/native";
import {DrawerNavigationProp} from "@react-navigation/drawer";

export const TopicHeaderContainer = () => {
    const navigation = useNavigation<DrawerNavigationProp<any>>()

  return(
      <ImageBackground source={require('@/assets/image/topicHeader.png')} resizeMode={'cover'} style={styles.container}>
          <View style={{flexDirection: 'row', justifyContent:'space-between', marginTop: 60}}>
              <BaseArrow onPress={()=>navigation.goBack()} />
              <BaseMenu onPress={()=>navigation.openDrawer()} />
          </View>
            <View style={{alignItems: 'center'}}>
                <Text style={styles.title}>Basic Science</Text>
                <View style={{marginVertical: 10, flexDirection: 'row', gap: 3}}>
                    <Player />
                    <Text style={styles.subtitle}>0 topics completed (0/7)</Text>
                </View>

                <ProgressBar innerContainerStyle={{backgroundColor: ThemeConstantUtil.COLOR.primary["25"], width: '30%'}} containerStyle={{width: 320, marginVertical: 40, backgroundColor: ThemeConstantUtil.COLOR.primary["75"]}}  />
            </View>
      </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container:{
        height: 251,
        paddingHorizontal: 40,
    },
    title:{
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratBold,
        fontSize: 27,
        lineHeight: 32,
        color: ThemeConstantUtil.COLOR.white,
        marginTop: 15
    },
    subtitle: {
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratMedium,
        fontSize: 16,
        lineHeight: 19,
        color: ThemeConstantUtil.COLOR.white,

    }
})