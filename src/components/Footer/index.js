import React from 'react';

function Footer() {

  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/rthomson412"
    },
    {
      name: "fab fa-envelope",
      link: "mailto:rthomson412@gmail.com"
    },
    {
      name: "fab fa-youtube",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
  ]

  
  return (
    <footer className="flex-row px-1">
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
        )}
    </footer>
  );
}

export default Footer;