function Contact() {
    return (
        <div id="contact-section">
            <h5 className="white-text" id="connect-heading">Contact</h5>
            <div style={{fontSize: 35}}>
                <a href="mailto:ryan.rotman@gmail.com" target="_blank" title="Send me an email"><i className="far fa-envelope hvr-grow white-text"></i></a>
                &nbsp;
                <a href="tel:7072917221" target="_blank" title="Call or text"><i className="fas fa-mobile-alt hvr-grow white-text"></i></a>
            </div>
        </div>
    )
}

export default Contact;