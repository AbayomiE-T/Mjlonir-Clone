import React from 'react'

const Contact = () => {
    return (
        <section id="Contact">
            <div className="bg-image contact"></div>
            <div className="bg-darken" style={{ height: '100%' }}>
                <form className="contact-form">
                    <div className="form-item">
                        <h1>LET'S TALK!</h1>
                        <p>FILL OUT THE REQUIRED FIELDS AND ONE OF OUR REPRESENTATIVES WILL SEND YOU MORE INFORMATION</p>
                        <div className="form-rule"></div>
                    </div>
                    <div className="form-item">
                        <label htmlFor="">NAME*</label>
                        <input type="text" />
                    </div>
                    <div className="form-item">
                        <label htmlFor="">EMAIL*</label>
                        <input type="text" />
                    </div>
                    <div className="form-item">
                        <label htmlFor="">MESSAGE*</label>
                        <textarea name="message" id="message" placeholder="Message">
                        </textarea>
                    </div>
                    <div className="form-item">
                        <button className="contact-btn">SUBMIT</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
