import React from 'react'

export default function Card(props) {
    return (
        <div className="card">
            <span>
                <img src={props.cardIcon} alt="" />
            </span>
            <h3>{props.cardTitle}</h3>
            <p>{props.cardDescription}</p>
        </div>
    )
}
