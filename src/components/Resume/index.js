import pdf from "../../assets/RyanRotman_Resume.pdf";

function Resume() {
    return (
        <div id="resume-section">
            <h5 className="white-text" id="resume-heading">Résumé</h5>
            <div style={{fontSize: 35}}>
                <a href={pdf} target="_blank" title="Download my resume"><i className="fas fa-file-download hvr-grow white-text"></i></a>
            </div>
        </div>
    )
}

export default Resume;