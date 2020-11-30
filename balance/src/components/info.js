import React from 'react';
import '../styles/info.css';

const Info = (state, changeGameState, rightWeight, rightDistance, leftWeight, leftDistance) =>
{

    return(
        <div className="menu">
            <div className='infoHolder'>
                <div className="leftSide">
                    <p>Left side weight:{leftWeight}</p>
                    <p>Left side distance from center:{leftDistance}</p>
                </div>
                <div className="rightSide">
                    <p>Right side weight:{rightWeight}</p>
                    <p>Right side distance from center:{rightDistance}</p>
                </div>
            </div>
            <button className="button" >{state? <p>Play</p> : <p>Pause</p>}</button>
        </div>
    )
}
export default Info;