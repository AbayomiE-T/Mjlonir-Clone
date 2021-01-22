import React from 'react'

export default function Brewery() {
    return (
        <section id="Brewery">
            <div className="bg-image brewery"></div>
            <div className="bg-darken">
                <div className="bg-text">
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                    <div className="line line-3"></div>
                    <div className="line line-4"></div>
                    <p>THE MJLONIR EXPERIENCE</p>
                </div>
            </div>

            <div className="text">
                <p>FORGED IN ICELAND, OUR BEER ENCAPSULATES THE POWER OF THE GODS. METICULOUSLY CRAFTED WITH ONLY THE FINEST INGREDIENTS AND STORED IN TRADITIONAL BARRELS TO ENHANCE OUR FLAVOUR,
                WE HAVE PERFECTED THE WAY OF THE VIKING BEER.</p>
                <p>COME EXPERIENCE IT YOURSELF!</p>
                <button className="btn">BUY TICKETS</button>
            </div>
        </section>
    )
}
