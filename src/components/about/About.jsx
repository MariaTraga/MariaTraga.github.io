import "./About.css";

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
            <div className="about-card bg">
                    
                </div>
                <div className="about-card">
                    <img 
                        className="about-image" 
                        src="https://www.bandt.com.au/information/uploads/2020/09/iStock-1170073827-1260x840.jpg"/>
                </div>
            </div>
            <div className="about-right">
                <h1 className="about-title">About Me</h1>
                <p className="about-sub">
                    My name is giorno giovanna
                </p>
                <p className="about-desc">
                    Lorem ipsum
                </p>
            </div>
        </div>
    )
}

export default About;