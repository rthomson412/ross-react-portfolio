import React from 'react';
import scotlandImage from '../../assets/images/scotland.jpg';

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
        <img src={scotlandImage} alt="psychadelic"></img>
        </div>
        <p>
          Born and raised in Glasgow, Scotland and now based in
          Brooklyn, New York. I am currently pursuing a career
          change, via a full-stack software development bootcamp
          offered by Columbia University.
        </p>
        <p>
          I have already gained experience with both front-end and back-end
          enginnering, and am currently embarking on learning the computer science
          that underpins the full stack.
        </p>
        <p>
          My academic background is in humanities and philosophy, and I currently work in hospitality.
          Specifically, I work with natural wines, and take great pleasure in
          facilitating and imparting the joys that abound the world of wine.
        </p>
      </div>
    </section>
  );
}

export default About;
