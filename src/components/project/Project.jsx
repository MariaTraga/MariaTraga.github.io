import './Project.css'

const Project = ({name, img, link, description, technologies}) => {
    return(
        <div className="project">
            <div className="project-broswer">
                <div className="project-circle"></div>
                <div className="project-circle"></div>
                <div className="project-circle"></div>
                <div className="project-name">{name}</div>
                <div className="project-circle"></div>
                <div className="project-circle"></div>
                <div className="project-circle"></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <div className="flip-card">
                    <div className="flip-card-front">
                        <div className="project-image-wrapper">
                            <img className="project-image" src={img}></img>
                        </div>
                    </div>
                    <div className="flip-card-back">
                        <p className="project-desc">{description}</p>
                        <div className="project-technologies">
                            {technologies.map((tech, index) => (<div key={index} className="project-technology">{tech}</div>))}
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default Project;