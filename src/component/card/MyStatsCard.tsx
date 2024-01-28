import {Text, View} from "react-native";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";

interface MyStatsCardProps {
    
}
export const MyStatsCard = () => {
  return(
      <View style={{marginVertical: 10, height: 96, borderRadius: 10, backgroundColor: ThemeConstantUtil.COLOR.white, overflow: 'hidden', flexDirection: 'row'}}>
        <View style={{ width: 65, height: '100%', backgroundColor: ThemeConstantUtil.COLOR.primary["75"]}} />
          <View style={{flex: 1, paddingLeft: 10, }}>
            <Text>Completed lessons</Text>
          </View>
      </View>
  )
}