import React, {useState} from 'react';

import '../styles/balance.css';

import Info from './info';

const Balance = () =>
{
    const [game, changeGame] = useState(false);

    const [rightWeight, setReightWeight] = useState(0);
    const [rightDistance, setRightDistance] = useState(0);

    const [leftWeight, setLeftWeight] = useState(0);
    const [leftDistance, setLeftDistance] = useState(0);


    function changeGameState()
    {
        console.log(changeGameState);
    }

    return(
        <div className="screen">
            <Info state={game} rightWeight={rightWeight} rightDistance={rightDistance} leftWeight={leftWeight} leftDistance={leftDistance}/>
            <div className="game-container">
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
                <div className="balance-base"/>
            </div>
        </div>
    )
}
export default Balance;