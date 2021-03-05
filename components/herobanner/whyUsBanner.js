import React from 'react'
import Header from '../header'



export default function WhyUsBanner() {
    return (
        <div className="heroBanner">
            <div className="whyUsBanner--bg"></div>
            <div className="whyUsBanner">
               <Header />
                <div className="whyUsBanner__content">
                    <h2>C'est quoi <br></br><span>FRANCE MEMES</span></h2>
                    <div className="whyUsBanner__content__pictures">
                        <img 
                            className="whyUsBanner__content__pictures"
                            src="/image/whyUs/fundator.webp"
                            width={638}
                            height={541}
                            alt="fundators"
                        />               
                    </div>
                </div>

            </div>
        </div>
    )
}