import {Image, StyleSheet, Text, View} from "react-native";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import StackBook  from "@/assets/icon/stack-book.svg"
import Cancel  from "@/assets/icon/base-cancel.svg"
export const EarlierContainer = () => {

  return(
      <View>
          <View style={styles.content}>
              <Text style={{color: ThemeConstantUtil.COLOR.neutral["75"], fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratMedium, fontSize: 16}}>Earlier</Text>
          </View>

          <View style={styles.constant}>
              <StackBook />
              <View>
                  <Text style={styles.date}>Jul 23</Text>
                  <Text style={styles.text}>Review your downloaded lessons</Text>
                  <Text style={styles.action}>Review now</Text>
              </View>
              <Cancel style={{transform: [{translateY: -15}]}} />
          </View>
      </View>
  )
}

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 70
    },
    constant:{
        height: 123,
        borderRadius: 10,
        justifyContent: 'space-around',
        alignItems:'flex-start',
        flexDirection: 'row',
        gap: 30,
        backgroundColor: ThemeConstantUtil.COLOR.white,
        elevation: .3,
        padding: 20,
        paddingTop: 30
    },
    date:{
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratRegular,
        fontSize: 11,
        lineHeight: 13,
        color: ThemeConstantUtil.COLOR.neutral["75"]

    },
    text: {
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratMedium,
        fontSize: 13,
        lineHeight: 15,
        color: ThemeConstantUtil.COLOR.neutral["75"]
    },
    action:{
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratMedium,
        fontSize: 12,
        lineHeight: 14,
        color: ThemeConstantUtil.COLOR.primary["100"],
        marginTop: 12
    }
})