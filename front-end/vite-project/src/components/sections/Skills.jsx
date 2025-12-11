import "../../styles/Skills.css"

/*Importing all the icons */
import HTML_Icon from "../../assets/images/skills-icons/HTML.svg"
import CSS_Icon from "../../assets/images/skills-icons/CSS3.svg"
import JS_Icon from "../../assets/images/skills-icons/JavaScript.svg"
import React_Icon from "../../assets/images/skills-icons/React.svg"

import NodeJS_Icon from "../../assets/images/skills-icons/NodeJS.svg"
import Express_Icon from "../../assets/images/skills-icons/Express.svg"
import MongoDB_Icon from "../../assets/images/skills-icons/MongoDB.svg"
import MySQL_Icon from "../../assets/images/skills-icons/MySQL.svg"

import Cpp_Icon from "../../assets/images/skills-icons/Cpp.svg"
import Python_Icon from "../../assets/images/skills-icons/Python.svg"
import Linux_Icon from "../../assets/images/skills-icons/Linux.svg"

import Figma_Icon from "../../assets/images/skills-icons/Figma.svg"
import Canva_Icon from "../../assets/images/skills-icons/Canva.svg"

function Skills() {
    return (
        <div className="skills">
            <div className="container">
                <div className="skills-inner">
                    <div className="skills-heading">
                        <h1 className="section-heading">Skills</h1>
                        <h2 className="section-subheading">Technologies I work with</h2>
                    </div>
                    <div className="skills-section-container">

                        <div className="skills-bucket glow-card">
                            <h3 className="skills-bucket-heading">Front-end</h3>
                            <ul className="skills-ul">
                                <li className="skills-li">
                                    <img className="skills-icons" src={HTML_Icon}></img>
                                    <h4 className="icon-name">HTML</h4>
                                </li>
                                <li className="skills-li">
                                    <img className="skills-icons" src={CSS_Icon}></img>
                                    <h4 className="icon-name">CSS</h4>
                                </li>
                                <li className="skills-li">
                                    <img className="skills-icons" src={JS_Icon}></img>
                                    <h4 className="icon-name">JavaScript</h4>
                                </li>
                                <li className="skills-li">
                                    <img className="skills-icons" src={React_Icon}></img>
                                    <h4 className="icon-name">React</h4>
                                </li>
                            </ul>
                        </div>

                        <div className="skills-bucket glow-card">
                            <h3 className="skills-bucket-heading">Back-end</h3>
                            <ul className="skills-ul">
                                <li className="skills-li">
                                    <img className="skills-icons" src={NodeJS_Icon}></img>
                                    <h4 className="icon-name">NodeJS</h4>
                                </li>
                                <li className="skills-li">
                                    <img className="skills-icons" src={Express_Icon}></img>
                                    <h4 className="icon-name">Express</h4>
                                </li>
                                <li className="skills-li">
                                    <img className="skills-icons" src={MongoDB_Icon}></img>
                                    <h4 className="icon-name">MongoDB</h4>
                                </li>
                                <li className="skills-li">
                                    <img className="skills-icons" src={MySQL_Icon}></img>
                                    <h4 className="icon-name">MySQL</h4>
                                </li>
                            </ul>
                        </div>

                        <div className="skills-bucket glow-card">
                            <h3 className="skills-bucket-heading">System</h3>
                            <ul className="skills-ul">
                                <li className="skills-li">
                                    <img className="skills-icons" src={Cpp_Icon}></img>
                                    <h4 className="icon-name">C++</h4>
                                </li>
                                <li className="skills-li">
                                    <img className="skills-icons" src={Python_Icon}></img>
                                    <h4 className="icon-name">Python</h4>
                                </li>
                                <li className="skills-li">
                                    <img className="skills-icons" src={Linux_Icon}></img>
                                    <h4 className="icon-name">Linux</h4>
                                </li>
                            </ul>
                        </div>

                        <div className="skills-bucket glow-card">
                            <h3 className="skills-bucket-heading">UI/UX Tools</h3>
                            <ul className="skills-ul">
                                <li className="skills-li">
                                    <img className="skills-icons" src={Figma_Icon}></img>
                                    <h4 className="icon-name">Figma</h4>
                                </li>
                                <li className="skills-li">
                                    <img className="skills-icons" src={Canva_Icon}></img>
                                    <h4 className="icon-name">Canva</h4>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Skills;