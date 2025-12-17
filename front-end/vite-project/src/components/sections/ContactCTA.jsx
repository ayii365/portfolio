import "../../styles/ContactCTA.css";
import { Link } from "react-router-dom";

function ContactCTA() {
    return (
        <div className="contactCTA">
            <div className="container">
                <div className="contactCTA-inner">
                    <div className="section-divider"></div>

                    <div className="contactCTA-text">
                        <h1 className="section-heading">Get in Touch</h1>
                        <p>
                            If you'd like to collaborate, ask a question or get in touch, feel free to reach out.
                        </p>
                        <ul>
                            <li className="text-style"><span className="bold-text">Email:</span> ayii365madut@gmail.com</li>
                            <br />
                            <li className="text-style"><span className="bold-text">LinkedIn:</span> <a href="https://www.linkedin.com/in/ayii-madut/">https://www.linkedin.com/in/ayii-madut/</a></li>
                        </ul>
                    </div>
                    <div className="contactCTA-btns">
                        <Link to="/contact" className="btn btn-primary">Contact</Link>
                        <a 
                            href="/Ayii_Madut_Resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-ghost"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactCTA;