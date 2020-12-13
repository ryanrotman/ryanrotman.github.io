import { useEffect } from "react";
import headshot from "../assets/images/Headshot.JPG";

function About() {

    useEffect(() => {
        document.title = "About | Ryan Rotman"
    }, []);

    return (
        <div className="container">
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
    );
}

export default About;