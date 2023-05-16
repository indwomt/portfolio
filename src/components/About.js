import React from 'react';
import headshot from '../assets/headshot.jpg'

export default function About() {
    return (
        <div id="about"className="container about-parent">
            <div className="row about-content align-text-center">
                <h2 className='about-header'>About</h2>
                
                <div className="about-img col-md-6 col-sm-12 align-text-center align-items-center d-flex justify-content-center">
                    <img className='headshot'src={process.env.PUBLIC_URL + '/' + headshot}></img>
                </div>
                <div className="col-md-6 col-sm-12">
                    <span className="about-text"> A web developer with a growth-mindset and a passion for collaboration and problem-solving.</span>
                    <br></br>
                    <br></br>
                    <span className=" about-text">Currently, I am a business manager at <a alt='I made this site!'href="#">Westchester Wags Co</a> where I oversee administration and technical solutions with a focus on increasing web presence and scalability.</span>
                    <br></br>
                    <br></br>
                    <span className=" about-text">Previously, I've worked with the National Park Service as a Facility Management Systems Specialist, Fee Technician, and Interpretive Park Ranger. </span>
                </div>
            </div>

        </div>
    )
}