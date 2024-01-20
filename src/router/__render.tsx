import {routes} from "@/router/route/index-route";
import {NavigatorTypeConstantUtil} from "@/util/constant/NavigatorTypeConstantUtil";
import {DrawerNavigationLayout} from "@/view/layout/route/DrawerNavigationLayout";
import {BottomTabNavigationLayout} from "@/view/layout/route/BottomTabNavigationLayout";
import {StackNavigationLayout} from "@/view/layout/route/StackNavigationLayout";
import {RouterConstantUtil} from "@/util/constant/RouterConstantUtil";
import Home from "@/assets/icon/home.svg";

export const RenderNavigation = () => {
  const StackRoutes = routes.filter((value)=> value.options.type == NavigatorTypeConstantUtil.Stack)
  const DrawerRoutes = routes.filter((value)=> value.options.type == NavigatorTypeConstantUtil.Drawer)
  const BottomTabRoutes = routes.filter((value)=> value.options.type == NavigatorTypeConstantUtil.BottomTab)



  function RenderBottomTab() {
    return <BottomTabNavigationLayout initialRouteName={""} screens={BottomTabRoutes} />
  }

  const BottomTabRoute = [
    {
      name: NavigatorTypeConstantUtil.BottomTab,
      component: RenderBottomTab,
      options: {title: 'Home', icon: Home}
    }
  ]

  function RenderDrawer() {
    return <DrawerNavigationLayout initialRouteName={NavigatorTypeConstantUtil.BottomTab} screens={DrawerRoutes.concat(BottomTabRoute)} />
  }

  const DrawerRoute = [
    {
      name: NavigatorTypeConstantUtil.Drawer,
      component: RenderDrawer,
    }
  ]
  const IndexRoutes = StackRoutes.concat(DrawerRoute)
  return (
      <StackNavigationLayout initialRouteName={RouterConstantUtil.onboarding.startup} screens={IndexRoutes} />
  )
}