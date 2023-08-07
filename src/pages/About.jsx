import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="webs">
        <h3>Find me</h3>
        <div className="links-prof">
          <a href="https://www.linkedin.com/in/virginia-zurita-ortiz/">
            <img
              src="https://res.cloudinary.com/do7bnejaz/image/upload/v1682438843/assets/linkedin_ai0syv.png"
              alt="LinkedIn"
            />
          </a>
          <a href="https://github.com/virginia-zuror/">
            <img
              src="https://res.cloudinary.com/do7bnejaz/image/upload/v1682438922/assets/github_fmllwl.png"
              alt="Git Hub"
            />
          </a>
          <a href="https://codepen.io/virginia-zuror">
            <img
              src="https://res.cloudinary.com/do7bnejaz/image/upload/v1682440349/assets/codepen-wordmark-black_vfohxy.png"
              alt="codepen logo"
            />
          </a>
        </div>
      </div>
      <div className="skills">
        <h3>My Skills</h3>
        <div className="technologies">
          <abbr title="ReactJS">
            <img
              src="https://res.cloudinary.com/do7bnejaz/image/upload/v1682439893/assets/logo-react-svgrepo-com_cxinj2.svg"
              alt="React icon"
            />
          </abbr>
          <abbr title="JavaScript">
            <img
              src="https://res.cloudinary.com/do7bnejaz/image/upload/v1682439893/assets/js_wmihuh.png"
              alt="JavaScript icon"
            />
          </abbr>
          <abbr title="HTML5">
            <img
              src="https://res.cloudinary.com/do7bnejaz/image/upload/v1682439893/assets/node-js-svgrepo-com_x6rv1r.svg"
              alt="Node.js icon"
            />
          </abbr>
          <abbr title="MongoDB">
            <img
              src="https://res.cloudinary.com/do7bnejaz/image/upload/v1682439893/assets/mongodb-logo-svgrepo-com_gemo78.svg"
              alt="MongoDB icon"
            />
          </abbr>
          <abbr title="HTML5">
            <img
              src="https://res.cloudinary.com/do7bnejaz/image/upload/v1682439893/assets/html5_n4srbi.png"
              alt="HTML5 icon"
            />
          </abbr>
          <abbr title="CSS3">
            <img
              src="https://res.cloudinary.com/do7bnejaz/image/upload/v1682439893/assets/css-3_hwlemu.png"
              alt="CSS3 icon"
            />
          </abbr>
          <abbr title="GitHub">
            <img
              src="https://res.cloudinary.com/do7bnejaz/image/upload/v1682438922/assets/github_fmllwl.png"
              alt="GitHub logo"
            />
          </abbr>
          <abbr title="Typescript">
            <img src="https://res.cloudinary.com/do7bnejaz/image/upload/v1682439352/assets/typescript_pptz1x.png" />
          </abbr>
          <abbr title="NextJS">
            <img src="https://res.cloudinary.com/do7bnejaz/image/upload/v1691422826/assets/nextjs_y1ebbc.png" />
          </abbr>
        </div>
        <div className="currently">
          <h3>Currently training</h3>
          <div className="technologies">
            <abbr title="Java">
              <img src="https://res.cloudinary.com/do7bnejaz/image/upload/v1691423081/assets/1366_2000_wkjndh.png" />
            </abbr>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
