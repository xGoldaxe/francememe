import React from 'react'
import LinkBlock from './linkBlock'

export default function NavBar({color}) {
    return (
        <nav>
            <ul>
                <li><a href='/why_us'><LinkBlock color={color}>Pourquoi nous ?</LinkBlock></a></li>
                <li><a href='/patreon'><LinkBlock color={color}>Abonnements</LinkBlock></a></li>
                <li><a href='https://www.redbubble.com/people/FRANCEMEMES/explore'><LinkBlock color={color}>Boutique Redbubble</LinkBlock></a></li>
                <li><a href='mailto:contact@francememes.com'><LinkBlock color={color}>Contact</LinkBlock></a></li>
            </ul>
        </nav>
    )
}
