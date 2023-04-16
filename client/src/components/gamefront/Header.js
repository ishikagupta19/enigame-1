import React from 'react';
import hp from "../img/hp.png"

const Header = () => {
  return (
    <>
    <br/>
    <div className='heading' >
    {/* HP text */}
    <img src={hp} alt='hp'/>
      </div>
      <h1 style={{color:"white"}}>Hangman</h1>
      <p style={{color:"white"}}>Find the hidden word from the HP</p>
    </>
  );
};

export default Header;
