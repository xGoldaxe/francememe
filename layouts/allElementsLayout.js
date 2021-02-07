import React from 'react'
import AnimationAppearLayout from './animationAppearLayout'

export default function AllElementsLayout({children}) {
    return (
    <>
        {React.Children.map(children, child => (
            <AnimationAppearLayout>
                {child}
            </AnimationAppearLayout>
        ))}
    </>
    )
}
