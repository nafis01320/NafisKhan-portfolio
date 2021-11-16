import React from 'react'
import { Link } from 'react-router-dom'
import './menu.css'
import Footer from './footer'
// import GitHubIcon from '@mui/icons-material/GitHub';
const Menu = () => {
    return (
        <>
            <div className="father">
                <div className="main">
                    <div className="container">
                        <p className="text"><Link className='LinkBtn' to='/'>NAFIS</Link></p>
                        <div className="links">
                            {/* <button className="btn">Contact me</button> */}
                            <button className="btn"><Link className='LinkBtn' to='/experience'>experience</Link></button>
                            <button className="btn">Future Goal</button>
                            <button className="btn"><Link className="LinkBtn" to='/works'>My-Works</Link></button>
                        </div>
                        <div className="socialMedia">
                            {/* <GitHubIcon /> */}
                            <button className="menuBtn">Contact</button>
                            <div className="menuBar">
                                <a href="https://www.facebook.com/profile.php?id=100009292766958" target='blank' className='linkBtn'>facebook</a>
                                <a href="https://github.com/nafis01320" target='blank' className='linkBtn'>GitHub</a>
                                <a href="https://www.instagram.com/itzz_nafis_21/" target='blank' className='linkBtn linkBtninstagram'>instagram</a>
                            </div>
                        </div>
                    </div>

                </div>



                <div className="fancyPic">
                  <img className='fancyPicImg' src="./allImage/coding-image.jpg" alt="image" />
                </div>
            </div>
            <Footer />

        </>
    )
}

export default Menu
