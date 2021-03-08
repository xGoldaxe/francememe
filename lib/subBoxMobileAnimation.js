import { gsap } from "gsap"

export default function subBoxMobileAnimation(block, onComplete, reverse = false) {
    let blocks = document.querySelectorAll(".subBoxMobile__box")
    var tl = gsap.timeline({
        onComplete: function(){
            onComplete()
            blocks[block].style.height = 'auto'
            blocks[block].style.minHeight = '430px'
            blocks[block].firstChild.style.zIndex = '1'
        },
        onReverseComplete: function(){
            onComplete()

        }
    });
    let newHeight = blocks[block].firstChild.firstChild.offsetHeight
    if (newHeight < 430) { newHeight = 430 }
    console.log(newHeight)
    tl.addLabel('firstLabel')
    tl.fromTo(blocks[block], {
        height: 160.5,
    },{
        height: newHeight,
        duration: 0.5
    }, 'firstLabel')
    //reversing
    if(reverse) {
        tl.reverse(0)
        blocks[block].style.minHeight = ''
        blocks[block].firstChild.style.zIndex = '-1'
    }
}
