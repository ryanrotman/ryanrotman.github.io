import "./index.css";

function Skills() {    
    return (
        <div className="col s12">
            <h5 className="white-text" id="skills-heading">Skills</h5>
            <div className="white-text" id="skills-list">
                {/* Languages */}
                <i className="devicon-html5-plain"></i>&nbsp;
                <i className="devicon-css3-plain"></i>&nbsp;
                <i className="devicon-javascript-plain"></i>&nbsp;
                <i className="devicon-jquery-plain"></i>&nbsp;
                {/* Frameworks */}
                <i className="devicon-nodejs-plain"></i>&nbsp;
                <i className="devicon-express-original"></i>&nbsp;
                <i className="devicon-react-original"></i>&nbsp;
                <i className="devicon-bootstrap-plain"></i>&nbsp;
                <i className="devicon-handlebars-plain"></i>&nbsp;
                <i className="devicon-sequelize-plain"></i>&nbsp;
                {/* Database */}
                <i className="devicon-mysql-plain"></i>&nbsp;
                <i className="devicon-mongodb-plain"></i>&nbsp;
                {/* Tools/Tech */}
                <i className="devicon-git-plain"></i>&nbsp;
                <i className="devicon-github-plain"></i>&nbsp;
                <i className="devicon-visualstudio-plain"></i>&nbsp;
                <i className="devicon-npm-original-wordmark"></i>&nbsp;
                <i className="devicon-heroku-original"></i>&nbsp;
                <i className="devicon-babel-plain"></i>&nbsp;
                <i className="devicon-webpack-plain"></i>&nbsp;
                <i className="devicon-redux-original"></i>&nbsp;
                <i className="devicon-travis-plain"></i>&nbsp;
                <i className="devicon-slack-plain"></i>&nbsp;
                {/* Operating Systems */}
                <i className="devicon-apple-original"></i>&nbsp;
                <i className="devicon-chrome-plain"></i>&nbsp;
            </div>
        </div>
    )
}

export default Skills;