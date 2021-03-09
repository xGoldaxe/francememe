import React, {useEffect, useState} from 'react' 
import subBoxAnimation from '../../lib/subBoxAnimation'
import ressourceBox from '../../public/ressources/abonnements.json'
import InBox from './inBox'

export default function SubBox() {
    const [boxActivate, setBoxActivate] = useState(false)
    const [actualBox, setActualBox] = useState(false)
    const [inAnimation, setInAnimation] = useState(false)

    function activateBox (boxState, boxActivate, inAnimation) {
        if(!inAnimation){
            setInAnimation(true)
            setActualBox(boxState)
            subBoxAnimation(boxState, ()=>{setBoxActivate(x => !x), setInAnimation(false)},boxActivate)
        }
    }
    return (
        <div className="subBox--container">
            <div className="subBox">
                {ressourceBox.abonnements.map((box, i) => 
                    <SubBoxBox key={i} activateBox={activateBox} boxActivate={boxActivate} inAnimation={inAnimation} i={i} json={box}/>
                )}
            </div>
        </div>
    )
}

function SubBoxBox({activateBox, boxActivate, inAnimation, i, json}) {
    return (
        <div className={`subBox__box ${json.color}`} onClick={() => activateBox(i, boxActivate, inAnimation)}>
                <div className="subBox__inBox--wrapper">
                    <InBox json={json}/>
                </div>
                <div className="subBox__firstBox">
                    <p className="subBox__box__title">{json.title}</p>
                    <p className="subBox__box__price">{json.price + "€"}</p>
                </div>
        </div>
    )
}

