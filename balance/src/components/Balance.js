import React, {useState} from 'react';

import '../styles/balance.css';

import Info from './info';
import RandomObject from './RandomObject';
import RandomObjectLeft from './RandomObjectLeft';

const Balance = () =>
{
    const [gameState, setGameState] = useState(false);

    const [rightWeight, setReightWeight] = useState(0);
    const [rightDistance, setRightDistance] = useState(0);
    const [rightShape, setRightShape] = useState();

    const [leftWeight, setLeftWeight] = useState(0);
    const [leftDistance, setLeftDistance] = useState(0);
    const [leftShape, setLeftShape] = useState();
    const [leftTop, setLeftTop] = useState();

    const [bend, setBend] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    


    const changeGameState = () => 
    {
        setGameState(!gameState);
        setRightShape(shape);
        setReightWeight(randomWeight);
        setRightDistance(rightRights[rightRight()]);
        setLeftShape(shape);
        setLeftTop(100);
        setLeftDistance(100);
        setLeftWeight(randomWeight);
    }
    const rightRights = [400, 550, 470, 625, 700]

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
        var balance = leftWeight * leftDistance / rightWeight * rightDistance;
        
        if (balance === 1)
        {
            setBend(0);
        }
        else if (balance > 1 && 3 > balance)
        {
            setBend(-10);
        }
        else if (balance >= 3)
        {
            setBend(-30);
            // setGameOver(true);
            console.log('game over')
        }
        else if(balance < 1 && 0.3 < balance)
        {
            setBend(10);
        }
        else if(balance <= 0.3)
        {
            console.log('game over')
            setBend(30)
            // setGameOver(true);
        }
        console.log(bend)
    }

    const bendStyle=
    {
        transform: `skew(10deg, ${bend} deg)`
    }

    return(
        <div className="screen">
            <Info state={gameState} changeGameState={changeGameState} rightWeight={rightWeight} rightDistance={rightDistance} leftWeight={leftWeight} leftDistance={leftDistance}/>
            {!gameOver && 
            <div className="game-container">
                <div className="random-shape-container">
                    <RandomObject s={rightShape} w={rightWeight} right={rightDistance}/>
                    <RandomObjectLeft s={leftShape} w={leftWeight} left={leftDistance} top={leftTop} calculateBalance={calculateBalance}/> 
                </div>
                <div className="bar-container" style={bendStyle}>
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