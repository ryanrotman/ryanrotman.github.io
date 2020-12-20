import { useEffect } from "react";
import AboutMe from "../components/AboutMe"

function About() {

    useEffect(() => {
        document.title = "About | Ryan Rotman"
    }, []);

    return (
        <div className="container about-container">
            <div className="row">
                <AboutMe />
            </div>
        </div>
    );
}

export default About;