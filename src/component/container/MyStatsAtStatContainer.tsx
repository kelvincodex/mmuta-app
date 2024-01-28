import {Image, StyleSheet, Text, View} from "react-native";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";

export const MyStatsAtStatContainer = () => {
  return(
      <View style={{height: 178, borderRadius: 10, backgroundColor: ThemeConstantUtil.COLOR.white, marginBottom: 20,flexDirection: 'row', justifyContent: 'space-between', alignItems:'center'}}>
        <View style={{ width: '50%', paddingLeft: 20}}>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.class}>JS 2</Text>
            <View style={{flexDirection: 'row', gap: 5, alignItems:'center', marginVertical: 2, }}>
                <View style={{width: 14, height: 14, borderRadius: 10, backgroundColor: ThemeConstantUtil.COLOR.primary["50"]}} />
                <Text style={styles.dot}>Completed lessons (43%)</Text>
            </View>
            <View style={{flexDirection: 'row', gap: 5, alignItems:'center', marginVertical: 2}}>
                <View style={{width: 14, height: 14, borderRadius: 10, backgroundColor: ThemeConstantUtil.COLOR.accent["50"]}} />
                <Text style={styles.dot}>Live classes attended (32%)</Text>
            </View>
            <View style={{flexDirection: 'row', gap: 5, alignItems:'center', marginVertical: 2}}>
                <View style={{width: 14, height: 14, borderRadius: 10, backgroundColor: ThemeConstantUtil.COLOR.secondary["50"]}} />
                <Text style={styles.dot}>Exams passed (28%)</Text>
            </View>

            <View style={{flexDirection: 'row', gap: 5, alignItems:'center', marginVertical: 2}}>
                <View style={{width: 14, height: 14, borderRadius: 10, backgroundColor: 'hsla(137, 54%, 68%, 1)'}} />
                <Text style={styles.dot}>Total time spent learning (17%)</Text>
            </View>

        </View>
        <Image source={require('@/assets/image/Pie-chart.png')} style={{width:170}} resizeMode={'cover'} />
      </View>
  )
}

const styles = StyleSheet.create({
    name:{
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratMedium,
        color: ThemeConstantUtil.COLOR.neutral["75"],
        fontSize: 16,
        lineHeight: 19,
    },
    class:{
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratMedium,
        color: ThemeConstantUtil.COLOR.neutral["50"],
        fontSize: 13,
        lineHeight: 15,
        marginBottom: 15
    },
    dot:{
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratRegular,
        color: ThemeConstantUtil.COLOR.neutral["75"],
        fontSize: 8,
        lineHeight: 9,
    }
})