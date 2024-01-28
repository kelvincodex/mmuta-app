import {RouterConstantUtil} from "@/util/constant/RouterConstantUtil";
import {NavigatorTypeConstantUtil} from "@/util/constant/NavigatorTypeConstantUtil";
import {HomeScreen} from "@/view/screen/page/HomeScreen";
import Profile from "@/assets/icon/profile.svg"
import Lesson from "@/assets/icon/lesson.svg"
import Tutor from "@/assets/icon/tutor.svg"
import Stats from "@/assets/icon/stats.svg"
import SavedLesson from "@/assets/icon/savedLesson.svg"
import Exam from "@/assets/icon/exam.svg"
import LiveClass from "@/assets/icon/liveClass.svg"
import Games from "@/assets/icon/games.svg"
import ContactUs from "@/assets/icon/contactUs.svg"
import Settings from "@/assets/icon/settings.svg"
import RateUs from "@/assets/icon/rate-us.svg"
import LearnToEarn from "@/assets/icon/learnToEarn.svg"
import {ProfileScreen} from "@/view/screen/page/ProfileScreen";
import {MyLessonScreen} from "@/view/screen/page/MyLessonScreen";
import {MyStatsScreen} from "@/view/screen/page/MyStatsScreen";



export const drawerRoute = [
    {
        name: RouterConstantUtil.drawer.learnToEarn,
        component: HomeScreen,
        options: {type: NavigatorTypeConstantUtil.Drawer, title: 'Learn to Earn', icon: LearnToEarn}
    },
    {
        name: RouterConstantUtil.drawer.rateUs,
        component: HomeScreen,
        options: {type: NavigatorTypeConstantUtil.Drawer, title: 'Rate Us', icon: RateUs}
    },
    {
        name: RouterConstantUtil.drawer.settings,
        component: HomeScreen,
        options: {type: NavigatorTypeConstantUtil.Drawer, title: 'Settings', icon: Settings}
    },
    {
        name: RouterConstantUtil.drawer.contactUs,
        component: HomeScreen,
        options: {type: NavigatorTypeConstantUtil.Drawer, title: 'Contact Us', icon: ContactUs}
    },
    {
        name: RouterConstantUtil.drawer.multiplayerGames,
        component: HomeScreen,
        options: {type: NavigatorTypeConstantUtil.Drawer, title: 'Multiplayer Games', icon: Games}
    },
    {
        name: RouterConstantUtil.drawer.liveClasses,
        component: HomeScreen,
        options: {type: NavigatorTypeConstantUtil.Drawer, title: 'Live Classes', icon: LiveClass}
    },
    {
        name: RouterConstantUtil.drawer.testAndExam,
        component: HomeScreen,
        options: {type: NavigatorTypeConstantUtil.Drawer, title: 'Tests & Exams', icon: Exam}
    },
    {
        name: RouterConstantUtil.drawer.savedLesson,
        component: HomeScreen,
        options: {type: NavigatorTypeConstantUtil.Drawer, title: 'Saved Lesson', icon: SavedLesson}
    },
    {
        name: RouterConstantUtil.drawer.stats,
        component: MyStatsScreen,
        options: {type: NavigatorTypeConstantUtil.Drawer, title: 'My Stats', icon: Stats}
    },
    {
        name: RouterConstantUtil.drawer.tutor,
        component: HomeScreen,
        options: {type: NavigatorTypeConstantUtil.Drawer, title: 'My Tutor', icon: Tutor}
    },
    {
        name: RouterConstantUtil.drawer.lesson,
        component: MyLessonScreen,
        options: {type: NavigatorTypeConstantUtil.Drawer, title: 'My Lesson', icon: Lesson}
    },
    {
        name: RouterConstantUtil.drawer.profile,
        component: ProfileScreen,
        options: {type: NavigatorTypeConstantUtil.Drawer, title: 'My Profile', icon: Profile}
    },
]