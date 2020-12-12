import { useEffect } from "react";

function About() {

    useEffect(() => {
        document.title = "About | Ryan Rotman"
    }, []);

    return (
        <p>
            This is the about me page.
        </p>
    );
}

export default About;