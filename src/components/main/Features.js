import React from 'react'
import Card from './Card'

import icon1 from "../../images/icon-brand-recognition.svg"
import icon2 from "../../images/icon-detailed-records.svg"
import icon3 from "../../images/icon-fully-customizable.svg"

export default function Features() {
    return (
        <section>
            <h2 className="features-title">Advanced Statistics</h2>
            <p className="features-description">Track how your links are performing across the web with our
                    advanced statistics dashboard.</p>
            <div className="features-container">
                <Card
                    cardIcon={icon1}
                    cardTitle="Brand Recognition"
                    cardDescription="Boost your brand recognition with each click. Generic links don’t 
                    mean a thing. Branded links help instil confidence in your content."
                />
                <Card
                    cardIcon={icon2}
                    cardTitle="Detailed Records"
                    cardDescription="Gain insights into who is clicking your links. Knowing when and where 
                    people engage with your content helps inform better decisions."
                />
                <Card
                    cardIcon={icon3}
                    cardTitle="Fully Customizable"
                    cardDescription="Improve brand awareness and content discoverability through customizable 
                    links, supercharging audience engagement."
                />
            </div>
        </section>
    )
}
