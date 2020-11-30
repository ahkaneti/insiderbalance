import React from 'react';
import '../styles/info.css';

const Info = ({state, changeGameState, rightWeight, rightDistance, leftWeight, leftHorizontal, start, changeStartState}) =>
{
    return(
        <div className="menu">
            <div className='infoHolder'>
                <div className="leftSide">
                    <p>Left side weight: {leftWeight} kg</p>
                    <p>Left side distance from center: {leftHorizontal} m</p>
                </div>
                <div className="rightSide">
                    <p>Right side weight: {rightWeight} kg</p>
                    <p>Right side distance from center: {rightDistance} m</p>
                </div>
            </div>
            {/* <button className="button" onClick={changeGameState}>
                {state? <p>Play</p> : <p>Pause</p>}
            </button> */}
            {start ? <button className='button' onClick={changeGameState}> 
                        {state ? <p>Play Game</p>: <p>Pause Game</p>}
                    </button> : 
                    <button className="button" onClick={changeStartState}>Start Game</button> 
            }
            

        </div>
    )
}
export default Info;