import "./index.css";

function Project(props) {

    return (
        <div id="project-cards">
            {props.project.map(project => {
                return (
                    <div key={project.id} className="card sticky-action hoverable">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src={project.screenshot} />
                        </div>
                        <div className="card-content left-align">
                            <span className="card-title activator grey-text text-darken-4"><strong>{project.title}</strong></span>
                        </div>
                        <div className="card-action center">
                            <a className="waves-effect waves-light btn" href={project.app} target="_blank">View App</a>
                            <a className="waves-effect waves-light btn" href={project.code} target="_blank">View Code</a>
                        </div>
                        <div className="card-reveal left-align">
                            <span className="card-title grey-text text-darken-4"><strong>{project.title}</strong><i className="material-icons right">close</i></span>
                            <p>{project.description}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
    
}

export default Project