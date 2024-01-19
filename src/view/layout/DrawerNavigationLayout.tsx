import {createDrawerNavigator} from "@react-navigation/drawer";
import {NavigationLayoutProps} from "@/types/route-type";

export const DrawerNavigationLayout = ({screens, initialRouteName}:NavigationLayoutProps) => {
    const Drawer = createDrawerNavigator()
  return(
      <Drawer.Navigator>
          {
              screens.map((value, index)=>{
                  return (
                      <Drawer.Screen key={index} name={value?.name} component={value?.component} options={value?.option} />
                  )
              })
          }
      </Drawer.Navigator>
  )
}