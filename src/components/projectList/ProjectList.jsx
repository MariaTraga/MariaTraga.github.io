import './ProjectList.css';
import Project from '../project/Project';
import {projects} from '../../ProjectData';

const ProjectList = () => {
    return(
        <div className="project-list">
            <div className="project-list-texts">
                <h1 className="project-list-title">
                    My Projects
                </h1>
                <p className="project-list-desc">
                    My projects so far...
                </p>
            </div>
            <div className="project-list-list">
                {projects.map((project) => (
                    <Project key={project.id} name={project.name} img={project.img} link={project.link}/>
                ))}
            </div>
        </div>
    );
}

export default ProjectList;