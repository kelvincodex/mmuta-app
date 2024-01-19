import {NavigatorTypeConstantUtil} from "@/util/constant/NavigatorTypeConstantUtil";
import {routes} from "@/router/route/index-route";

export class RouteHelperUtil {
    static navigate =(navigation: any, routeName: any, params?: any) => {
        const route = routes.filter((value)=> value.name === routeName)

        console.log(route[0]?.options.type)

        if (route.length < 0){
            console.log('Route does not exist')
            return false
        }
        if (route[0]?.options.type == NavigatorTypeConstantUtil.Stack){
                navigation.navigate(routeName, params)
                return true;
        }else if (route[0]?.options.type == NavigatorTypeConstantUtil.Drawer){
            navigation.navigate(NavigatorTypeConstantUtil.Drawer, {
                screen: routeName
            })
            return true;
        }else if (route[0]?.options.type == NavigatorTypeConstantUtil.BottomTab){
            navigation.navigate(NavigatorTypeConstantUtil.Drawer, {
                screens: NavigatorTypeConstantUtil.BottomTab,
                params: {
                    screen: routeName
                }
            })
            return true;
        }else {
            console.log('Unknown type')
            return false
        }

    }
}