import React from 'react'
import Header from '../header'

export default function PatreonBanner() {
    return (
        <div className="heroBanner">
            <div className="patreonBanner--bg">
                <div></div>
            </div>
            <div className="patreonBanner">
                <Header />
                <div className="patreonBanner__content">
                    <div className="patreonBanner__content__text">
                        <div className="patreonBanner__content__text__title">
                            <h2>FRANCE SUB<br></br><span>PATREON</span></h2>
                            <img src="/image/patreon/patreon.webp"
                                width="172"
                                height="172"
                            />
                        </div>
                            <p className="patreonBanner__content__text__info">Patreon est un service qui permet de faire des dons de façon mensuel en bénéficiant d’avantages exclusifs.</p>
                            <p className="patreonBanner__content__text__subInfo">Cette somme sera prélevé tous les premiers du mois, sans engagement, et vous recevrez des contreparties selon le degré d’abonnement.</p>
                            <a className="patreonBanner__content__text__button smallWhiteButton" href="https://www.patreon.com/bePatron?u=43528684">À partir de 1€ par mois</a>
                    </div>
                </div>
            </div>
        </div>
    )
}