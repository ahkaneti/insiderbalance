import React, { useRef, useState, useEffect } from 'react';


import '../styles/randomobj.css';


const RandomObject = ({s, w,calculateBalance, setLeftHorizontal, gameState, gameOver}) => 
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
                if(horizontal < 600)
                {
                    console.log(horizontal)
                    let temp = horizontal + 75;
                    setHorizontal(temp)
                    setLeftHorizontal(Math.round(640 - temp/75) - 631)
                }
                break;
            case 37:
                if(horizontal > 320)
                {
                    console.log(horizontal)
                    let temp = horizontal - 75;
                    setHorizontal(temp)
                    setLeftHorizontal(Math.round(640 - temp/75) - 631)
                }
                break;
            default:
                return true
        }
    };

    useEffect(() => {
        let interval;
        if (!gameState && !gameOver)
        {
            if(top < 495) {
                interval = setInterval(() => {
                const newTop= top + 10;
                setTop(newTop);
            }, 300); } else {
                calculateBalance()
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
        transition: '1s', 
        height: `${w*10}px`, 
        width: `${w*10}px`
    }
    return (
        <div style={objectStyle} onKeyUp={onPressed} tabIndex="0">
            {renderShape()}
            {console.log(`${w}`)}
        </div>
    );
}

export default RandomObject;