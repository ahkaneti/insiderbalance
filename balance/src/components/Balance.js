import React, { useState } from 'react';

import '../styles/balance.css';

import Info from './info';
import RandomObject from './RandomObject';
import RandomObjectLeft from './RandomObjectLeft';

const Balance = () =>
{
    const [gameState, setGameState] = useState(true);
    const [start, setStart] = useState(false);

    const [rightWeight, setReightWeight] = useState(0);
    const [rightDistance, setRightDistance] = useState(0);
    const [actualRight, setActualRight] = useState();
    const [rightShape, setRightShape] = useState();

    const [leftWeight, setLeftWeight] = useState(0);
    const [leftHorizontal, setLeftHorizontal] = useState(3);
    const [leftShape, setLeftShape] = useState();
    const [leftTop, setLeftTop] = useState();


    const [bend, setBend] = useState(0);
    const [barStyle, setBarStyle] = useState({
        transform: `skew(10deg, ${bend}deg)`
    });
    const [gameOver, setGameOver] = useState(false);
    const changeStartState = () => 
    {
        setStart(true);
        setGameState(!gameState);
        setRightShape(shape);
        setReightWeight(randomWeight);
        let rightVar = rightRight()
        setActualRight((rightVar + 1))
        setRightDistance(rightRights[rightVar]);
        setLeftShape(shape);
        setLeftTop(100);

        setLeftWeight(randomWeight);
    }
    const changeGameState = () => 
    {
        setGameState(!gameState);
    }
    const rightRights = [530, 455, 375, 295, 220]

    const shape = () => 
    {
        return Math.floor(Math.random() * 3);
    }
    const randomWeight = () =>
    {
        return Math.floor(Math.random() * 10) + 1; 
    }
    const rightRight = () =>
    {
        return Math.floor(Math.random() * 5)
    } 

    const calculateBalance = () =>
    {
        let balance = (leftWeight * leftHorizontal) / (rightWeight * actualRight);
        if (balance > 1)
        {
            setBend(balance* -10)
            let speed = -10/bend;
            setBarStyle({
                transition: `${speed}s`,
                transform: `skew(10deg, ${bend}deg)`
            })
        }
        else if(balance < 1)
        {
            setBend(balance * 10)
            let speed = 10/bend;
            setBarStyle({
                transition: `${speed}s`,
                transform: `skew(10deg, ${bend}deg)`
            })
        }
        if (balance >= 3 || balance <= 0.33)
        {
            setGameOver(true);
        }
        else
        {

        }
    }


    return(
        <div className="screen">
            <Info state={gameState} changeGameState={changeGameState} start={start} changeStartState={changeStartState} rightWeight={rightWeight} rightDistance={actualRight} leftWeight={leftWeight} leftHorizontal={leftHorizontal}/>
            {!gameOver&& start &&
            <div className="game-container">
                {start && <div className="random-shape-container">
                    <RandomObject s={rightShape} w={rightWeight} right={rightDistance} actualRight={actualRight}/>
                    <RandomObjectLeft s={leftShape} w={leftWeight} calculateBalance={calculateBalance} setLeftHorizontal={setLeftHorizontal} gameState={gameState} setGameState={setGameState} gameOver={gameOver}/> 
                </div>}
                <div className="bar-container" style={barStyle}>
                    <div className="bar"/>
                    <div className="bar"/>
                    <div className="bar"/>
                    <div className="bar"/>
                    <div className="bar"/>
                    <div className="bar"/>
                    <div className="bar"/>
                    <div className="bar"/>
                    <div className="bar"/>
                    <div className="bar"/>
                </div>
                <div className="balance-base"/>
            </div>}
        </div>
    )
}
export default Balance;