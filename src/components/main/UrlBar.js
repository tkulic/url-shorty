import React from 'react'

export default function UrlBar(props) {
    const inputErrorStyles = {
        outline: "4px solid #ad5252",
        color: " #ad5252"
    }

    return (
        <form>
            <input
                type="text"
                placeholder="Shorten a link here..."
                aria-label="Shorten a link here..."
                name="url-input"
                className="input-url"
                style={props.error.ok === false ? inputErrorStyles : null}
                value={props.urlInput}
                onChange={props.inputHandler}
            />
            <p
                className="error-message"
            >{props.error.error}
            </p>
            <button
                className="button-primary-wide"
                onClick={props.clickHandler}
            >Shorten It!
            </button>
        </form>
    )
}
