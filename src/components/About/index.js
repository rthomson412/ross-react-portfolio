import React from 'react';
import scotlandImage from '../../assets/images/scotland.jpg';

function About() {
  return (
    <div className="main-container container">
      <div className="row main_row">
        <div className="col-6">
          <h2 className="text-white">Hello there, I'm</h2>
          <h1 className="text-warning m-heading">Ross Thomon</h1>
          <h2 className="text-white">Web Developer</h2>

        </div>
      </div>

      <div id="about" className="container about p-5">
        <div className="row">
          <div className="col-6">
            <br />
            <br />
            <img src={scotlandImage} alt="psychadelic" className="img-fluid"></img>
          </div>
          <div className="col-6 pl-5 pt-5 pb-5 text-white">
            <h3 className="text-warning">About Me</h3>
            <h1 className="m-heading">Non-essential worker</h1>
            <p>
              Born and raised in Glasgow, Scotland and now based in
              Brooklyn, New York. I am currently pursuing a career
              change, via a full-stack software development bootcamp
              offered by Columbia University.
            </p>
            <br />
            <p>
              I have already gained experience with both front-end and back-end
              enginnering, and am currently embarking on learning the computer science
              that underpins the full stack.
            </p>
            <br />
            <p>
              My academic background is in humanities and philosophy, and I currently work in hospitality.
              Specifically, I work with natural wines, and take great pleasure in
              facilitating and imparting the joys that abound the world of wine.
            </p>
          </div>
        </div>
      </div>
      </div>

      );
      }

      export default About;
