import './Project.css'

const Project = ({name, img, link}) => {
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
                <div className="project-image-wrapper">
                    <img className="project-image" src={img}></img>
                </div>
            </a>
        </div>
    );
}

export default Project;