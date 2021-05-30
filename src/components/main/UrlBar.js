import React from 'react'

export default function UrlBar(props) {
    return (
        <form>
            <input
                type="text"
                placeholder="Shorten a link here..."
                aria-label="Shorten a link here..."
                name="url-input"
                className="input-url"
                value={props.urlInput}
                onChange={props.inputHandler}
            />
            <p className="error-message">Please enter something</p>
            <button className="button-primary-wide">Shorten It!</button>
        </form>
    )
}
