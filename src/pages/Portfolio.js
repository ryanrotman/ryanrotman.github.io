import { useEffect } from "react";

function Portfolio() {

    useEffect(() => {
        document.title = "Ryan Rotman | Portfolio"
     }, []);

    return (
        <p>
            This is the porfolio page.
        </p>
    );
}

export default Portfolio;