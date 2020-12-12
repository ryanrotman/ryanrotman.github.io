import { useEffect } from "react";

function Contact() {

    useEffect(() => {
        document.title = "Contact | Ryan Rotman"
     }, []);

    return (
        <p>
            This is the Contact/Skills page.
        </p>
    );
}

export default Contact;