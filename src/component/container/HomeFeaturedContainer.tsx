import {View, Text, FlatList, Image, StyleSheet, ScrollView} from "react-native";
import React from "react";
import {HomeFeaturedData} from "@/app/toolkit/data/HomeFeaturedData";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import {indexStyle} from "@/assets/style/Index";
import Animated, {FadeIn} from "react-native-reanimated";

export const HomeFeaturedContainer = () => {
  return(
      <View
          style={{marginTop: 10}}>
          <Text style={indexStyle.homeTitle}>Featured</Text>
          <ScrollView
            horizontal={true}
            contentContainerStyle={{gap: 10}}
            // style={{marginHorizontal: -20}}
            bounces={false}
            showsHorizontalScrollIndicator={false}
          >
              {
                  HomeFeaturedData.map((item, index)=>{
                      return (
                          <Animated.View entering={FadeIn.duration(500).randomDelay()} key={index} style={{justifyContent: 'center'}}>
                              <Image source={item.image} resizeMode={'cover'} style={styles.round}  />
                              <Text style={styles.text}>{item.title}</Text>
                          </Animated.View>
                      )
                  })
              }
          </ScrollView>


      </View>
  )
}

const styles = StyleSheet.create({
    round:{
        width: 62,
        height: 62,
        borderRadius: 100,
        overflow: 'hidden'
    },
    text:{
        textAlign:"center",
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratRegular,
        fontSize: 10,
        lineHeight: 12,
        color: ThemeConstantUtil.COLOR.neutral["75"]
    }
})