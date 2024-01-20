import {Dimensions, StyleSheet, useWindowDimensions} from "react-native";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
const {height, width} =Dimensions.get("window")
export const indexStyle = StyleSheet.create({
    flex: {
        flex: 1
    },
    center:{
        justifyContent:"center",
        alignItems:"center",
    },
    bottom:{
        justifyContent:"flex-end",
        alignItems:"center",
    },
    top:{
        justifyContent:"flex-start",
        alignItems:"center",
    },
    baseContainer: {
        flex: 1,
        backgroundColor: ThemeConstantUtil.COLOR.white
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
        flex: 0.7,
        width: "100%",
        alignItems:"center"
    },
    feature_curve:{
        height: "100%",
        width: width

    },
    feature_image:{
        ...StyleSheet.absoluteFillObject,
        height: "81%",
        width: "100%",
        alignSelf:"center",
        opacity: 0.5,
        borderBottomLeftRadius: 200,
        borderBottomRightRadius: 150,
        transform: [{rotate: '13deg'}, {scaleX: 1.5}]
    },
    skip:{
        fontFamily: ThemeConstantUtil.FONT_FAMILY.glory,
        color: ThemeConstantUtil.COLOR.white,
        fontSize: 20,
        lineHeight: 22
    },
    justifyBetween:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    justifyCenter:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    dot: {
        width: 14,
        height: 14,
        borderRadius: 50,
        backgroundColor: ThemeConstantUtil.COLOR.neutral["25"]
    }
})