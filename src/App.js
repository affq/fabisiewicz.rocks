import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const links = {
  "github": {
    logo: 'github-mark-white.png',
    link: 'https://www.github.com/affq'
  },
  "instagram": {
    logo: 'Instagram_Glyph_White.png',
    link: 'https://www.instagram.com/afabisiewicz/'
  },
  "linkedin": {
    logo: '/In-White-128@2x.png',
    link: 'https://www.linkedin.com/in/fabisiewicz/'
  }
}

const LinkComponent = ({ name, logo, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <img src={logo} alt={`${name} logo`} class="logo-img" />
  </a>
);

const LinksList = () => (
  <div>
    <div class="logo-row">
      {Object.keys(links).map(key => (
        <div class="logo-item">
          <LinkComponent
            key={key}
            name={key}
            logo={links[key].logo}
            link={links[key].link}
          />
        </div>
      ))}
    </div>
  </div>
);

function App(){
  useEffect(() => {
    document.title = "Ad";
  }, []); 

  return (
    <div class="app">
      <div class="container">
        <div class="row">
          <div class="name">
            <h1>Adrian <span class="head-surname">Fabisiewicz</span></h1>
          </div>
        </div>
        <LinksList />
        <div class="project">
        <Link to="/projects" class="projects-link">projekty</Link>
        </div>
      </div>

    <footer>
    </footer>
  </div>
  );
}

export default App;
