import {onboardingRoute} from "@/router/route/onboarding-route";
import {authRoute} from "@/router/route/auth-route";
import {pageRoute} from "@/router/route/page-route";

const initRoute: any[] = []


export const routes = initRoute.concat(onboardingRoute, authRoute, pageRoute)