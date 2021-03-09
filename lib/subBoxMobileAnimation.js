import { gsap } from "gsap"
import inBoxAppear from "./inBoxAppear";

export default function subBoxMobileAnimation(block, onComplete, reverse = false) {
    let blocks = document.querySelectorAll(".subBoxMobile__box")
    var tl = gsap.timeline({
        onComplete: function(){
            onComplete()
            blocks[block].style.height = 'auto'
            blocks[block].style.minHeight = '430px'
        },
        onReverseComplete: function(){
            onComplete()

        }
    });
    let newHeight = blocks[block].querySelector(".subBoxMobile__inBox").offsetHeight
    if (newHeight < 430) { newHeight = 430 }
    tl.addLabel('firstLabel')
    tl.fromTo(blocks[block], {
        height: 160.5,
    },{
        height: newHeight,
        duration: 0.5
    }, 'firstLabel')
    //reversing
    tl.add(inBoxAppear(blocks[block], "mobile"))

    if(reverse) {
        tl.reverse(0)
        blocks[block].style.minHeight = ''
    }
}
