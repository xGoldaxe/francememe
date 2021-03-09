import { gsap } from "gsap"


export default function inBoxAppear(box, type="pc") {
    var tl = gsap.timeline({
        onStart: function() {
            if(type === "pc") {
                box.querySelector('.subBox__firstBox').style.display = "none"
                box.querySelector('.subBox__inBox--wrapper').style.display = "flex"
            } else if(type==="mobile"){
                box.querySelector('.subBoxMobile__firstBox').style.display = "none"
                box.querySelector('.subBoxMobile__inBox--wrapper').style.zIndex = 1
            }
        },
        onReverseComplete: function() {
            if(type === "pc") {
                box.querySelector('.subBox__firstBox').style.display = "flex"
                box.querySelector('.subBox__inBox--wrapper').style.display = "none"
            } else {
                box.querySelector('.subBoxMobile__firstBox').style.display = "flex"
                box.querySelector('.subBoxMobile__inBox--wrapper').style.zIndex = -1
            }
        }
    });
    tl.addLabel('firstLabel')
    tl.fromTo(box.querySelector('.subBox__inBox__titleArrow') , {
        x: 0
    }, {
        x: 54
    }, "firstLabel")
    
    let texts = []
    texts.push(box.querySelector('.subBox__inBox__subTitle'))
    texts.push(box.querySelector('h4'))
    texts.push(box.querySelector('ul'))
    texts.push(box.querySelector('.subBox__inBox__price').firstChild)

    tl.fromTo(texts , {
        y: 50,
        opacity: 0
    }, {
        y: 0,
        opacity: 1
    }, "firstLabel")
    tl.fromTo('.subBox__inBox__sub' , {
        y: -50,
        opacity: 0
    }, {
        y: 0,
        opacity: 1
    }, "firstLabel")

    return tl
}