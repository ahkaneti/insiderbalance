import React, { useRef, useState, useEffect } from 'react';


import '../styles/randomobj.css';


const RandomObject = ({s, w,calculateBalance, leftHorizontal, setLeftHorizontal, gameState}) => 
{
    const element = useRef();
    const [top, setTop] = useState(205);
    const [horizontal, setHorizontal] = useState(470)
    const renderShape = () => 
    {
        switch(s) {
            case 0: 
                return <div className="triangle" ref={element}> <p className="weight-text">{w}</p> </div>;
            case 2:
                return <div className="square" ref={element}> {w} </div>;
             default: 
             return <div className="circle" ref={element}> {w} </div>;
        }
        
    };
    const onPressed = e => {
        switch (e.keyCode) {
            case 39:
                setHorizontal(horizontal + 75)
                setLeftHorizontal(horizontal)
                break;
            case 37:
                setHorizontal(horizontal - 75);
                break;
            default:
                return true
        }
    };

    useEffect(() => {
        let interval;
        if (!gameState)
        {
            if(top < 495) {
                interval = setInterval(() => {
                const newTop= top + 10;
                setTop(newTop);
            }, 300); } else {
                setLeftHorizontal((Math.round(horizontal/75) - 3));
                console.log((Math.round(horizontal/75) - 3) + 'hiya');
                calculateBalance();
            }
            document.addEventListener("keydown", e => onPressed(e));
            return () => clearInterval(interval);
        }
    });

    const objectStyle = 
    {
        position: 'absolute',
        top: `${top}px`,
        left: `${horizontal}px`,
        fontSize: '15px', 
        bottom: '', 
        margin: '0px', 
        transition: '1'
    }
    return (
        <div style={objectStyle} onKeyDown={onPressed} tabIndex="0">
            {renderShape()}
        </div>
    );
}

export default RandomObject;