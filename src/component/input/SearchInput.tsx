import {StyleProp, StyleSheet, Text, TextInput, TextInputProps, View, ViewStyle} from "react-native";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import Search from "@/assets/icon/base-search.svg"
import Animated, {FadeIn} from "react-native-reanimated";

interface SearchInputProps {
    containerStyle?: StyleProp<ViewStyle>,
}
export const SearchInput = ({containerStyle, ...props}: SearchInputProps & TextInputProps) => {
  return(
      <Animated.View
          entering={FadeIn.duration(1000).randomDelay()}
          style={[styles.container, containerStyle]}>
          <Search  />
          <TextInput cursorColor={ThemeConstantUtil.COLOR.neutral["25"]} placeholderTextColor={ThemeConstantUtil.COLOR.neutral["25"]} style={styles.input}  {...props} />
          <Text style={styles.goText}>Go</Text>
      </Animated.View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        height: 50,
        borderRadius: 50,
        borderColor: ThemeConstantUtil.COLOR.neutral["25"],
        backgroundColor: ThemeConstantUtil.COLOR.white,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingHorizontal: 20,
    },
    input:{
        borderRightWidth: 1,
        borderRightColor: ThemeConstantUtil.COLOR.neutral["25"],
        flex: 1,
        zIndex: 999,
        marginLeft: 10,
        marginRight: 10,
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratAltRegular,
        fontSize:15,
        lineHeight: 18,
        color: ThemeConstantUtil.COLOR.neutral["75"]

    },
    goText:{
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratAltRegular,
        fontSize:15,
        lineHeight: 18,
        color: ThemeConstantUtil.COLOR.neutral["50"]
    },

})