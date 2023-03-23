import React from 'react';
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'

export default function Landing() {

    return (
        <div className="landing jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Hi, I'm Lauren Bentley.</h1>
    <h3 className="display-9">I'm a fullstack developer.</h3>
    <p className='display-9'>Check me out.</p>
  </div>
  <div className='container landing-links'>
    <img className= "landing-btn" src={github}></img>
    <img className= "landing-btn" src={linkedin}></img>
  </div>
</div>
    )

}