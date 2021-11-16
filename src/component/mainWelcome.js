import React from 'react'
import img1 from './images/one.jpg'
import img2 from './images/two.jpg'

const MainWelcome = () => {
    return (
        <>
            <div className="welcomemsg">
                <p className='welcomemsgText'>Welcome</p>
                <p className="welcomemsgText text1">Myself Nafis!</p>
                <div className="images">
                    <div className="firstImg">
                        <img className='img1' src={img1} alt="image" />

                    </div>
                    <div className="firstImg">
                        <img className='img1' src={img2} alt="image" />

                    </div>
                </div>
                <div className="anotherText">

                    <p className="welcomemsgText text1 text2">I am a front-end developer! I am fond of learning something new. I never took course all I learnt by myself. Now I just need Experience of working in this field!</p>
                </div>
            </div>
        </>
    )
}

export default MainWelcome
