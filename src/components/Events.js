import React from 'react'
import karat from '../Assets/Images/Karat-event.png'
import hzevent from '../Assets/Images/hz-beer.jpg'
import retro from '../Assets/Images/retro-beer-festival.jpg'
import guild from '../Assets/Images/brewers-guild.jpg'

export default function Events() {
    return (
        <section id="Events">
            <div className="bg-image events"></div>
            <div className="bg-darken event-bg">
                <div className="bg-text">
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                    <div className="line line-3"></div>
                    <div className="line line-4"></div>
                    <p>YOUR NEXT EXPERIENCE</p>
                </div>
            </div>

            <div className="event-links">
                <span className="">EVENT</span>
                <span className="">LOCATION</span>
                <span className="">DATE</span>
                <span className="">SEARCH</span>
            </div>

            <div className="upcoming-events">
                <div className="event">
                    <img src={karat} alt="" />
                </div>
                <div className="event">
                    <img src={hzevent} alt="" />
                </div>
                <div className="event">
                    <img src={retro} alt="" />
                </div>
                <div className="event">
                    <img src={guild} alt="" />
                </div>
            </div>
        </section>
    )
}
