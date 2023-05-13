import headshot from "../../assets/images/Headshot.JPG";

function AboutMe() {
    return (
        <div>
            <div className="col s12 m4 center">
                <img className="responsive-img circle" id="headshot" src={headshot} alt="personal headshot" />
            </div>
            <div className="col s12 m8">
                <p className="white-text">Welcome! I’m so glad you stopped by! Here you can learn a little more about me, see some of my work, and find some ways to be able to get in touch.</p>
                <p className="white-text">My path in life and work has taken me on a lot of different paths over the years. I went into college thinking that I would be headed to full-time church music ministry, and while music has always been a passion of mine and always will be, it was not meant to be my full-time vocation. Since college, I spent a lot of years within the specialty coffee industry. I was a barista and learning coach at Starbucks, and then moved on to work as a barista, lead barista, and lead educator at an independent specialty coffee company. I also had the opportunity to move into an events role within the industry working as an Event Coordinator with the Specialty Coffee Association.</p>
                <p className="white-text">All of these jobs and other side jobs I’ve had have exposed me to technology, the web, web development, and databases which has inspired my current career as a full stack web developer. I have training and experience across the MERN stack and I am also a Salesforce Certified B2C Commerce Developer on the Salesforce Commerce Cloud platform.</p>
            </div>
        </div>
    )
}

export default AboutMe;