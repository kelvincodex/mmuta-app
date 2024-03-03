import React, {ReactElement} from "react";
import {IntroNameFormik} from "@/component/formik/auth/intro/IntroNameFormik";
import {IntroLiveFormik} from "@/component/formik/auth/intro/IntroLiveFormik";
import {BirthdayFormik} from "@/component/formik/auth/intro/BirthdayFormik";
import {DateDropdown} from "@/component/dropdown/DateDropdown";

export interface IntroDataProps {
    id: number,
    question: string,
    subQuestion?: string|null,
    component: React.ComponentType
}
export const IntroData: IntroDataProps[] =[
    {
        id: 1,
        question: 'First, what is your name?',
        subQuestion: null,
        component: IntroNameFormik
    },
    {
        id: 2,
        question: 'Where do you live?',
        subQuestion: null,
        component: IntroLiveFormik
    },
    {
        id: 3,
        question: 'When is your birthday?',
        subQuestion: null,
        component: BirthdayFormik
    },
    {
        id: 4,
        question: 'Answer this little question',
        subQuestion: "Select the alphabets contained in the word ‘CHAIR’",
        component: IntroNameFormik
    },
    {
        id: 5,
        question: 'Solve this little quiz',
        subQuestion: "What will you get if you add 2 to 8?",
        component: IntroNameFormik
    },
    {
        id: 6,
        question: 'What class are you in?',
        subQuestion: null,
        component: IntroNameFormik
    },
]