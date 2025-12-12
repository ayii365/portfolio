import "../../styles/ProjectPreview.css"
import medicalClinicWebImg from "../../assets/images/project/medical-clinic.png"
import happyPetsWebImg from "../../assets/images/project/happy-pets-short.png"
import scoreBoardWebImg from "../../assets/images/project/score-board.png"

function ProjectPreview() {
    return (
        <div className="project-preview">
            <div className="container">
                <div className="project-preview-inner">

                    <div className="project-preview-heading">
                        <h1 className="section-heading">Projects</h1>
                        <h2 className="section-subheading">A selection of my development work</h2>
                    </div>

                    <div className="project-preview-card glow-card" >
                        <div className="card-text-content">
                            <h2>Medical Clinic Front-end (React)</h2>
                            <p>
                                A front-end web interface for a medical clinic built with React. 
                                Designed the layout in Canva, researched UI patterns from real clinic 
                                websites and implemented modular React components. 
                                <br />
                                <br />
                                This project strengthened my understanding of component-based design 
                                and modern front-end workflows.
                            </p>
                            <button className="btn btn-primary">Read more</button>
                        </div>
                        <div className="card-img">
                            <img src={medicalClinicWebImg} />
                        </div>
                    </div>

                    <div className="project-preview-card glow-card" >
                        <div className="card-img">
                            <img src={happyPetsWebImg} />
                        </div>
                        <div className="card-text-content">
                            <h2>Pet Adoption Volunteer Website (Full-stack)</h2>
                            <p>
                                A group project where we designed and developed a volunteer pet adoption 
                                platform using HTML, CSS, JavaScript and Express.js. We created mockups, 
                                built a functional front-end and implemented a basic back-end with user 
                                accounts and a dashboard. 
                                <br />
                                <br />
                                This project improved my teamwork and full-stack development skills.
                            </p>
                            <button className="btn btn-primary">Read more</button>
                        </div>
                    </div>

                    <div className="project-preview-card glow-card" >
                        <div className="card-text-content">
                            <h2>Scoreboard App (Scrimba Course Project)</h2>
                            <p>
                                A fully functional scoreboard application built during the Scrimba 
                                JavaScript course. Implemented DOM manipulation and added optional 
                                stretch features such as timers. 
                                <br />
                                <br />
                                Published the final app on Netlify and enhanced the design for better 
                                mobile usability.
                            </p>
                            <button className="btn btn-primary">Read more</button>
                        </div>
                        <div className="card-img">
                            <img src={scoreBoardWebImg} />
                        </div>
                    </div>

                    <div className="view-more">
                        <h1 className="section-subheading">View more projects I've worked on</h1>
                        <button className="btn btn-primary">View All</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ProjectPreview;