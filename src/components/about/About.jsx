import "./About.css";
import Me1 from "../../images/me1.jpg";
import Me2 from "../../images/me2.png";

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
            <div className="about-card bg">
                    
                </div>
                <div className="about-card">
                    <img 
                        className="about-image" 
                        src={Me2}/>
                </div>
            </div>
            <div className="about-right">
                <h1 className="about-title">About Me</h1>
                <p className="about-sub">
                    My name is Maria Traga. 
                </p>
                <p className="about-desc">
                    I have studied Computer Science for my Master's Degree and Business Administration in my Bachelor's Degree.<br/> 
                    I develop web apps and I am very entusiastic about game development. 
                </p>
            </div>
        </div>
    )
}

export default About;