import {onboardingRoute} from "@/router/route/onboarding-route";
import {authRoute} from "@/router/route/auth-route";
import {tabRoute} from "@/router/route/tab-route";
import {drawerRoute} from "@/router/route/drawer-route";
import {pageRoute} from "@/router/route/page-route";

const initRoute: any[] = []


export const routes = initRoute.concat(onboardingRoute, authRoute, tabRoute, drawerRoute, pageRoute)