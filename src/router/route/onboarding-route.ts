import {RouterConstantUtil} from "@/util/constant/RouterConstantUtil";
import {StartupScreen} from "@/view/screen/onboarding/StartupScreen";
import {NavigatorTypeConstantUtil} from "@/util/constant/NavigatorTypeConstantUtil";
import {LanguageScreen} from "@/view/screen/onboarding/LanguageScreen";
import {GetStartedScreen} from "@/view/screen/onboarding/GetStartedScreen";

export const onboardingRoute = [
    {
        name: RouterConstantUtil.onboarding.startup,
        component: StartupScreen,
        options: {type: NavigatorTypeConstantUtil.Stack}
    },
    {
        name: RouterConstantUtil.onboarding.language,
        component: LanguageScreen,
        options: {type: NavigatorTypeConstantUtil.Stack}
    },
    {
        name: RouterConstantUtil.onboarding.getStarted,
        component: GetStartedScreen,
        options: {type: NavigatorTypeConstantUtil.Stack}
    },
]