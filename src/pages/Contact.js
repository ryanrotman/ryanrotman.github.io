import { useEffect } from "react";
import pdf from "../assets/RyanRotman_Resume.pdf";

function Contact() {

    useEffect(() => {
        document.title = "Contact | Ryan Rotman"
    }, []);

    return (
        <div className="container contact-container center-align">
            <div className="row">
                <div className="col l4 s12">
                    <div className="col s12">
                        <h5 className="white-text" id="connect-heading">Connect</h5>
                        <div style={{fontSize: 35}}>
                            <a href="https://github.com/ryanrotman" target="_blank" title="View my GitHub profile"><i className="fab fa-github hvr-grow white-text"></i></a>
                            &nbsp;
                            <a href="https://www.linkedin.com/in/ryanrotman/" target="_blank" title="Connect with me on LinkedIn"><i className="fab fa-linkedin hvr-grow white-text"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col l4 s12">
                    <div className="col s12">
                        <h5 className="white-text" id="connect-heading">Contact</h5>
                        <div style={{fontSize: 35}}>
                            <a href="mailto:ryan.rotman@gmail.com" target="_blank" title="Send me an email"><i className="far fa-envelope hvr-grow white-text"></i></a>
                            &nbsp;
                            <a href="tel:7072917221" target="_blank" title="Call or text"><i className="fas fa-mobile-alt hvr-grow white-text"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col l4 s12">
                    <div className="col s12">
                        <h5 className="white-text" id="resume-heading">Resume</h5>
                        <div style={{fontSize: 35}}>
                            <a href={pdf} target="_blank" title="Download my resume"><i className="fas fa-file-download hvr-grow white-text"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;