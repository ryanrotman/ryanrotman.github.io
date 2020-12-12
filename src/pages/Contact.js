import { useEffect } from "react";

function Contact() {

    useEffect(() => {
        document.title = "Ryan Rotman | Contact"
     }, []);

    return (
        <p>
            This is the Contact/Skills page.
        </p>
    );
}

export default Contact;