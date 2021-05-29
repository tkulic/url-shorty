import React from 'react'

export default function SocialMedia(props) {
    return (
        <div>
            {props.socialMediaItems.map(item => {
                <img src={item} alt={`${item} icon`} />
            })}
        </div>
    )
}
