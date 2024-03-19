import {IntroLayout} from "@/view/layout/IntroLayout";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store";
import {intro} from "@/store/modules/intro";
import {IntroContainer} from "@/component/container/IntroContainer";

export const IntroScreen = () => {
    const introState = useSelector<RootState>((state)=> (state.intro as any) )
    const dispatch = useDispatch<AppDispatch>()
    useEffect(()=>{
        // dispatch(intro.mutation.setIndex(0))
        console.log(introState)
    }, [])
  return(
      <IntroLayout>
        <IntroContainer />
      </IntroLayout>
  )
}

