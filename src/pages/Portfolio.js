import { useEffect } from "react";
import Skills from "../components/Skills";

function Portfolio() {

    useEffect(() => {
        document.title = "Portfolio | Ryan Rotman"
    }, []);

    return (
        <div className="container center-align">
            <p className="white-text">
                This is the porfolio page which will show the cards with project/assignment information.
            </p>
            <Skills />
        </div>
    );
}

export default Portfolio;