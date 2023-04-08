import React from 'react';
import resume from '../assets/BENTLEYResume.pdf'


export default function Resume() {
    return (
        <div className="container">
            <div className='resume container d-flex-col align-items-center justify-content-center col-12'>
            <h2 className="resume-header align-self-start">Resume</h2>
            
            <h3>Want to know more about my career?</h3>
            <a href={resume}>Resume</a>
            </div>

        </div>
    )
}