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
                </div>
            </div>
            &nbsp;
            <div className="center-align">
                <Skills />
            </div>
        </div>

        // <div className="container portfolio-container center-align">
        //     <Project
        //     project={props.project}
        //     />
        //     &nbsp;
        //     <Skills />
        // </div>
    );
}

export default Portfolio;