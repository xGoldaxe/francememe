import React from 'react'
import LinkBlock from './linkBlock'

export default function NavBar({color}) {
    return (
        <nav>
            <ul>
                <li><a href='https://discord.com/'><LinkBlock color={color}>Discord</LinkBlock></a></li>
                <li><a href='/why_us'><LinkBlock color={color}>Pourquoi nous ?</LinkBlock></a></li>
                <li><a href='/patreon'><LinkBlock color={color}>Patreon</LinkBlock></a></li>
                <li><a href='https://discord.com/channels/724408079550251080/758695202100740126'><LinkBlock color={color}>Support</LinkBlock></a></li>
                <li><a href='https://discord.com/channels/724408079550251080/758695202100740126'><LinkBlock color={color}>Shop</LinkBlock></a></li>
            </ul>
        </nav>
    )
}
