import './navbar.css'

import { cursorTo } from 'readline';

const Navbar = () => {
    return (
        <>
            <div className='nav'>
                <div className="left">
                    {/* <img src="/assests/navbar/logo.png"  alt="" /> */}
                    <div className="logo">
                        <img src="/assests/navbar/singleLogo.png" alt="" />
                    </div>
                    <div className="logoText">
                        <div className="heading">
                            <p>Google Developer Student Club</p>
                        </div>

                        <div className="subHeading">
                            <p>Tezpur University</p>
                        </div>
                    </div>
                </div>

                <div className="right">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Team</a></li>
                    <li><a href="/">Explore Us</a></li>
                    <li><a href="/">Videos</a></li>
                    <li><a href="/">Core</a></li>



                </div>
                <div className="menu">
                </div>

            </div>
        </>

    )
}

export default Navbar
