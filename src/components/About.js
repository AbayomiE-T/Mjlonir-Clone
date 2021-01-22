import React from 'react'

import barley from '../Assets/Images/barley.png'
import barrel from '../Assets/Images/Barrel-512.png'
import mug from '../Assets/Images/beer-mug.png'

export default function About() {
    return (
        <section id="About">
            <div className="bg-image about"></div>

            <div className="bg-darken">
                <div className="bg-text">
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                    <div className="line line-3"></div>
                    <div className="line line-4"></div>
                    <p>A beer fit for the gods</p>
                </div>
            </div>

            <div className="about-icons">
                <article>
                    <div className="icon-container">
                        <img src={barley} alt="" />
                    </div>
                    <h3>QUALITY INGREDIENTS</h3>
                    <p>We use pure, natural ingredients to create the balanced, rich taste and subtle fruity notes of Mjlonir.</p>
                </article>
                <article>
                    <div className="icon-container">
                        <img src={barrel} alt="" />
                    </div>
                    <h3>BREWED IN ICELAND</h3>
                    <p>Made with the same time-honoured tradition and always held to the highest standard, now served in its purest taste.</p>
                </article>
                <article>
                    <div className="icon-container">
                        <img src={mug} alt="" />
                    </div>
                    <h3>THE PERFECT PINT</h3>
                    <p>Our traditional wood and iron kegs bring you clean, crisp beer from the brewery straight to your glass so you'll have a fresh pint every time.</p>
                </article>
            </div>
        </section>
    )
}
