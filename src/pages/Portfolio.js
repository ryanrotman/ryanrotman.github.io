import { useEffect } from "react";
import Skills from "../components/Skills";
import Project from "../components/Project";

function Portfolio(props) {

    useEffect(() => {
        document.title = "Portfolio | Ryan Rotman"
    }, []);

    return (
        <div className="container">
            <div className="center-align" id="project-section">
                <h5 className="white-text" id="projects-heading">Projects</h5>
                <p className="white-text">Apologies that some apps are not available at the moment. Working on migrating projects from Heroku to a new hosting site.</p>
                <p className="white-text mobile-screen-note"><i>(Click on the image to see a description of the project)</i></p>
                <div id="project-cards">
                    <Project
                    project={props.project[0]}
                    />
                    <Project
                    project={props.project[1]}
                    />
                    <Project
                    project={props.project[2]}
                    />
                    <Project
                    project={props.project[3]}
                    />
                    <Project
                    project={props.project[4]}
                    />
                    <Project
                    project={props.project[5]}
                    />
                    <Project
                    project={props.project[6]}
                    />
                    <Project
                    project={props.project[7]}
                    />
                    <Project
                    project={props.project[8]}
                    />
                </div>
            </div>
            &nbsp;
            <div className="col s12 center-align" id="portfolio-page-skills-section">
                <Skills />
            </div>
        </div>
    );
}

export default Portfolio;