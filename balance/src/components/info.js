import React from 'react';
import '../styles/info.css';

const Info = ({state, changeGameState, rightWeight, rightDistance, leftWeight, leftDistance}) =>
{

    return(
        <div className="menu">
            <div className='infoHolder'>
                <div className="leftSide">
                    <p>Left side weight: {leftWeight} kg</p>
                    <p>Left side distance from center: {leftDistance} m</p>
                </div>
                <div className="rightSide">
                    <p>Right side weight: {rightWeight} kg</p>
                    <p>Right side distance from center: {rightDistance} m</p>
                </div>
            </div>
            <button className="button" onClick={changeGameState}>{state? <p>Play</p> : <p>Pause</p>}</button>
        </div>
    )
}
export default Info;