import React, { useState } from 'react'
import './myworks.css'
import Api from './myworks.API'

const Myworks = () => {
    const [myData, setMyData] = useState(Api);
    return (
        <>
            <div className="myworksContainer">
                <div className="picContainer">
                    {
                        myData.map(function (elems) {
                            return (

                                <div className="picContainer1">
                                    <img className='iamimage' src={elems.imgSource} alt="image" />
                                </div>
                            );
                        })
                    }
                    <div className="picContainer2">

                    </div>
                </div>
            </div>
        </>
    )
}

export default Myworks
