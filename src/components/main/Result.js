import React from 'react'

export default function Result(props) {
    return (
        <div className="result-container">
            <p className="source-url">http://www.facebook.com</p>

            <div>
                <a className="result-url" href="#">http://rel.link455352</a>
                <button className="button-primary-wide" aria-live="polite">Copy</button>
            </div>
        </div>
    )
}
