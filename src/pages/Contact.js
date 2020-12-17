import { useEffect } from "react";
import Connect from "../components/Connect";
import ContactMe from "../components/ContactMe";
import Resume from "../components/Resume";
import Form from "../components/Form";

function Contact() {

    useEffect(() => {
        document.title = "Contact | Ryan Rotman"
    }, []);

    return (
        <div className="container contact-container center-align">
            <div className="row">
                <div className="col l4 s12">
                    <div className="col s12">
                        <Connect />
                    </div>
                </div>
                <div className="col l4 s12">
                    <div className="col s12">
                        <ContactMe />
                    </div>
                </div>
                <div className="col l4 s12">
                    <div className="col s12">
                        <Resume />
                    </div>
                </div>
            </div>
            <br />
            <Form />
        </div>
    );
}

export default Contact;