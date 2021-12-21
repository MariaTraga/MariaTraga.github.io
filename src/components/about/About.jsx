import "./About.css";
import Me1 from "../../images/me1.jpg";
import Me2 from "../../images/me2.png";
import ContactChip from "../contactchip/ContactChip";
import {collaborations, aboutme} from "../../ProjectData";

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
                <h1 className="about-title">
                    {aboutme.title}
                </h1>
                <p className="about-sub desc-text">
                    {aboutme.subtitle} 
                </p>
                <div className="about-desc desc-text">
                    {aboutme.description}
                </div>
                <div className="about-technologies">
                    {aboutme.technologies.length>0 && <div className="desc-text">Worked on:</div>}
                    <div className="about-technologies-list">
                        {aboutme.technologies.map((technology, index) => (<div key={index} className="about-technology">{technology}</div>))}
                    </div>
                </div>
                <div className="about-collabs">
                    {collaborations.length>0 && <div className="desc-text">In a collaborating team with:</div>}
                    <div className="about-collabs-list">
                        {collaborations.map((collab) => (<ContactChip key={collab.id} name={collab.name} img={collab.img} link ={collab.link}/>))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;