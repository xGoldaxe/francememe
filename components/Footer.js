import React from 'react'


export default function Footer() {
    return (
        <footer>
            <div className="footerBlock footerBlock--nav">

                <div>
                    <h3>LE lieu pour vos memes</h3>
                    <div className="footerBlock__Logos">
                        <a target="_blank" href="https://twitter.com/francememes_">
                            <img className="logoSocial" src="/image/logoSocial/twitter.svg" alt="logo" />
                        </a>
                        <a target="_blank" href="https://instagram.com/francememes_">
                            <img className="logoSocial" src="/image/logoSocial/insta.svg" alt="logo" />
                        </a>
                        <a target="_blank" href="https://discord.gg/4NPF4g2">
                            <img className="logoSocial" src="/image/logoSocial/discord.svg" alt="logo" />
                        </a>
                        <a target="_blank" href="https://youtube.com/channel/UCSmY2zi7ZYdciIk5unSGlSw">
                            <img className="logoSocial" src="/image/logoSocial/youtube.svg" alt="logo" />
                        </a>
                        <a target="_blank" href="https://twitch.tv/lotharie">
                            <img className="logoSocial" src="/image/logoSocial/twitch.svg" alt="logo" />
                        </a>
                    </div>
                </div>
                <div className="nav">
                    <h4>Service</h4>
                    <ul>
                        <li><a href='/why_us'>Pourquoi nous?</a></li>
                        <li><a href='/patreon'>Abonnements</a></li>
                        <li><a target="_blank" href='https://discord.com/'>Télécharger Discord</a></li>
                        <li><a target="_blank" href='https://www.redbubble.com/people/FRANCEMEMES/explore?page=1&sortOrder=recent'>Boutique Redbubble</a></li>
                        <li><a target="_blank" href='https://discord.com/channels/724408079550251080/758695202100740126'>Support</a></li>
                        <li><a target="_blank" href='mailto:contact@francememes.com'>Contact</a></li>
                        <li><a target="_blank" href='https://discordstatus.com/'>Statut</a></li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div className="footerBlock">
                <a href="/" ddress className="header__logo">
                    <img className="logo" src="/image/logo.webp" alt="logo"/>
                    <p>FRANCE MEMES</p>
                </a>
                <a target="_blank" href="https://discord.com/channels/724408079550251080/781914269909385237">
                    <div className="button">Ouvrir</div>
                </a>
            </div>



        </footer>
    )
}
