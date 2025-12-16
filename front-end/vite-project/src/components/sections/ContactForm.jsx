import "../../styles/ContactForm.css"

function ContactIntro() {
    return (
        <div className="contact-form">
            <div className="container">
                <div className="contact-form-inner">
                    <h1 className="form-heading">Or fill in the form below</h1>
                    <form className="contact-input-form">

                        <div className="input-lvl">
                            <div className="input-section">
                                <label className="form-labels">First Name:</label>
                                <input className="form-input" type="text"></input>
                            </div>

                            <div className="input-section">
                                <label className="form-labels">Last Name:</label>
                                <input className="form-input" type="text"></input>
                            </div>
                        </div>

                        <div className="input-lvl">
                            <div className="input-section input-email">
                                <label className="form-labels">Email:</label>
                                <input className="form-input" type="text"></input>
                            </div>
                        </div>

                        <div className="input-lvl">
                            <div className="input-section input-msg">
                                <label className="form-labels">Message:</label>
                                <textarea className="form-input" type="text"></textarea>
                            </div>
                        </div>

                        <button className="btn btn-primary form-submit" type="submit">Submit</button>


                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactIntro;