import {FlatList, StyleSheet, View, ViewToken} from "react-native";
import {FeatureData} from "@/toolkit/data/FeatureData";
import {FeatureRenderContainer} from "@/component/container/FeatureRenderContainer";
import {BaseButton} from "@/component/button/BaseButton";
import Animated, {useAnimatedRef, useAnimatedScrollHandler, useSharedValue} from "react-native-reanimated";
import {FeatureDataProps} from "@/types/toolkit-type";
import {FeaturePagination} from "@/component/pagination/FeaturePagination";
import {FeatureGroupButton} from "@/component/button/FeatureGroupButton";

export const FeatureContent = () => {
    const flatListRef = useAnimatedRef<Animated.FlatList<FeatureDataProps>>()
    const x = useSharedValue(0)
    const flatListIndex = useSharedValue<number>(0)

    const onscroll = useAnimatedScrollHandler({
        onScroll: (event)=>{
            x.value =  event.contentOffset.x
        }
    }, [x])

    function onViewableItemsChanged(values: ViewToken[]){
        flatListIndex.value = values.map((token) => token.index)[0] as number
    }

  return (
      <View style={{flex: 1}}>
          <View style={style.flatListContainer}>
              <Animated.FlatList
                  ref={flatListRef}
                  pagingEnabled={true}
                  decelerationRate={'fast'}
                  horizontal={true}
                  onScroll={onscroll}
                  bounces={false}
                  scrollEventThrottle={10}
                  viewabilityConfig={{
                      viewAreaCoveragePercentThreshold: 55,
                  }}
                  onViewableItemsChanged={({viewableItems})=> onViewableItemsChanged(viewableItems)}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{
                      height: "100%",
                      borderWidth: 1
                  }}

                  data={FeatureData} renderItem={({item, index})=>{
                  return (
                      <FeatureRenderContainer flatListIndex={flatListIndex} item={item} index={index}  />
                  )
              }} />
          </View>

          <View style={style.buttonDotContainer}>
              <FeaturePagination x={x} />
              <FeatureGroupButton index={flatListIndex} reff={flatListRef} />

          </View>
      </View>
  )
}

const style = StyleSheet.create({
    buttonDotContainer: {
        height: "25%",
        justifyContent:"center",
        alignItems:"center",
        gap: 50
    },
    flatListContainer: {
        height: "75%",
    }
})