import React from 'react';
import { useNavigate } from 'react-router-dom';

const Instruct = () => {


  const navigate = useNavigate();
  const loginUser = async(e) =>{
    e.preventDefault();

    {
      navigate("/Game");
    }
    
  }

 

  return <>
    <div class="background">
      <div class="container">
        <div class="screen">
        
          <div class="screen-body">

            <div class="screen-body-item">
              <div class="app-form" style={{color:"white"}}>
              <h1 class="display-5" style={{fontSize:70, alignItems:'center', justifyContent:'center', display:'flex' }}>INSTRUCTIONS</h1>
                <br />
                <div style={{fontWeight:700}}>
              <p> 1. Find the character/house name of Harry Potter.</p>
              <p> 1. 6 DEAD - ENDS!</p>
              <p> 2. Must familiar with Harry Potter Characters.</p>
              <p> 3. Wrong alphabets will be updated on wrong section.</p>
              </div>
              <div class="col-xxl-12 text-center my-5">
                <a href="Blue Simple Class Schedule.pdf" target="_blank">
                <p className='play'>
              <button style={{fontSize: 40}}  type="button" class="btn btn-outline-light" onClick={loginUser}>PLAY! </button></p>
                </a>  
              </div>
            </div>   
          </div>
        </div>
        
      </div>
    </div>

    </div>
  

  </>;
};

export default Instruct;
