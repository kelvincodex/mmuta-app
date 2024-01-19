import {StyleSheet} from "react-native";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";

export const indexStyle = StyleSheet.create({
    flex: {
        flex: 1
    },
    center:{
        justifyContent:"center",
        alignItems:"center",
    },
    bottom:{
        justifyContent:"center",
        alignItems:"flex-end",
    },
    top:{
        justifyContent:"center",
        alignItems:"flex-end",
    },
    baseContainer: {
        flex: 1,
        backgroundColor: "hsla(0, 0%, 100%, 1)"
    },
    language_curveTop:{
        flex: 0.3,
        justifyContent:"flex-start",
        alignItems:"center",
    },
    language_logo: {
        marginTop: 50,
        width: 59,
        height: 61
    },
    language_text: {
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratBold,
        color: ThemeConstantUtil.COLOR.neutral["75"],
        fontSize: 20,
        lineHeight: 25,
        marginBottom: 40,
        textAlign: 'center'
    },

    language_sub_container:{
        // borderWidth: 2,
        flex: 0.7,
        width: "100%",
        alignItems:"center"
    }
})