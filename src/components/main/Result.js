import React, { useState } from 'react'

export default function Result(props) {
    const [isCopied, setIsCopied] = useState(false)

    // helper function
    function trimLink(link) {
        if (link.length > 40) {
            return link.substring(0, 40) + "..."
        } else {
            return link
        }
    }

    function copyToClipboard(e) {
        e.preventDefault()
        navigator.clipboard.writeText(props.result.full_short_link)
            .then(() => setIsCopied(true))
            .catch(() => console.log("Unable to copy."))
    }

    return (
        props.result.code
            ? <div className="result-container">
                <p className="source-url">{trimLink(props.result.original_link)}</p>

                <div className="col-right">
                    <a
                        className="result-url"
                        href={props.result.full_short_link}
                        target="_blank"
                        rel="noreferrer"
                    >{props.result.full_short_link}
                    </a>
                    <button
                        className="button-primary-wide"
                        style={isCopied ? { backgroundColor: "#3b3054" } : null}
                        aria-live="polite"
                        onClick={copyToClipboard}
                    >{!isCopied ? "Copy" : "Copied!"}
                    </button>
                </div>
            </div>
            : null

    )
}
