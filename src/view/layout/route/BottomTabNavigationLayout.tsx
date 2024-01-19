import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationLayoutProps} from "@/types/route-type";

export const BottomTabNavigationLayout = ({screens, initialRouteName}: NavigationLayoutProps) => {
    const BottomTab = createBottomTabNavigator()

  return(
      <BottomTab.Navigator>
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