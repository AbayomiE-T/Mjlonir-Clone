import React from 'react'
import rye from '../Assets/Images/rye.jpg'
import keg from '../Assets/Images/beer-keg.jpg'
import beer from '../Assets/Beer/Beer-1.png'

export default function Home() {
    return (
        <>
            <section id="Home">
                <div className="bg-image home"></div>

                <div className="banner">
                    <div>
                        <p className="bg-text">Cold as <br />Iceland</p>
                    </div>
                    <div className="beer-can-container">
                        <img src={beer} alt="" />
                    </div>
                </div>

                <div className="img-container">
                    <div className="image-container">
                        <img src={rye} alt="" />
                    </div>
                    <div className="image-container">
                        <img src={keg} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}
