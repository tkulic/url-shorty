import React from 'react'
import FooterNav from './FooterNav'
import SocialMedia from './SocialMedia'

import facebook from "../../images/icon-facebook.svg"
import twitter from "../../images/icon-twitter.svg"
import pinterest from "../../images/icon-pinterest.svg"
import instagram from "../../images/icon-instagram.svg"
import Logo from '../../images/Logo'

export default function Footer() {
    return (
        <footer>
            <Logo />
            <FooterNav
                footerNavTitle="Features"
                footerNavLinks={["Link Shortening", "Branded Links", "Analytics"]}
            />
            <FooterNav
                footerNavTitle="Resources"
                footerNavLinks={["Blog", "Development", "Support"]}
            />
            <FooterNav
                footerNavTitle="Company"
                footerNavLinks={["About", "Our Team", "Careers", "Contact"]}
            />
            <SocialMedia socialMediaItems={[facebook, twitter, pinterest, instagram]} />
            <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
                <p>Coded by <a href="https://github.com/tkulic">Toni Kulic</a>.</p>
            </div>
        </footer>
    )
}
