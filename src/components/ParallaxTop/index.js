import { useEffect } from "react";
import M from "materialize-css";
import parallaxTop from "../../assets/images/Parallax_Top.jpg"

function ParallaxTop() {
    
    useEffect(() => {
        let parallax = document.querySelectorAll(".parallax");
        M.Parallax.init(parallax);
    }, []);
    
    return (
        <div id="index-banner" className="parallax-container">
                <div className="section no-pad-bot">
                    <div className="container" id="title-logo">
                        <hr />
                            <div className="row">
                                <div className="col s12">
                                    <h1 className="header center white-text text-lighten-2"><strong>Full Stack Web Developer</strong></h1>
                                </div>
                            </div>
                        <hr />
                    </div>
                </div>
            <div className="parallax"><img src={parallaxTop} alt="MacBook Pro" /></div>
        </div>
    )
}

export default ParallaxTop;