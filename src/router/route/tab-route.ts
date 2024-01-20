import {RouterConstantUtil} from "@/util/constant/RouterConstantUtil";
import {NavigatorTypeConstantUtil} from "@/util/constant/NavigatorTypeConstantUtil";
import {HomeScreen} from "@/view/screen/page/HomeScreen";
import ActiveHome from "@/assets/icon/active-home.svg"
import Home from "@/assets/icon/home.svg"
import ActiveAlert from "@/assets/icon/active-notification.svg";
import Alert from "@/assets/icon/notification.svg";
import ActiveSubject from "@/assets/icon/active-subject.svg";
import Subject from "@/assets/icon/subject.svg";
import ActiveSaved from "@/assets/icon/active-bookmark.svg";
import Saved from "@/assets/icon/bookmark.svg";



export const tabRoute = [
    {
        name: RouterConstantUtil.tab.home,
        component: HomeScreen,
        options: {type: NavigatorTypeConstantUtil.BottomTab, title: 'Home', focusedIcon: ActiveHome, unFocusedIcon: Home}
    },
    {
        name: RouterConstantUtil.tab.subject,
        component: HomeScreen,
        options: {type: NavigatorTypeConstantUtil.BottomTab, title: 'Subject', focusedIcon: ActiveSubject, unFocusedIcon: Subject}
    },
    {
        name: RouterConstantUtil.tab.saved,
        component: HomeScreen,
        options: {type: NavigatorTypeConstantUtil.BottomTab, title: 'Saved', focusedIcon: ActiveSaved, unFocusedIcon: Saved}
    },

    {
        name: RouterConstantUtil.tab.notification,
        component: HomeScreen,
        options: {type: NavigatorTypeConstantUtil.BottomTab, title: 'Alert', focusedIcon: ActiveAlert, unFocusedIcon: Alert}
    },
]