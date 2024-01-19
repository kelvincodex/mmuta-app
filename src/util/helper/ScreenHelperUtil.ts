import {Dimensions, useWindowDimensions} from "react-native";



const {height, width} = Dimensions.get('window')
export default {
    SCREEN_HEIGHT: height,
    SCREEN_WIDTH: width,
}