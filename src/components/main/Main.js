import React, { useState } from 'react'

import UrlBar from './UrlBar'
import Result from './Result'
import Features from './Features'

import loader from "../../images/loader.gif"

const API_URL = "https://api.shrtco.de/v2/shorten?url="

export default function Main() {
    const [urlInput, setUrlInput] = useState("")
    const [result, setResult] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState({})

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
                    setResult({})
                    return
                }
                setError({})
                setUrlInput("")
                setResult(data.result)
            })
            .catch(error => {
                console.log(error.error)
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

            <Result result={result} />
            <Features />
        </main>
    )
}
