import {ImageBackground, StyleSheet, Text, View} from "react-native";
import {ImageAvatar} from "@/component/avatar/ImageAvatar";
import BaseMenu from "@/assets/icon/base-menu.svg"
import {BaseButton} from "@/component/button/BaseButton";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import {useNavigation} from "@react-navigation/native";
import {DrawerHeaderProps, DrawerNavigationProp} from "@react-navigation/drawer";
import {RouteHelperUtil} from "@/util/helper/RouteHelperUtil";
import {RouterConstantUtil} from "@/util/constant/RouterConstantUtil";
export const HomeHeaderContainer = () => {
    const navigation = useNavigation<DrawerNavigationProp<any>>()

    function navigateToProfile() {
        RouteHelperUtil.navigate(navigation, RouterConstantUtil.drawer.profile)
    }
  return(
      <ImageBackground source={require('@/assets/image/homeCurveTop.png')} resizeMode={'cover'} style={{height: 251, paddingHorizontal: 30}}>
        <View style={styles.container}>
            <ImageAvatar  onPress={navigateToProfile} src={require('@/assets/image/pic.jpg')} />
            <BaseMenu onPress={()=> navigation.openDrawer()} />
        </View>

          <Text style={styles.name}>Good evening, John</Text>
          <BaseButton containerStyle={{transform: [{translateY: 50}], alignSelf: 'flex-end', width: 183}} textStyle={{fontSize: 16}} type={'base'} title={'Continue class'} />
      </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    name:{
        fontSize: 22,
        lineHeight: 26,
        color: ThemeConstantUtil.COLOR.white,
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratBold,
        marginTop: 10,
        transform: [{translateY: 20}]
    }
})