import { useRef } from "react";
import "./index.css";

function Project(props) {
    
    const activator = useRef();
    const close = useRef();

    return (
        <div className="card sticky-action hoverable" onMouseEnter={() => activator.current.click()} onMouseLeave={() => close.current.click()}>
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator project-screenshot" ref={activator} src={props.project.screenshot} />
            </div>
            <div className="card-content left-align">
                <span className="card-title activator grey-text text-darken-4"><strong>{props.project.title}</strong></span>
            </div>
            <div className="card-action center">
                <a className="waves-effect waves-light btn" href={props.project.app} target="_blank">View App</a>
                <a className="waves-effect waves-light btn" href={props.project.code} target="_blank">View Code</a>
            </div>
            <div className="card-reveal left-align">
                <span className="card-title grey-text text-darken-4"><strong>{props.project.title}</strong><i className="material-icons right" ref={close}>close</i></span>
                <p>{props.project.description}</p>
            </div>
        </div>
    )

    // return (
    //     <div className="center-align" id="project-section">
    //         <h5 className="white-text" id="projects-heading">Projects</h5>
    //         <p className="white-text center-align" id="projects-note"><i>(click on the image to see a description of the app)</i></p>
    //         <div id="project-cards">
    //             {props.project.map(project => {
    //                 return (
    //                     <div key={project.id} className="card sticky-action hoverable" onMouseEnter={() => activator.current.click()} onMouseLeave={() => close.current.click()}>
    //                         <div className="card-image waves-effect waves-block waves-light">
    //                             <img className="activator" id="project-screenshot" ref={activator} src={project.screenshot} />
    //                         </div>
    //                         <div className="card-content left-align">
    //                             <span className="card-title activator grey-text text-darken-4"><strong>{project.title}</strong></span>
    //                         </div>
    //                         <div className="card-action center">
    //                             <a className="waves-effect waves-light btn" href={project.app} target="_blank">View App</a>
    //                             <a className="waves-effect waves-light btn" href={project.code} target="_blank">View Code</a>
    //                         </div>
    //                         <div className="card-reveal left-align">
    //                             <span className="card-title grey-text text-darken-4"><strong>{project.title}</strong><i className="material-icons right" ref={close}>close</i></span>
    //                             <p>{project.description}</p>
    //                         </div>
    //                     </div>
    //                 )
    //             })}
    //         </div>
    //     </div>
    // )
    
}

export default Project