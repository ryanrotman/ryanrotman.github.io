import { useEffect } from "react";
import Skills from "../components/Skills";
import Project from "../components/Project";

function Portfolio(props) {

    useEffect(() => {
        document.title = "Portfolio | Ryan Rotman"
    }, []);

    return (
        <div className="container portfolio-container center-align">
            <h5 className="white-text" id="projects-heading">Projects</h5>
            <Project
            project={props.project}
            />
            &nbsp;
            <Skills />
        </div>
    );
}

export default Portfolio;