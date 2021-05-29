import React from 'react'

export default function UrlBar(props) {
    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder="Shorten a link here..."
                    aria-label="Shorten a link here..."
                    name="url-input"
                    value={props.urlInput}
                    onChange={props.inputHandler}
                />
                <button className="button-primary">Shorten It!</button>
            </form>
            <p className="error-message"></p>

        </div>
    )
}
