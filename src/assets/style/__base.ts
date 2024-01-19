import {StyleSheet} from "react-native";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";

export const baseStyle = StyleSheet.create({
    baseButtonContainer:{
        borderWidth: 2,
        width: 276,
        height: 46,
        borderRadius: 50,
        borderColor: ThemeConstantUtil.COLOR.secondary["100"],
        justifyContent:"center",
        alignItems:"center",
    },
    baseButtonTitle: {
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratBold,
        fontSize: 20,
        lineHeight: 24,
        color: ThemeConstantUtil.COLOR.secondary["100"]
    }
})