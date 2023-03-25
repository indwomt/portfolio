import React from 'react';

export default function About() {
    return (
        <div className="container about-parent">
            <div className="row about-content align-text-center">
                <div className="about-img col-6 align-text-center align-items-center d-flex justify-content-center">
                    <h3>Test</h3>
                </div>
                <div className="col-6">
                    <span className="about-text"> A web developer with a growth-mindset with a passion for collaboration and problem-solving.</span>
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