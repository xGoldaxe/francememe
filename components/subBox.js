import React, {useEffect, useState} from 'react' 
import subBoxAnimation from '../lib/subBoxAnimatio'

export default function SubBox() {
    const [boxActivate, setBoxActivate] = useState(false)
    const [inAnimation, setInAnimation] = useState(false)
    function activateBox (boxState, boxActivate, inAnimation) {
        if(!inAnimation){
            setInAnimation(true)
            subBoxAnimation(boxState, ()=>{setBoxActivate(x => !x), setInAnimation(false)},boxActivate)
        }
    }
    
    return (
        <div className="subBox--container">
            <div className="subBox">
                <div className="subBox__box amethyst" onClick={() => activateBox(0, boxActivate, inAnimation)}>
                    {boxActivate ?
                        <div className="subBox__inBox">
                            <h3>BASIC</h3>
                            <p>L'abonnement de base telle qu'il à été pensé</p>
                            <h4>Avantages :</h4>
                            <ul>
                                <li>- Accès à tous les salons du Discord !</li>   
                                <li>- Certification automatique (@Certifié) !</li> 
                                <li>- Des salons exclusifs pour les subs !</li> 
                                <li>- Un message de remerciement de la part du fondateur sur Patreon !</li> 
                            </ul>
                            <div class="subbBox__inBox__price">
                                <p>1€ symbolique par mois.</p>
                                <p>1€</p>
                            </div>
                        </div>
                    :
                        <>
                            <p className="subBox__box__title">BASIC</p>
                            <p className="subBox__box__price">1€</p>
                        </>
                    }

                </div>

                <div className="subBox__box lava" onClick={() => activateBox(1, boxActivate, inAnimation)}>
                    <p className="subBox__box__title">SUPER</p>
                    <p className="subBox__box__price">5€</p>
                </div>

                <div className="subBox__box emerald" onClick={() => activateBox(2, boxActivate, inAnimation)}>
                    <p className="subBox__box__title">PREMIUM</p>
                    <p className="subBox__box__price">10€</p>
                </div>

                <div className="subBox__box sky" onClick={() => activateBox(3, boxActivate, inAnimation)}>
                    <p className="subBox__box__title">ULTIMATE</p>
                    <p className="subBox__box__price">30€</p>
                </div>
            </div>
        </div>
    )
}
