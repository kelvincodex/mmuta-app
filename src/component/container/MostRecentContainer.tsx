import {Image, StyleSheet, Text, View} from "react-native";
import MenuDot from "@/assets/icon/menu-dots.svg"
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import Animated, {BounceIn, ZoomOut} from "react-native-reanimated";
export const MostRecentContainer = () => {

  return(
      <View >
          <View style={styles.content}>
              <Text style={{color: ThemeConstantUtil.COLOR.neutral["75"], fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratMedium, fontSize: 16}}>Most recent</Text>
              <MenuDot />
          </View>

          <Animated.View
              entering={BounceIn.duration(500)}
              style={styles.constant}>
            <Text style={styles.text}>No new notifications</Text>
              <Image source={require('@/assets/image/thumbsUp.png')} resizeMode={'cover'} />
          </Animated.View>
      </View>
  )
}

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    constant:{
        height: 123,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems:'center',
        flexDirection: 'row',
        gap: 30,
        backgroundColor: ThemeConstantUtil.COLOR.white,
        elevation: .3,
    },
    text: {
        color: ThemeConstantUtil.COLOR.neutral["75"],
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratRegular,
        fontSize: 16,
        lineHeight: 19,
    }
})