import {createDrawerNavigator} from "@react-navigation/drawer";
import {NavigationLayoutProps} from "@/app/types/route-type";
import {StyleSheet, Text} from "react-native";
import {SCREEN_WIDTH} from "@gorhom/bottom-sheet";
import {CustomDrawerLayout} from "@/view/layout/route/CustomDrawerLayout";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import {routes} from "@/router/route/index-route";

export const DrawerNavigationLayout = ({screens, initialRouteName}:NavigationLayoutProps) => {
    const Drawer = createDrawerNavigator()
  return(
      <Drawer.Navigator
        screenOptions={({navigation, route})=>({
            headerShown: false,
            drawerStyle: [styles.drawerStyle],
            drawerHideStatusBarOnOpen: true,
            drawerLabel:({focused})=>{
                const screen = screens.filter((value)=> value.name == route.name)[0]
                return <Text style={styles.drawerLabel}>{screen.options.title}</Text>
            },
            drawerIcon:()=>{
                const screen = screens.filter((value)=> value.name == route.name)[0]
                const Icon = screen.options.icon
                return (
                    <Icon width={23} height={21} />
                )
            }
        })}
        initialRouteName={initialRouteName}
        drawerContent={(props) => <CustomDrawerLayout {...props} />}
      >
          {
              screens.slice().reverse().map((value, index)=>{
                  // const default =
                      // Object.assign(value?.option
                  const background = (index+1)%2 == 0 ? 'hsla(196, 100%, 98%, 1)' : ThemeConstantUtil.COLOR.white
                  // console.log(Math.round((index+1)%2))


                  return (
                      <Drawer.Screen key={index}  name={value?.name} component={value?.component} options={Object.assign({drawerItemStyle: [styles.drawerItem, {backgroundColor: background}]}, value?.options)} />
                  )
              })
          }
      </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
    drawerStyle: {
        zIndex: 999,
        width: SCREEN_WIDTH * .81,
        paddingHorizontal: 0

    },
    drawerLabel:{
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratMedium,
        fontSize: 15, lineHeight: 18,
        color: ThemeConstantUtil.COLOR.neutral["100"],
        transform: [{translateX: -20}]
    },
    drawerItem:{
        width: "100%",
        paddingHorizontal: 20
    }
})