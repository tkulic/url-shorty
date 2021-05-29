import React from 'react'

export default function Card(props) {
    return (
        <div>
            <h3>{props.cardTitle}</h3>
            <p>{props.cardDescription}</p>
        </div>
    )
}
