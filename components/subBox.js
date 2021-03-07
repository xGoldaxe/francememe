import React, {useEffect, useState} from 'react' 
import subBoxAnimation from '../lib/subBoxAnimation'

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
                <div className="subBox__box amethyst" onClick={() => activateBox(0, boxActivate, inAnimation)}>
                    {boxActivate && !inAnimation && actualBox === 0 ?
                        <div className="subBox__inBox">
                            <p className="subBox__inBox__title">BASIC</p>
                            <p  className="subBox__inBox__subTitle">L'abonnement de base telle qu'il à été pensé</p>
                            <h4>Avantages :</h4>
                            <ul>
                                <li>- Accès à <span>tous les salons</span> du Discord !</li>   
                                <li>- <span>Certification automatique</span> (@<span>Certifié</span>) !</li> 
                                <li>- Des <span>salons exclusifs</span> pour les subs !</li> 
                                <li>- Un <span>message de remerciement</span> de la part du fondateur sur Patreon !</li> 
                            </ul>
                            <div className="subBox__inBox__price">
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
                    {boxActivate && !inAnimation  && actualBox === 1 ?
                        <div className="subBox__inBox">
                            <p className="subBox__inBox__title">BASIC</p>
                            <p  className="subBox__inBox__subTitle">L'abonnement de base telle qu'il à été pensé</p>
                            <h4>Avantages :</h4>
                            <ul>
                                <li>- Accès à <span>tous les salons</span> du Discord !</li>   
                                <li>- <span>Certification automatique</span> (@<span>Certifié</span>) !</li> 
                                <li>- Des <span>salons exclusifs</span> pour les subs !</li> 
                                <li>- Un <span>message de remerciement</span> de la part du fondateur sur Patreon !</li> 
                            </ul>
                            <div className="subBox__inBox__price">
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

                <div className="subBox__box emerald" onClick={() => activateBox(2, boxActivate, inAnimation)}>
                    {boxActivate && actualBox === 2 ?
                        <div className="subBox__inBox">
                            <p className="subBox__inBox__title">BASIC</p>
                            <p  className="subBox__inBox__subTitle">L'abonnement de base telle qu'il à été pensé</p>
                            <h4>Avantages :</h4>
                            <ul>
                                <li>- Accès à <span>tous les salons</span> du Discord !</li>   
                                <li>- <span>Certification automatique</span> (@<span>Certifié</span>) !</li> 
                                <li>- Des <span>salons exclusifs</span> pour les subs !</li> 
                                <li>- Un <span>message de remerciement</span> de la part du fondateur sur Patreon !</li> 
                            </ul>
                            <div className="subBox__inBox__price">
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

                <div className="subBox__box sky" onClick={() => activateBox(3, boxActivate, inAnimation)}>
                {boxActivate && actualBox === 3 ?
                    <div className="subBox__inBox">
                        <p className="subBox__inBox__title">BASIC</p>
                        <p  className="subBox__inBox__subTitle">L'abonnement de base telle qu'il à été pensé</p>
                        <h4>Avantages :</h4>
                        <ul>
                            <li>- Accès à <span>tous les salons</span> du Discord !</li>   
                            <li>- <span>Certification automatique</span> (@<span>Certifié</span>) !</li> 
                            <li>- Des <span>salons exclusifs</span> pour les subs !</li> 
                            <li>- Un <span>message de remerciement</span> de la part du fondateur sur Patreon !</li> 
                        </ul>
                        <div className="subBox__inBox__price">
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
            </div>
        </div>
    )
}
