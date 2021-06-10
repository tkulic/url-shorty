import React from 'react'
import "../scss/styles.scss"

import Header from './header/Header'
import Hero from './hero/Hero'
import Main from './main/Main'
import CtaSection from './cta-section/CtaSection'
import Footer from './footer/Footer'

export default function App() {
    return (
        <>
            <Header />
            <Hero />
            <Main />
            <CtaSection />
            <Footer />
        </>
    )
}
