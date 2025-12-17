import "../../styles/ContactIntro.css"

function ContactIntro() {
    return (
        <div className="contact-intro">
            <div className="container">
                <div className="contact-intro-inner">
                    <div className="contactCTA-text">

                        {/* (Start) Same component and styling as the contact CTA */}
                        <h1 className="section-heading">Contact Me</h1>
                        <p>
                            Feel free to reach out for collaboration, questions or opportunities.
                        </p>
                        <ul>
                            <li className="text-style">
                                <span className="bold-text">Email:</span> ayii365madut@gmail.com
                            </li>
                            <br />

                            <li className="text-style">
                                <span className="bold-text">LinkedIn: </span> 
                                <a href="https://www.linkedin.com/in/ayii-madut/" target="_blank">https://www.linkedin.com/in/ayii-madut/</a>
                            </li>
                            <br />

                            <li className="text-style">
                                <span className="bold-text">Resume: </span> 
                                <a 
                                    href="/Ayii_Madut_Resume.pdf"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                Ayii_Madut_Resume.pdf
                                </a>
                            </li>
                        </ul>
                        {/* (End) */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactIntro;