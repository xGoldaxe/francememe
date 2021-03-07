import { gsap } from "gsap"

export default function subBoxMobileAnimation(block, onComplete, reverse = false) {
    var tl = gsap.timeline({
        onComplete: function(){
            onComplete()
        },
        onReverseComplete: function(){
            onComplete()
        }
    });
    let blocks = document.querySelectorAll(".subBoxMobile__box")
    tl.addLabel('firstLabel')
    tl.fromTo(blocks[block], {
        height: 160.5,
    },{
        height: 335,
        duration: 0.5
    }, 'firstLabel')
    //reversing
    if(reverse) {
        tl.reverse(0)
    }
}
