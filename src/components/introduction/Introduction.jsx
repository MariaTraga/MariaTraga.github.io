import "./Introduction.css";
import Me from "../../images/me.png";
import Me1 from "../../images/me1.jpg";

const Introduction = () => {
    return(
        <div className="intro">
            <div className="intro-left">
                <div className="intro-left-wrapper">
                    <h2 className="intro-introtext">Hello my name is</h2>
                    <h1 className="intro-name">Maria Traga</h1>
                    <div className="intro-title">
                        <div className="intro-title-wrapper">
                            <div className="intro-title-item">Web Developer</div>
                            <div className="intro-title-item">Front-End</div>
                            <div className="intro-title-item">Back-End</div>
                            <div className="intro-title-item">Web APIs</div>
                            <div className="intro-title-item">Unity Developer</div>
                            <div className="intro-title-item">Unity Designer/Artist</div>                        </div>
                    </div>
                    <p className="intro-desc">
                        I design and develop Websites, Apps and APIs
                        as well as Unity Applications and Videogames.
                    </p>
                </div>
            </div>
            <div className="intro-right">
                <div className="intro-bg"> </div>
                <div className="intro-image-wrapper">
                    <img src={Me} alt="" className="intro-image"></img>
                </div>
            </div>
        </div>
    );
}

export default Introduction