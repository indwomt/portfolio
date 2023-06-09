import React from 'react';
// import github from '../assets/github.svg'
// import linkedin from '../assets/linkedin.svg'
// import landingSVG from '../assets/landingdisplay.svg'

export default function Landing() {

    return (
      <div className="landing jumbotron jumbotron-fluid d-flex justify-content-center">
  <div className="container-fluid left d-flex mx-4 align-items-start">
    
    <div className="container-fluid d-flex-col col-6 jumboleft ">
      <h1 className="display-4">Hi, I'm Lauren Bentley.</h1>
      <h3 className="display-9">I'm a full stack developer.</h3>
      <p className='display-9'>Check me out.</p>
    </div>
    <div className='svg col-6'>
      {/* <img width='800px' height='500px'src={landingSVG}></img> */}
    </div>
  </div>
</div>



    )

}