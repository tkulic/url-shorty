import React, { useState, useEffect } from 'react'

import UrlBar from './UrlBar'
import Result from './Result'
import Features from './Features'

import loader from "../../images/loader.gif"

const API_URL = "https://api.shrtco.de/v2/shorten?url="

export default function Main() {
    const [urlInput, setUrlInput] = useState("")
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState({})

    // check session storage on page load
    useEffect(() => {
        if (!results.length) {
            const clientStorage = JSON.parse(sessionStorage.getItem("resultsArray"))
            if (clientStorage === null) {
                setResults([])
            } else {
                setResults(clientStorage)
            }
        }
    }, [])

    function inputHandler(e) {
        setUrlInput(e.target.value)
        if (e.target.value) {
            setError({})
        }
    }

    function clickHandler(e) {
        e.preventDefault()
        setIsLoading(true)
        fetch(API_URL + urlInput)
            .then(res => res.json())
            .then(data => {
                setIsLoading(false)
                if (!data.ok) {
                    setError(data)
                    setUrlInput("")
                    return
                }
                setError({})
                setUrlInput("")
                // update state and session storage
                setResults([data.result, ...results])
                sessionStorage.setItem("resultsArray", JSON.stringify([data.result, ...results]))
            })
            .catch(error => {
                setError({ error: error.message, ok: false })
                setUrlInput("")
                setIsLoading(false)
                console.log(error)
            })
    }

    return (
        <main>
            <UrlBar
                urlInput={urlInput}
                inputHandler={inputHandler}
                error={error}
                clickHandler={clickHandler}
            />
            {isLoading ? <img src={loader} alt="Loading..." aria-live="polite" className="loader" /> : null}
            {results.length ? results.map(result => <Result key={result.code} result={result} />) : null}
            <Features />
        </main>
    )
}
