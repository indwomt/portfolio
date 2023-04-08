import React, { useState } from "react";
import Cards from '../components/cards'

import oopScreenshot from '../assets/OOP-screenshot.PNG';
import dayInLifeScreenshot from '../assets/day-in-life-screenshot.PNG';
import marsScreenshot from '../assets/mars-screenshot.PNG';
import readmeGeneratorScreenshot from '../assets/readme-generator.PNG';



const projects = [
    {
        id: 0,
        title: "Team Generator || OOP",
        image: {oopScreenshot},
        description: "Allows users to create employee profiles through Node.js, Inquirer package, and OOP concepts.",
        repo:"github.com/indwomt/OOP-team-generator"
    },

    {
        id: 1,
        title: 'Day in the Life',
        image:{dayInLifeScreenshot},
        description:'A full stack application that uses Express, Node, MySQL, and Handlebars. Users can create an account, make posts, and comment on other posts made by other users'
    },

    {
        id: 2,
        image: {marsScreenshot},
        title: "Coding the Cosmos",
        description: "Users can look up mars rover photos from "
    },

    {
        id: 3,
        image: '../assets/readme-generator.PNG',
        title: "README.md Generator"
    }
]
  
export default function Portfolio() {
    return (
      <div>
        
        <p className="content is-medium">Portfolio</p>
        <hr />
  <div class='d-flex'>
        <Cards projects={projects} />
      </div>
      </div>
    );
  }
  
