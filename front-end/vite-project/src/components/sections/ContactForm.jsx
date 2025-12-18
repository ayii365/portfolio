import "../../styles/ContactForm.css"

function ContactForm() {
    return (
        <div className="contact-form">
            <div className="container">
                <div className="contact-form-inner">
                    <h1 className="form-heading">Or fill in the form below</h1>
                    <form 
                        className="contact-input-form" 
                        action="https://formspree.io/f/mlgrroeq"
                        method="POST"
                    >

                        <div className="input-lvl">
                            <div className="input-section">
                                <label className="form-labels" htmlFor="firstName">First Name:</label>
                                <input id="firstName" name="firstName" className="form-input" type="text" required></input>
                            </div>

                            <div className="input-section">
                                <label className="form-labels" htmlFor="lastName">Last Name:</label>
                                <input id="lastName" name="lastName" className="form-input" type="text" required></input>
                            </div>
                        </div>

                        <div className="input-lvl">
                            <div className="input-section input-email">
                                <label className="form-labels" htmlFor="email">Email:</label>
                                <input id="email" name="email" className="form-input" type="email" required></input>
                            </div>
                        </div>

                        <div className="input-lvl">
                            <div className="input-section input-msg">
                                <label className="form-labels" htmlFor="message">Message:</label>
                                <textarea id="message" name="message" className="form-input" type="text" required></textarea>
                            </div>
                        </div>

                        <button className="btn btn-primary form-submit" type="submit">Submit</button>


                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;