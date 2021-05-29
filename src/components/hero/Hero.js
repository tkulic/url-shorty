import React from 'react'
import heroImg from "../../images/illustration-working.svg"

export default function Hero() {
    return (
        <section>
            <div>
                <h1>More than just shorter links</h1>
                <p className="description">Build your brand’s recognition and get detailed insights
  on how your links are performing.</p>
                <button className="button-primary">Get started</button>
            </div>

            <img src={heroImg} alt="illustration of a woman working on computer" />
        </section>
    )
}
