import { useEffect } from "react";

function Portfolio() {

    useEffect(() => {
        document.title = "Portfolio | Ryan Rotman"
    }, []);

    return (
        <p>
            This is the porfolio page.
        </p>
    );
}

export default Portfolio;