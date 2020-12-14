import "./index.css";

function Project(props) {

    return (
        <div id="project-cards">
            {props.project.map(project => {
                return (
                    <div key={project.id} class="card sticky-action hoverable">
                        <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator" src={project.screenshot} />
                        </div>
                        <div class="card-content left-align">
                            <span class="card-title activator grey-text text-darken-4"><strong>{project.title}</strong></span>
                        </div>
                        <div class="card-action center">
                            <a class="waves-effect waves-light btn" href={project.app} target="_blank">View App</a>
                            <a class="waves-effect waves-light btn" href={project.code} target="_blank">View Code</a>
                        </div>
                        <div class="card-reveal left-align">
                            <span class="card-title grey-text text-darken-4"><strong>{project.title}</strong><i class="material-icons right">close</i></span>
                            <p>{project.description}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
    
}

export default Project