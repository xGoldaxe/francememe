import React, {useEffect, useState} from 'react' 
import subBoxMobileAnimation from '../../lib/subBoxMobileAnimation'
import InBox from './inBox'
import ressourceBox from '../../public/ressources/abonnements.json'


export default function SubBoxMobile() {
    return (
        <div className="subBoxMobile--wrapper">
            <div className="subBoxMobile--container">
                <div className="subBoxMobile">
                    {ressourceBox.abonnements.map((box, i) => 
                        <SubBoxBox key={i} i={i} json={box}/>
                    )}
                </div>
            </div>
        </div>
    )
}

function SubBoxBox({i, json}) {
    const [boxActivate, setBoxActivate] = useState(false)
    const [inAnimation, setInAnimation] = useState(false)

    function activateBox (boxActivate, inAnimation) {
        if(!inAnimation){
            setInAnimation(true)
            subBoxMobileAnimation(i, ()=>{setBoxActivate(x => !x), setInAnimation(false)},boxActivate)
        }
    }

    return (
        <div className={`subBoxMobile__box ${json.color}`} onClick={() => activateBox(boxActivate, inAnimation)}>
            <div className="subBoxMobile__inBox--wrapper">
                <div className="subBoxMobile__inBox">
                    <InBox json={json} />
                </div>
            </div>

            <div className="subBoxMobile__firstBox">
                <p className="subBoxMobile__firstBox__title">{json.title}</p>
                <p className="subBoxMobile__firstBox__price">{json.price + "€"}</p>
            </div>
        </div>   
    )
}