import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer";
import {indexStyle} from "@/assets/style/Index";
import {ImageAvatar} from "@/component/avatar/ImageAvatar";
import Cancel from "@/assets/icon/base-cancel.svg";
import VerifiedBatch from "@/assets/icon/verifiedBatch.svg";
import Logout from "@/assets/icon/logOut.svg";
import BaseTerminate from "@/assets/icon/base-terminate.svg";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";

interface CustomDrawerLayoutProps {

}
export const CustomDrawerLayout = ({...props}: CustomDrawerLayoutProps & DrawerContentComponentProps) => {
  return (
      <View style={indexStyle.baseContainer}>
        <Image source={require('@/assets/image/drawerTopCurve.png')} style={{width: "100%"}} resizeMode={'cover'} />
          <DrawerContentScrollView
            contentContainerStyle={{}}
            {...props}
          >
              <View style={styles.top}>
                  <View style={styles.profile}>
                      <ImageAvatar containerStyle={{borderColor: ThemeConstantUtil.COLOR.primary["100"], backgroundColor: ThemeConstantUtil.COLOR.neutral["25"], borderWidth: 2}}  src={require('@/assets/image/pic.jpg')} />

                      <View style={{}}>
                          <Text style={{fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratMedium, fontSize: 17, lineHeight: 20, color: ThemeConstantUtil.COLOR.neutral["100"]}}>John D.</Text>
                          <Text style={{fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratMedium, fontSize: 14, lineHeight: 20, color: ThemeConstantUtil.COLOR.neutral["50"]}}>JS 2</Text>
                          <VerifiedBatch  style={[{transform: [{translateY: -40}, {translateX: 70}]}, {zIndex: 999}]} />
                      </View>
                  </View>

                  <Cancel onPress={()=> props.navigation.closeDrawer()} />
              </View>

            <DrawerItemList {...props} />

              <TouchableOpacity style={styles.logout}>
                  <Logout />
                  <Text style={{color: ThemeConstantUtil.COLOR.error, transform:[{translateX: -60}]}}>Log out</Text>
                  <BaseTerminate />
              </TouchableOpacity>
          </DrawerContentScrollView>
        <Image source={require('@/assets/image/drawerBottomCurve.png')} style={{width: "100%"}} resizeMode={'cover'} />
      </View>
  )
}

const styles = StyleSheet.create({
    top:{
        flexDirection: 'row',
        justifyContent:"space-between",
        paddingHorizontal: 30
    },
    profile:{
        flexDirection: 'row',
        gap: 10
    },
    logout:{
        flexDirection: "row",
        justifyContent:"space-between",
        paddingHorizontal: 30,
        height: 22,
        marginTop: 10
    }
})