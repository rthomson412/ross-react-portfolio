import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  const [projects] = useState([
    {
      name: 'upstarter',
      description: 'Tech oriented crowd-resourcing forum for creators, investors and contributors.',
      link: "https://polar-hamlet-70970.herokuapp.com/",
      repo: "https://github.com/rthomson412/upStarter"
    },
    {
      name: 'Much Better Dictionary',
      description: 'Search reccomendations, speech recognition and APIs for definitions and pictures.',
      link: "https://muchbetterdictionary.github.io/MuchBetterDictionary/",
      repo: "https://github.com/MuchBetterDictionary/MuchBetterDictionary"
    },
    {
      name: 'Developer Code Quiz',
      description: 'Test your dev knowledge with this simple format quiz. Uses Html,  Css and Javascript.',
      link: "https://rthomson412.github.io/Code-Quiz/",
      repo: "https://github.com/rthomson412/Code-Quiz"
    },
    {
      name: 'Workday Scheduler',
      description: 'Organize the events of your day and see what events have passed and are upcoming.',
      link: "https://rthomson412.github.io/Work-Day-Scheduler/",
      repo: "https://github.com/rthomson412/Work-Day-Scheduler"
    },
    {
      name: 'Weather Dashboard',
      description: 'Search and store your cities and retrieve a 5 day forecast as well as current conditions.',
      link: "https://rthomson412.github.io/weatherDash/",
      repo: "https://github.com/rthomson412/weatherDash"
    },
    {
      name: 'Password Generator',
      description: 'Quick and simple application to generate a random password, with the character types you choose.',
      link: "https://rthomson412.github.io/PasswordGenerator/",
      repo: "https://github.com/rthomson412/PasswordGenerator"
    },
  ]);

  