import React, { useState } from 'react'

import UrlBar from './UrlBar'
import Result from './Result'
import Features from './Features'

// const API_URL = "https://api.shrtco.de/v2/"

export default function Main() {
    // const [urlInput, setUrlInput] = useState("")
    // const [results, setResults] = useState({})


    //      RESPONSE
    // {
    //     "ok": true,
    //     "result": {
    //         "code": "KCveN",
    //         "short_link": "shrtco.de/KCveN",
    //         "full_short_link": "https://shrtco.de/KCveN",
    //         "short_link2": "9qr.de/KCveN",
    //         "full_short_link2": "https://9qr.de/KCveN",
    //         "share_link": "shrtco.de/share/KCveN",
    //         "full_share_link": "https://shrtco.de/share/KCveN",
    //         "original_link": "http://example.org/very/long/link.html"
    //     }
    //   }

    // function inputHandler(e) {
    //     setUrlInput(e.target.value)
    // }
    return (
        <main>
            <UrlBar />
            <ul>
                <Result />
            </ul>
            <Features />
        </main>
    )
}
