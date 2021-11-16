import React, { useState } from 'react'
import './experiencePage.css'
import Detail from './details'
const ExperiencePage = () => {
    const [data, setData] = useState(Detail);
    return (
        <>
            <div className="main1">
                <div className="details1">
                    {/* starts here */}
                    {
                        data.map(function(curEL) {
                            return (
                                <div className="insideDetail1">
                                    <div className="pictureContainer1">
                                        <img className='toughImage' src={curEL.img} alt="image" />
                                    </div>
                                    <div className="name1">{curEL.name}</div>
                                    <div className="description1">
                                        {curEL.description}
                                    </div>
                                </div>
                            );
                        })
                    }


                    {/* ends here */}
                </div>
            </div>
        </>
    )
}

export default ExperiencePage
