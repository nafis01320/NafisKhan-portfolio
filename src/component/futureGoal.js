import React, { useState } from 'react'
import './futureGoal.css';
import FutureGoalApi from './futureGoalApi'
const FutureGoal = () => {
    const [futur, setFuture] = useState(FutureGoalApi);
    return (
        <>
            <div className="mother">
                <div className="first-mother">
                    <div className="first-mother-parent">
                        {
                            futur.map(function (presentEl) {
                                return (
                                    <div className="first-mother-parent-child">
                                        <div className="pictureEL"><img className='nafisImg' src={presentEl.image} alt="image" /></div>
                                        <p className="texts">{presentEl.detail}</p>
                                    </div>
                                );
                            })
                        }

                    </div>
                </div>
                <div className="second-mother">
                    <p className="richtext">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat aspernatur harum reiciendis officia voluptate mollitia ea quidem maxime minus corrupti? Quis, maiores? Reprehenderit laudantium voluptas impedit, exercitationem aspernatur est ex inventore consequuntur?</p>
                </div>
            </div>
        </>
    )
}

export default FutureGoal
