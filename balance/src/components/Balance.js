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
    const [leftHorizontal, setLeftHorizontal] = useState(0);
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
        setBend(0)
        setActualRight((rightVar + 1))
        setRightDistance(rightRights[rightVar]);
        setLeftShape(shape);
        setLeftTop(100);
        setLeftHorizontal(100);
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
        var balance = (leftWeight * actualRight )/ (rightWeight * actualRight);
        console.log(`${leftWeight} * ${actualRight}/ ${rightWeight} * ${actualRight}`);
        if (balance === 1)
        {
            console.log('hi my name is')
            setBend(0);
            setBarStyle({
                transform: `skew(10deg, ${bend}deg)`
            })

        }
        else if (balance > 1 && 3 > balance)
        {
            setBend(-10);
            setBarStyle({
                transform: `skew(10deg, ${bend}deg)`
            })

        }
        else if (balance >= 3)
        {
            setBend(-30);
            setBarStyle({
                transform: `skew(10deg, ${bend}deg)`
            })

            // setGameOver(true);
        }
        else if(balance < 1 && 0.3 < balance)
        {
            setBend(10);
            setBarStyle({
                transform: `skew(10deg, ${bend}deg)`
            })

        }
        else if(balance <= 0.3)
        {
            setBend(30)
            setBarStyle({
                transform: `skew(10deg, ${bend}deg)`
            })
            // setGameOver(true);
        }
        console.log(bend + ' interesting')
    }


    return(
        <div className="screen">
            <Info state={gameState} changeGameState={changeGameState} start={start} changeStartState={changeStartState} rightWeight={rightWeight} rightDistance={actualRight} leftWeight={leftWeight} leftHorizontal={actualRight}/>
            {!gameOver && start &&
            <div className="game-container">
                <div>
                <div className="random-shape-container">
                    <RandomObject s={rightShape} w={rightWeight} right={rightDistance}/>
                    <RandomObjectLeft s={leftShape} w={leftWeight} leftHorizontal={leftHorizontal} top={leftTop} calculateBalance={calculateBalance} setLeftHorizontal={setLeftHorizontal} gameState={gameState}/> 
                </div>
                <div className="bar-container">
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
                </div>
                <div className="balance-base"/>
            </div>}
        </div>
    )
}
export default Balance;