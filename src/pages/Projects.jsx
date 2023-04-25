import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-grid">
      <figure>
        <div className="text">
          <h3>NeoVet</h3>
          <p>
            Final bootcamp project. A CRM for veteriany clinics and pet owners,
            to ensure a direct management of pets health care and a good
            communication between the vet clinic and owners.
          </p>
        </div>
        <h4>Technologies:</h4>
        <div className="techs">
          <abbr title="ReactJS">
            <img
              src="https://res.cloudinary.com/do7bnejaz/image/upload/v1682439893/assets/logo-react-svgrepo-com_cxinj2.svg"
              alt="React icon"
            />
          </abbr>
          <abbr title="JavaScript">
            <img src="https://res.cloudinary.com/do7bnejaz/image/upload/v1682439893/assets/js_wmihuh.png" alt="JavaScript icon" />
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
            <img src="https://res.cloudinary.com/do7bnejaz/image/upload/v1682439893/assets/html5_n4srbi.png" alt="HTML5 icon" />
          </abbr>
          <abbr title="CSS3">
            <img src="https://res.cloudinary.com/do7bnejaz/image/upload/v1682439893/assets/css-3_hwlemu.png" alt="CSS3 icon" />
          </abbr>
        </div>
        <div className="links-pr">
          <h4>Links:</h4>
          <a href="https://tidal-cacao-a03.notion.site/NeoVet-6c0ae18d309848da94ad763f82bceefb">
            Documentation
          </a>
          <a href="https://github.com/virginia-zuror/_NeoVet_BackEnd">
            Backend repository
          </a>
          <a href="https://github.com/virginia-zuror/_NeoVet_FrontEnd">
            Frontend repository
          </a>
        </div>
      </figure>
      <figure>
        <div className="text">
          <h3>Marvel Project</h3>
          <p>
            You can consult every Marvel movie, choose to check the order of
            visualization according to the release date or cronologically, write
            your own comments in each movie, and read the comments that other
            users left in the web, also, collect your favorites movies in your
            profile.
          </p>
        </div>
        <h4>Technologies:</h4>
        <div className="techs">
          <abbr title="ReactJS">
            <img
              src="https://res.cloudinary.com/do7bnejaz/image/upload/v1682439893/assets/logo-react-svgrepo-com_cxinj2.svg"
              alt="React icon"
            />
          </abbr>
          <abbr title="JavaScript">
            <img src="https://res.cloudinary.com/do7bnejaz/image/upload/v1682439893/assets/js_wmihuh.png" alt="JavaScript icon" />
          </abbr>
          <abbr title="HTML5">
            <img src="https://res.cloudinary.com/do7bnejaz/image/upload/v1682439893/assets/html5_n4srbi.png" alt="HTML5 icon" />
          </abbr>
          <abbr title="CSS3">
            <img src="https://res.cloudinary.com/do7bnejaz/image/upload/v1682439893/assets/css-3_hwlemu.png" alt="CSS3 icon" />
          </abbr>
        </div>
        <div className="links-pr">
          <h4>Links:</h4>
          <a
            href="https://github.com/kareenadg/MARVEL_GROUP_project"
          >
            Repository
          </a>
        </div>
      </figure>
      <figure>
        <div className="text">
          <h3>Games Hub</h3>
          <p>
            You can play a selection of wellknown games, also you can consult a
            PokeAPI, login with your nickname and change the color of the
            website.
          </p>
        </div>
        <h4>Technologies:</h4>
        <div className="techs">
          <abbr title="JavaScript">
            <img src="https://res.cloudinary.com/do7bnejaz/image/upload/v1682439893/assets/js_wmihuh.png" alt="JavaScript icon" />
          </abbr>
          <abbr title="HTML5">
            <img src="https://res.cloudinary.com/do7bnejaz/image/upload/v1682439893/assets/html5_n4srbi.png" alt="HTML5 icon" />
          </abbr>
          <abbr title="CSS3">
            <img src="https://res.cloudinary.com/do7bnejaz/image/upload/v1682439893/assets/css-3_hwlemu.png" alt="CSS3 icon" />
          </abbr>
        </div>
        <div className="links-pr">
          <h4>Links:</h4>
          <a
            href=" https://neoland-hub-de-juegos.vercel.app/"
          >
            Deployed on Vercel
          </a>
          <a
            href="https://github.com/virginia-zuror/NEOLAND_Hub_de_Juegos"
          >
            Repository
          </a>
        </div>
      </figure>
    </div>
  );
};

export default Projects;
