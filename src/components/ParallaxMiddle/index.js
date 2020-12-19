import { useEffect } from "react";
import M from "materialize-css";
import parallaxMiddle from "../../assets/images/Parallax_Middle.jpg";

function ParallaxMiddle() {
    
    useEffect(() => {
        let parallax = document.querySelectorAll(".parallax");
        M.Parallax.init(parallax);
    }, []);
    
    return (
        <div className="parallax-container valign-wrapper">
            <div className="section no-pad-bot">
                <div className="container">
                    <div className="row center">
                        <h4 className="header col s12 light" id="about-me-heading" style={{fontWeight: "bolder"}}>A Little Bit About Me</h4>
                    </div>
                </div>
            </div>
            <div className="parallax"><img src={parallaxMiddle} alt="Laptop on desk" /></div>
        </div>
    )
}

export default ParallaxMiddle;