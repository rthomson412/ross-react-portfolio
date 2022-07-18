import React from 'react';

function Footer() {

  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/rthomson412"
    },
    {
      name: "fas fa-envelope",
      link: "mailto:rthomson412@gmail.com"
    },
    {
      name: "fab fa-youtube",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
  ]

  
  return (
    <footer className="flex-row px-1">
        <div class="container text-secondary text-center py-3 mt-5">
        <h5>
          &copy; 2022 |
          <a class="text-secondary text-decoration-none" href="#about"
            >Ross Thomson</a
          >
        </h5>
      </div>
      <div class="container text-secondary text-center py-3 mt-5">
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
        )}
        </div>
    </footer>
  );
}

export default Footer;