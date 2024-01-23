import {NavigationLayoutProps} from "@/app/types/route-type";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

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

export const StackNavigationLayout = ({screens, initialRouteName}: NavigationLayoutProps) => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName={initialRouteName}
        >
            {
                screens.map((value, index)=>{
                    return (
                        <Stack.Screen key={index} name={value?.name} component={value?.component} options={value?.option} />
                    )
                })
            }
        </Stack.Navigator>
    )
}