import "../../styles/AboutContent.css"

function AboutContent() {
    return (
        <div className="about-content">
            <div className="container">
                <div className="about-content-inner">
                    
                    <h1 className="about-h1">About Me</h1>
                    <p className="about-p">
                        Hi, I’m Ayii. I am an undergraduate Computer Science student majoring in 
                        Cybersecurity at the University of Adelaide. I enjoy building clean, 
                        user-friendly front-end interfaces and I am currently expanding into 
                        full-stack development and secure software design.
                    </p>

                    <h1 className="about-h1">What Motivates Me?</h1>
                    <p className="about-p">
                        I’m motivated by creating digital experiences that feel intuitive and helpful. 
                        I enjoy learning new technologies, solving technical challenges and improving 
                        my skills through hands-on, project-based work.
                    </p>

                    <h1 className="about-h1">What am I looking for?</h1>
                    <p className="about-p">
                        I am currently focusing on front-end and full-stack development, 
                        and I am also building skills in secure coding practices as part 
                        of my cybersecurity studies.
                    </p>

                    <h1 className="about-h1">Skills Snapshot</h1>
                    <ul >
                        <li className="about-p">Front-end (React, HTML, CSS, JS)</li>
                        <li className="about-p">Back-end (Node/Express)</li>
                        <li className="about-p">Languages (C++, Python)</li>
                        <li className="about-p">Tools (Figma)</li>
                    </ul>

                    <h1 className="about-h1">My Learning Approach</h1>
                    <p className="about-p">
                        I learn best by building. Most of my progress comes from 
                        projects that push me to solve real problems, whether it’s 
                        designing a medical clinic UI in React or creating a scoreboard 
                        application during the Scrimba course.
                    </p>

                    <h1 className="about-h1">Outside of Tech</h1>
                    <p className="about-p">
                        Outside of tech, I enjoy long-distance running and strength training, and 
                        I’ve completed a full marathon, a challenging but rewarding experience that 
                        strengthened my discipline and focus. I also enjoy psychological thrillers 
                        such as The Prestige and Tenet and I sometimes unwind with a game of chess or 
                        Clash Royale. I like to stay active, learn new things and work on personal 
                        projects that help me grow as a developer.
                    </p>
                    
                </div>
            </div>
        </div>
    );
}

export default AboutContent;