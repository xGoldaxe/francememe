import React from 'react'


export default function Footer() {
    return (
        <footer>
            <div className="footerBlock">

                <div>
                    <h3>LE lieu pour vos memes</h3>
                    <div className="footerBlock__Logos">
                        <a href="https://twitter.com/francememes_">
                            <img className="logoSocial" src="/image/logoSocial/twitter.svg" alt="logo" />
                        </a>
                        <a href="https://instagram.com/francememes_">
                            <img className="logoSocial" src="/image/logoSocial/insta.svg" alt="logo" />
                        </a>
                        <a href="https://discord.gg/4NPF4g2">
                            <img className="logoSocial" src="/image/logoSocial/discord.svg" alt="logo" />
                        </a>
                        <a href="https://youtube.com/channel/UCSmY2zi7ZYdciIk5unSGlSw">
                            <img className="logoSocial" src="/image/logoSocial/youtube.svg" alt="logo" />
                        </a>
                        <a href="https://twitch.tv/lotharie">
                            <img className="logoSocial" src="/image/logoSocial/twitch.svg" alt="logo" />
                        </a>
                    </div>
                </div>
                <div className="nav">
                    <h4>Service</h4>
                    <ul>
                        <li><a href='https://discord.com/'>Discord</a></li>
                        <li><a href='https://francememes.com/why-france-memes'>Pourquoi nous?</a></li>
                        <li><a href='https://patreon.com/francememes'>Patreon</a></li>
                        <li><a href='https://discord.com/channels/724408079550251080/758695202100740126'>Support</a></li>
                        <li><a href='https://discordstatus.com'>Statut</a></li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div className="footerBlock">
                <div className="header__logo">
                    <img className="logo" src="/image/logo.webp" alt="logo"/>
                    <p>FRANCE MEMES</p>
                </div>
                <a href="https://discord.com/channels/724408079550251080/781914269909385237">
                    <div className="button">Ouvrir</div>
                </a>
            </div>



        </footer>
    )
}
