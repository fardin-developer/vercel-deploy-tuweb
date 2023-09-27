import React from 'react'
import './teams.css'


const Teams = () => {

    return (
        <div className="wrapper">
            {/* <i id="left" className="fa-solid fa-angle-left"> Swipe </i> */}
            <h1 className='title'>
                OUR TEAM
            </h1>
            <ul className="carousel">
                <li className="card">
                    <div className="img">
                        <img src="../assests/Abhinav.webp" alt="img" draggable="false" />
                    </div>
                    <h2>Abhinav Upadhyay</h2>
                    <span>GDSC Lead</span>
                </li>
                <li className="card">
                    <div className="img">
                        <img src="../assests/Sneh.webp" alt="img" draggable="false" />
                    </div>
                    <h2>Sneh Meend</h2>
                    <span>Management Lead</span>
                </li>
                <li className="card">
                    <div className="img">
                        <img src="../assests/Hrishita.webp" alt="img" draggable="false" />
                    </div>
                    <h2>Hrishita Bhuyan</h2>
                    <span>Design Lead</span>
                </li>
                <li className="card">
                    <div className="img">
                        <img src="../assests/Mugdha.webp" alt="img" draggable="false" />
                    </div>
                    <h2>Mugdha Saikia</h2>
                    <span>Content Lead</span>
                </li>
                <li className="card">
                    <div className="img">
                        <img src="../assests/Himangshu.webp" alt="img" draggable="false" />
                    </div>
                    <h2>Himangshu Lahkar</h2>
                    <span>Technical Lead</span>
                </li>
                <li className="card">
                    <div className="img">
                        <img src="../assests/Jyotishmoy.webp" alt="img" draggable="false" />
                    </div>
                    <h2>Jyotishmoy Deka</h2>
                    <span>Programming Lead</span>
                </li>
                <li className="card">
                    <div className="img">
                        <img src="../assests/Debarshi.webp" alt="img" draggable="false" />
                    </div>
                    <h2>Debarshi Sonowal</h2>
                    <span>Development Lead</span>
                </li>
            </ul>
            

        
        </div>

        
    )
}

export default Teams