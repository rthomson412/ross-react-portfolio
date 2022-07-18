import React from 'react';
import coverImage from '../../assets/cover/cover.jpg';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      {/* <h1>Ross Thomson</h1> */}
      {/* <img src={coverImage} alt="psychadelic"></img> */}
      {props.children}
    </header>
  );
}

export default Header;
