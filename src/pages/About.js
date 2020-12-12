import { useEffect } from "react";

function About() {

    useEffect(() => {
        document.title = "Ryan Rotman | About"
     }, []);

    return (
        <p>
            This is the about me page.
        </p>
    );
}

export default About;