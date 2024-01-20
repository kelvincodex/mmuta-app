import {ImageBackground, StyleSheet, Text, View} from "react-native";
import Arrow from "@/assets/icon/white-left-arrow.svg"
import Menu from "@/assets/icon/base-menu.svg"
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import {useNavigation} from "@react-navigation/native";
import {DrawerNavigationProp} from "@react-navigation/drawer";

interface TabHeaderContainerProps {
    title: string
}
export const TabHeaderContainer = ({title}: TabHeaderContainerProps) => {
    const navigation = useNavigation<DrawerNavigationProp<any>>()
  return(
      <ImageBackground source={require('@/assets/image/tabTopCurve.png')} resizeMode={'cover'} style={styles.container}>
          <Arrow onPress={()=> navigation.goBack()} />
          <Text style={styles.title}>{title}</Text>
          <Menu onPress={()=> navigation.openDrawer()} />
      </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container: {width: '100%', height: 149, flexDirection: 'row',  justifyContent:'space-around', alignItems:'center'},
    title: {
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratBold,
        fontSize: 22,
        lineHeight: 28,
        color: ThemeConstantUtil.COLOR.white
    }
})