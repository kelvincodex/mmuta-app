import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationLayoutProps} from "@/app/types/route-type";


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