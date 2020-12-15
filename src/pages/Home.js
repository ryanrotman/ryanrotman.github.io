import { useEffect } from "react";
import M from "materialize-css"
import parallaxTop from "../assets/images/Parallax_Top.jpg";
import parallaxMiddle from "../assets/images/Parallax_Middle.jpg";
import parallaxBottom from "../assets/images/Parallax_Bottom.png";
import headshot from "../assets/images/Headshot.JPG";
import pdf from "../assets/RyanRotman_Resume.pdf";

function Home(props) {

    useEffect(() => {
        let parallax = document.querySelectorAll(".parallax");
        M.Parallax.init(parallax, {});
    }, []);

    return (
        <div>
            {/* top parallax element */}
            <div id="index-banner" className="parallax-container">
                <div className="section no-pad-bot">
                    <div className="container" id="title-logo">
                        <hr />
                            <div className="row">
                                <div className="col s12">
                                    <h1 className="header center white-text text-lighten-2"><strong>Full Stack Web Developer</strong></h1>
                                </div>
                            </div>
                        <hr />
                    </div>
                </div>
                <div className="parallax"><img src={parallaxTop} alt="MacBook Pro" /></div>
            </div>
            <br />

            {/* portfolio section */}
            <div className="container">
                <h5 className="white-text center-align" id="projects-heading">Projects</h5>
                <p className="white-text center-align" id="projects-note"><i>(click on the image to see a description of the app)</i></p>
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
            </div>

            {/* middle parallax element */}
            <div className="parallax-container valign-wrapper">
                <div className="section no-pad-bot">
                    <div className="container">
                        <div className="row center">
                            <h4 className="header col s12 light" id="about-me-heading" style={{fontWeight: "bolder"}}>A Little Bit About Me</h4>
                        </div>
                    </div>
                </div>
                <div className="parallax"><img src={parallaxMiddle} alt="Laptop on desk" /></div>
            </div>

            {/* about me section */}
            <div className="container about-container">
                <div className="row">
                    <div className="col s12 m4 center">
                        <img className="responsive-img circle" id="headshot" src={headshot} alt="personal headshot" />
                    </div>
                    <div className="col s12 m8">
                        <p className="white-text">Welcome! I’m so glad you stopped by! Here you can learn a little more about me, see some of my work, and find some ways to be able to get in touch.</p>
                        <p className="white-text">My path in life and work has taken me on a lot of different paths over the years. I went into college thinking that I would be headed to full-time church music ministry, and while music has always been a passion of mine and always will be, it was not meant to be my full-time vocation. Since college, I spent a lot of years within the specialty coffee industry. I was a barista and learning coach at Starbucks, and then moved on to work as a barista, lead barista, and lead educator at an independent specialty coffee company. I also had the opportunity to move into an events role within the industry working as an Event Coordinator with the Specialty Coffee Association.</p>
                        <p className="white-text">All of these jobs and other side jobs I’ve had have exposed me to technology, the web, web development, and databases which has inspired my current endeavor as a web developer through the <a href="https://techbootcamps.utexas.edu/coding/#1591724898890-15754900-8a15" target="_blank">Coding Boot Camp at UT Austin</a>. This program is in partnership with the <a href="https://professionaled.utexas.edu/" target="_blank">University of Texas at Austin's Center for Professional Education</a> and <a href="https://www.trilogyed.com/" target="_blank">Trilogy Education Services</a>.</p>
                        <p className="white-text">I currently live in Georgetown, Texas with my beautiful wife and darling daughter.</p>
                    </div>
                </div>
            </div>

            {/* bottom parallax element */}
            <div className="parallax-container valign-wrapper">
                <div className="section no-pad-bot">
                    <div className="container">
                        <div className="row center">
                            <h4 className="header col s12 light" id="skills-connect-resume" style={{fontWeight: "bolder"}}>Skills | Connect | Contact | Resume</h4>
                        </div>
                    </div>
                </div>
                <div className="parallax"><img src={parallaxBottom} alt="Computer Keyboard" /></div>
            </div>

            {/* skills and connect section */}
            <div className="container">
                <div className="row">
                    {/* skills section */}
                    <div className="col l9 s12">
                        <h5 className="white-text" id="skills-heading">Skills</h5>
                        <br />
                        <div className="white-text" id="skills-list">
                            {/* Languages */}
                            <i className="devicon-html5-plain"></i>&nbsp;
                            <i className="devicon-css3-plain"></i>&nbsp;
                            <i className="devicon-javascript-plain"></i>&nbsp;
                            <i className="devicon-jquery-plain"></i>&nbsp;
                            {/* Frameworks */}
                            <i className="devicon-nodejs-plain"></i>&nbsp;
                            <i className="devicon-express-original"></i>&nbsp;
                            <i className="devicon-react-original"></i>&nbsp;
                            <i className="devicon-bootstrap-plain"></i>&nbsp;
                            <i className="devicon-handlebars-plain"></i>&nbsp;
                            <i className="devicon-sequelize-plain"></i>&nbsp;
                            {/* Database */}
                            <i className="devicon-mysql-plain"></i>&nbsp;
                            <i className="devicon-mongodb-plain"></i>&nbsp;
                            {/* Tools/Tech */}
                            <i className="devicon-git-plain"></i>&nbsp;
                            <i className="devicon-github-plain"></i>&nbsp;
                            <i className="devicon-visualstudio-plain"></i>&nbsp;
                            <i className="devicon-npm-original-wordmark"></i>&nbsp;
                            <i className="devicon-heroku-original"></i>&nbsp;
                            <i className="devicon-babel-plain"></i>&nbsp;
                            <i className="devicon-webpack-plain"></i>&nbsp;
                            <i className="devicon-redux-original"></i>&nbsp;
                            <i className="devicon-travis-plain"></i>&nbsp;
                            <i className="devicon-slack-plain"></i>&nbsp;
                            {/* Operating Systems */}
                            <i className="devicon-apple-original"></i>&nbsp;
                            <i className="devicon-chrome-plain"></i>&nbsp;
                        </div>
                    </div>
                    {/* end of skills section */}
                    {/* connect section */}
                    <div className="col l3 s12">
                        <div className="row">
                            <div className="col s12">
                                <h5 className="white-text" id="connect-heading">Connect</h5>
                                <div style={{fontSize: 35}}>
                                    <a href="https://github.com/ryanrotman" target="_blank" title="View my GitHub profile"><i className="fab fa-github hvr-grow white-text"></i></a>
                                    &nbsp;
                                    <a href="https://www.linkedin.com/in/ryanrotman/" target="_blank" title="Connect with me on LinkedIn"><i className="fab fa-linkedin hvr-grow white-text"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <h5 className="white-text" id="connect-heading">Contact</h5>
                                <div style={{fontSize: 35}}>
                                    <a href="mailto:ryan.rotman@gmail.com" target="_blank" title="Send me an email"><i className="far fa-envelope hvr-grow white-text"></i></a>
                                    &nbsp;
                                    <a href="tel:7072917221" target="_blank" title="Call or text"><i className="fas fa-mobile-alt hvr-grow white-text"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <h5 className="white-text" id="resume-heading">Resume</h5>
                                <div style={{fontSize: 35}}>
                                    <a href={pdf} target="_blank" title="Download my resume"><i className="fas fa-file-download hvr-grow white-text"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end of connect section */}
                </div>
            </div>

        </div>
    );
}

export default Home;