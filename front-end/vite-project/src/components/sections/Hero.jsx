import "../../styles/Hero.css";
import Profile_Icon from "../../assets/images/Profile_Icon.svg"

function Hero() {
    return(
        <div className="hero">
            <div className="container">
                <div className="hero-inner">
                    <div className="hero-left">
                        <div className="hero-text">
                            <h1>Hi, I'm Ayii</h1>
                            <h2>Aspiring full-stack developer</h2>
                            <p>I’m a Computer Science student majoring in Cybersecurity. 
                                I enjoy building clean, user-friendly interfaces and I’m currently 
                                expanding into full-stack development and secure software design.</p>
                        </div>

                        <div className="hero-buttons">
                            <button className="btn btn-primary">About Me</button>
                            <button className="btn btn-ghost">Contact</button>
                        </div>
                    </div>

                    <div className="hero-profile-icon">
                        <img src={Profile_Icon} className="hero-profile-icon" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;