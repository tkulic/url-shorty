import React from 'react'
import Card from './Card'

export default function Features() {
    return (
        <section>
            <h2>Advanced Statistics</h2>
            <p>Track how your links are performing across the web with our
                    advanced statistics dashboard.</p>
            <div>
                <Card
                    cardTitle="Brand Recognition"
                    cardDescription="Boost your brand recognition with each click. Generic links don’t 
                    mean a thing. Branded links help instil confidence in your content."
                />
                <Card
                    cardTitle="Detailed Records"
                    cardDescription="Gain insights into who is clicking your links. Knowing when and where 
                    people engage with your content helps inform better decisions."
                />
                <Card
                    cardTitle="Fully Customizable"
                    cardDescription="Improve brand awareness and content discoverability through customizable 
                    links, supercharging audience engagement."
                />
            </div>
        </section>
    )
}
