import React, {useEffect, useState} from 'react' 
import subBoxMobileAnimation from '../lib/subBoxMobileAnimation'

export default function SubBoxMobile() {
    const COLORS = ['amethyst','lava', 'emerald', 'sky']
    return (
        <div className="subBoxMobile--wrapper">
            <div className="subBoxMobile--container">
                <div className="subBoxMobile">
                    {COLORS.map((color, i) => 
                        <SubBoxBox color={color} i={i}/>
                    )}
                </div>
            </div>
        </div>
    )
}

function SubBoxBox({i, color}) {
    const [boxActivate, setBoxActivate] = useState(false)
    const [inAnimation, setInAnimation] = useState(false)

    function activateBox (boxActivate, inAnimation) {
        if(!inAnimation){
            setInAnimation(true)
            subBoxMobileAnimation(i, ()=>{setBoxActivate(x => !x), setInAnimation(false)},boxActivate)
        }
    }

    return (
        <div className={`subBoxMobile__box ${color}`} onClick={() => activateBox(boxActivate, inAnimation)}>
            {boxActivate && !inAnimation ?
                <div className="subBox__inBox">
                    <div>
                        <p className="subBox__inBox__title">BASIC</p>
                        <p  className="subBox__inBox__subTitle">L'abonnement de base telle qu'il à été pensé</p>
                        <h4>Avantages :</h4>
                        <ul>
                            <li>- Accès à <span>tous les salons</span> du Discord !</li>   
                            <li>- <span>Certification automatique</span> (@<span>Certifié</span>) !</li> 
                            <li>- Des <span>salons exclusifs</span> pour les subs !</li> 
                            <li>- Un <span>message de remerciement</span> de la part du fondateur sur Patreon !</li> 
                        </ul>
                    </div>
                    <div className="subBox__inBox__price">
                        <p className="subBox__inBox__price__text">1€ symbolique par mois.</p>
                        <p className="subBox__inBox__price__value">1€</p>
                    </div>
                </div>
            :
                <>
                    <p className="subBox__box__title">BASIC</p>
                    <p className="subBox__box__price">1€</p>
                </>
            }
        </div>   
    )
}