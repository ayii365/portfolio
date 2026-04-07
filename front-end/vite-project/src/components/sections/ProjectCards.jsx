import "../../styles/ProjectCards.css";

/* Project videos */
import medicalClinicVid from "../../assets/videos/my-clinic-frontend.mp4";
import happyPetsVid from "../../assets/videos/happy-pets-video.mp4";
import securePassVid from "../../assets/videos/secure-password-generator-clip.mp4";
import unitConverter from "../../assets/videos/unit-converter-video.mp4";
import scoreBoard from "../../assets/videos/score-board-video.mp4";


function ProjectCards() {
    return (
        <div className="project-cards">
            <div className="container">
                <div className="project-cards-inner">

                    {/* Medical Clinic Project */}
                    <div id="medical-clinic" className="project-card glow-card">
                        <div className="project-media">
                            <video className="project-video" controls>
                                <source src={medicalClinicVid} type="video/mp4">
                                </source>
                            </video>
                            <h2 className="project-heading">Medical Clinic Front-end (React)</h2>
                        </div>
                        <div className="project-text">
                            <h2 className="project-subheading">Overview</h2>
                            <p className="project-p">This project involved designing and building the front-end of a medical 
                                clinic website to improve my practical skills with modern web development 
                                tools. I researched UI patterns from existing clinics, planned the layout 
                                in Canva and then implemented the design using React.
                            </p>

                            <h2 className="project-subheading">Process</h2>
                            <ul className="text-style project-p">
                                <li>Researched design choices, user flows and colour themes from professional clinic websites</li>
                                <li>Created page layouts and components in Canva</li>
                                <li>Built the project with React, using modular components and organised CSS files</li>
                                <li>Troubleshot setup issues and React-specific syntax by using online documentation and tutorials</li>
                                <li>Improved component structure and design consistency through iterative refinement</li>
                            </ul>

                            <h2 className="project-subheading">Key Acievements</h2>
                            <ul className="text-style project-p">
                                <li>Gained practical experience using React for the first time</li>
                                <li>Improved understanding of component-based development</li>
                                <li>Strengthened front-end design skills by combining research, design tools and code</li>
                            </ul>
                        </div>  
                    </div>

                    {/* Pet Volunteer Project */}
                    <div id="happy-pets" className="project-card glow-card">
                        <div className="project-media">
                            <video className="project-video" controls>
                                <source src={happyPetsVid} type="video/mp4">
                                </source>
                            </video>
                            <h2 className="project-heading">Pet Adoption Volunteer Website (Full-stack Group Project)</h2>
                        </div>
                        <div className="project-text">
                            <h2 className="project-subheading">Overview</h2>
                            <p className="project-p">As part of a university subject on web and database 
                                computing, my group developed a volunteer pet adoption website. We worked 
                                collaboratively to design the UI, create the database schema and implement
                                 a functioning website using HTML, CSS, JavaScript and Express.js.
                            </p>

                            <h2 className="project-subheading">Process</h2>
                            <ul className="text-style project-p">
                                <li>Formed a group, established communication channels and delegated tasks</li>
                                <li>Designed initial layouts using rough sketches and later refined them in Canva</li>
                                <li>Developed individual pages and ensured design consistency across the group</li>
                                <li>Implemented front-end interfaces and back-end functionality using Express.js</li>
                                <li>Added extra features such as a user dashboard for updating personal information and managing faculties</li>
                            </ul>

                            <h2 className="project-subheading">Key Acievements</h2>
                            <ul className="text-style project-p">
                                <li>Strengthened group collaboration and communication</li>
                                <li>Improved front-end and back-end development skills</li>
                                <li>Learned how to build and integrate simple dynamic features with Express.js</li>
                            </ul>
                        </div>  
                    </div>

                    {/* Password Generator Project */}
                    <div id="password-generator" className="project-card glow-card">
                        <div className="project-media">
                            <video className="project-video" controls>
                                <source src={securePassVid} type="video/mp4">
                                </source>
                            </video>
                            <h2 className="project-heading">Random Password Generator (JavaScript Project)</h2>
                        </div>
                        <div className="project-text">
                            <h2 className="project-subheading">Overview</h2>
                            <p className="project-p">
                                A responsive random password generator built using Vanilla JavaScript. 
                                The project focuses on secure password generation, DOM event handling, 
                                and improving user experience through interactive features such as 
                                clipboard copying, password strength feedback, and light/dark theme support.
                            </p>

                            <h2 className="project-subheading">Process</h2>
                            <ul className="text-style project-p">
                                <li>Implemented dynamic password generation with customizable length and character options</li>
                                <li>Refactored inline HTML handlers into JavaScript event listeners for cleaner structure</li>
                                <li>Added async clipboard functionality with user feedback and error handling</li>
                                <li>Applied responsive design principles and theme toggling for improved accessibility</li>
                                <li>Deployed the finished project to Netlify and tested across multiple screen sizes</li>
                            </ul>

                            <h2 className="project-subheading">Key Achievements</h2>
                            <ul className="text-style project-p">
                                <li>Strengthened understanding of JavaScript logic, arrays, and event-driven programming</li>
                                <li>Designed a more secure password generator with enforced character requirements</li>
                                <li>Improved UI/UX through responsive layout adjustments and status notifications</li>
                                <li>Practiced clean Git workflows and incremental feature development</li>
                            </ul>
                        </div>  
                    </div>

                    {/* Scoreboard App Project */}
                    <div id="unit-converter" className="project-card glow-card">
                        <div className="project-media">
                            <video className="project-video" controls>
                                <source src={unitConverter} type="video/mp4">
                                </source>
                            </video>
                            <h2 className="project-heading">Unit Converter App (Javascript Project)</h2>
                        </div>
                        <div className="project-text">
                            <h2 className="project-subheading">Overview</h2>
                            <p className="project-p">
                                This project was built to strengthen my JavaScript fundamentals, 
                                focusing on DOM manipulation, event-driven programming, and UI/UX design. 
                                The application converts between metric and imperial units (length, volume, and mass) 
                                and includes additional features such as dynamic input resizing and a light/dark mode toggle.
                            </p>

                            <h2 className="project-subheading">Process</h2>
                            <ul className="text-style project-p">
                                <li>Designed and developed a responsive UI based on a custom layout</li>
                                <li>Implemented conversion logic for multiple unit types using modular JavaScript functions</li>
                                <li>Added event listeners to handle user input and dynamically update results</li>
                                <li>Built a light/dark mode toggle using an interactive inline SVG element</li>
                                <li>Enhanced user experience by implementing an auto-resizing input field</li>
                                <li>Tested responsiveness and refined layout for different screen sizes</li>
                            </ul>

                            <h2 className="project-subheading">Key Acievements</h2>
                            <ul className="text-style project-p">
                                <li>Strengthened understanding of DOM manipulation and event handling</li>
                                <li>Practiced writing more modular and maintainable JavaScript code</li>
                                <li>Improved ability to build interactive and user-friendly UI features</li>
                                <li>Gained experience implementing theme switching (light/dark mode)</li>
                                <li>Applied responsive design principles for better usability across devices</li>
                            </ul>
                        </div>  
                    </div>

                    {/* Scoreboard App Project */}
                    <div id="score-board" className="project-card glow-card">
                        <div className="project-media">
                            <video className="project-video" controls>
                                <source src={scoreBoard} type="video/mp4">
                                </source>
                            </video>
                            <h2 className="project-heading">Scoreboard App (Scrimba Course Project)</h2>
                        </div>
                        <div className="project-text">
                            <h2 className="project-subheading">Overview</h2>
                            <p className="project-p">
                                This project was part of a Scrimba JavaScript course 
                                designed to reinforce core JavaScript skills. I built a scoreboard app based 
                                on a Figma design provided in the course and implemented optional stretch 
                                goals to challenge myself.
                            </p>

                            <h2 className="project-subheading">Process</h2>
                            <ul className="text-style project-p">
                                <li>Followed the provided design and programmed the core scoreboard functionality</li>
                                <li>Implemented stretch features such as timers using DOM manipulation and custom logic</li>
                                <li>Published the completed project on Netlify</li>
                                <li>Tested the app on mobile and updated button sizing and layout for better usability</li>
                            </ul>

                            <h2 className="project-subheading">Key Acievements</h2>
                            <ul className="text-style project-p">
                                <li>Improved JavaScript and DOM manipulation skills</li>
                                <li>Gained experience deploying web applications with Netlify</li>
                                <li>Strengthened ability to extend features beyond basic requirements</li>
                            </ul>
                        </div>  
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ProjectCards;