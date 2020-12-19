import { useEffect } from "react";
import M from "materialize-css";
import parallaxBottom from "../../assets/images/Parallax_Bottom.png";

function ParallaxBottom() {

    useEffect(() => {
        let parallax = document.querySelectorAll(".parallax");
        M.Parallax.init(parallax);
    }, []);

    return (
        <div className="parallax-container valign-wrapper">
            <div className="section no-pad-bot">
                <div className="container">
                    <div className="row center">
                        <h4 className="header col s12 light" id="skills-connect-resume" style={{fontWeight: "bolder"}}>Skills | Connect | Contact | Resume</h4>
                    </div>
                </div>
            </div>
            <div className="parallax"><img src={parallaxBottom} alt="Computer Keyboard" /></div>
        </div>
    )
}

export default ParallaxBottom;