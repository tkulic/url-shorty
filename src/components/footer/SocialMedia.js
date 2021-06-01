import React from 'react'

export default function SocialMedia(props) {
    return (
        <div className="social-media-container">
            {props.socialMediaItems.map((item, index) => (
                <img
                    key={index}
                    src={item}
                    alt={`${item} icon`}
                    className="social-media-icon"
                />
            ))}
        </div>
    )
}
