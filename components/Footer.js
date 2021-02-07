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
                            <img className="logoSocial" src="/image/logoSocial/discord.svg'" alt="logo" />
                        </a>
                        <a href="https://youtube.com/channel/UCSmY2zi7ZYdciIk5unSGlSw">
                            <img className="logoSocial" src="/image/logoSocial/youtube.svg'" alt="logo" />
                        </a>
                        <a href="https://twitch.tv/lotharie">
                            <img className="logoSocial" src="/image/logoSocial/twitch.svg'" alt="logo" />
                        </a>
                    </div>
                </div>
                <div className="nav">
                    <h4>Service</h4>
                    <ul>
                        <a href='https://discord.com/'><li>Discord</li></a>
                        <a href='https://francememes.com/why-france-memes'><li>Pourquoi nous?</li></a>
                        <a href='https://patreon.com/francememes'><li>Patreon</li></a>
                        <a href='https://discord.com/channels/724408079550251080/758695202100740126'><li>Support</li></a>
                        <a href='https://discordstatus.com'><li>Statut</li></a>
                    </ul>
                </div>
            </div>
            <hr/>
            <div className="footerBlock">
                <div className="header__logo">
                    <img className="logo" src="/image/logo.png" alt="logo" />
                    <p>FRANCE MEMES</p>
                </div>
                <a href="https://discord.com/channels/724408079550251080/781914269909385237">
                    <div className="button">Ouvrir</div>
                </a>
            </div>



        </footer>
    )
}
