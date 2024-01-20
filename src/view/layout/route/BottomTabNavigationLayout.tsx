import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationLayoutProps} from "@/types/route-type";
import {StyleSheet, Text} from "react-native";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";

export const BottomTabNavigationLayout = ({screens, initialRouteName}: NavigationLayoutProps) => {
    const BottomTab = createBottomTabNavigator()

  return(
      <BottomTab.Navigator
        screenOptions={({route, navigation})=>({
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarStyle: styles.tabBarStyle,
            tabBarLabel: ({focused})=>{
                const screen = screens.filter((value)=> value.name == route.name)[0]
                const color = focused ? ThemeConstantUtil.COLOR.accent["75"] : ThemeConstantUtil.COLOR.neutral["50"]
                return (
                    <Text style={[styles.tabBarLabel, {color: color}]}>{screen.options.title}</Text>
                )
            },
            tabBarIcon: ({focused})=> {
                const screen = screens.filter((value)=> value.name == route.name)[0]
                const Icon = focused ? screen.options.focusedIcon : screen.options.unFocusedIcon
                return (
                    <Icon width ={30} height={27}  />
                )
            }
        })}
        initialRouteName={initialRouteName}
      >
          {
              screens.map((value, index)=>{
                  return (
                      <BottomTab.Screen key={index} name={value?.name} component={value?.component} options={value?.option} />
                  )
              })
          }
      </BottomTab.Navigator>
  )
}

const styles = StyleSheet.create({
    tabBarStyle:{
        height: 90,
        elevation: 4,
        borderTopWidth: 1,
        borderTopColor: ThemeConstantUtil.COLOR.accent["75"],
        backgroundColor: ThemeConstantUtil.COLOR.white
    },
    tabBarLabel:{
        color: ThemeConstantUtil.COLOR.neutral["50"],
        fontFamily: ThemeConstantUtil.FONT_FAMILY.glory,
        fontSize: 14,
        transform: [{translateY: -15}]
    }
})