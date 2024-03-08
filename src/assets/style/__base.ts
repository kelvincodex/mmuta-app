import {StyleSheet} from "react-native";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";

export const baseStyle = StyleSheet.create({
    baseButtonContainer:{
        borderWidth: 2,
        width: 276,
        height: 44,
        borderRadius: 50,
        borderColor: ThemeConstantUtil.COLOR.secondary["100"],
        justifyContent:"center",
        alignItems:"center",
    },
    baseButtonTitle: {
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratBold,
        fontSize: 18,
        lineHeight: 24,
        color: ThemeConstantUtil.COLOR.secondary["100"]
    },
    inputContainer:{
        borderWidth: 2,
        width: 312,
        height: 62,
        borderRadius: 10,
        borderColor: ThemeConstantUtil.COLOR.neutral["25"],
        marginTop: 6,
        flexDirection: "row",
        justifyContent:"space-between"
    },
    textInputContainer:{
        width: 'auto',
        height: 'auto',
    },
    input:{
        flex: .7,
        paddingLeft: 15,
        fontSize: 15,
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratAltRegular,
        lineHeight: 18,
        color: ThemeConstantUtil.COLOR.neutral["75"]
    },

    eyeIconContainer:{
        flex: .15,
        alignItems: 'center',
        justifyContent:'center'
    },

    iconContainer:{
        flex: .15,
        borderRightWidth: 1,
        borderRightColor: ThemeConstantUtil.COLOR.neutral["25"],
        justifyContent:'center',
        alignItems:'center',

    },
    textInputLabel:{
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratAltRegular,
        color: ThemeConstantUtil.COLOR.neutral["50"],
        fontSize: 13,
        lineHeight: 15
    }
})