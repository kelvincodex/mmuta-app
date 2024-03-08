export interface FeatureDataProps {
    topic: string,
    title: string,
    image: number,
}
export const FeatureData: FeatureDataProps[] =[
    {
        topic: "Efficient Learning",
        title: "Increase your learning pace with our friendly and efficient learning system.",
        image:require('@/assets/image/featureCurve-1.png')
    },
    {
        topic: "Learn in your language",
        title: "Study your subjects and topics in the language you speak and understand.",
        image:require('@/assets/image/featureCurve-2.png')
    },
    {
        topic: "Effective Live Classes",
        title: "Gain access to live classes and learn from different people from around the nation.",
        image:require('@/assets/image/featureCurve-3.png')
    },
    {
        topic: "Direct Access to Tutors",
        title: "Get all the assistance you need with expert tutors anytime you wish.",
        image:require('@/assets/image/featureCurve-4.png')
    },
    {
        topic: "Improve Your Knowledge\nOnline",
        title: "Begin your learning journey now!",
        image:require('@/assets/image/featureCurve-5.png')
    },
]