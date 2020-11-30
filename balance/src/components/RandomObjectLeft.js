import React, { useRef, useState, useEffect, useCallback } from 'react';


import '../styles/randomobj.css';


const RandomObject = ({s, w,calculateBalance, setLeftHorizontal, gameState,setGameState, gameOver}) => 
{
    const element = useRef();
    const [top, setTop] = useState(205);
    const [horizontal, setHorizontal] = useState(360)
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
    const onPressed = useCallback(e => {
        switch (e.keyCode) {
            case 39:
                if(horizontal < 615)
                {
                    console.log(horizontal)
                    let temp = horizontal + 85;
                    setHorizontal(temp)
                    setLeftHorizontal(Math.round(640 - temp/75) - 631)
                }
                break;
            case 37:
                if(horizontal > 155)
                {
                    console.log(horizontal)
                    let temp = horizontal - 85;
                    setHorizontal(temp)
                    setLeftHorizontal(Math.round(640 - temp/75) - 631)
                }
                break;
            default:
                return true
        }
    }, [horizontal, setLeftHorizontal]);

    useEffect(() => {
        let interval;
        if (!gameState && !gameOver)
        {
            let i = 0;
            console.log(i = i + 1)   
            interval = setInterval(() => 
            {
                    setTop(prev =>{
                        if(prev < 485)
                        { return prev + 10 } 
                        else 
                        {
                            console.log('hi')
                            calculateBalance();
                            setGameState(prev => !prev)
                            return prev;
                        }
                    })
                
            }, 300); 
            document.addEventListener("keydown", e => onPressed(e));
            return () => clearInterval(interval);
        }
    }, [gameState, gameOver, calculateBalance, onPressed, setGameState]);

    const objectStyle = 
    {
        position: 'absolute',
        top: `${top}px`,
        left: `${horizontal}px`,
        fontSize: '15px', 
        bottom: '', 
        margin: '0px', 
        transition: '1s', 
        height: `${20+(w-1)*8}px`, 
        width: `${20+(w-1)*8}px`
    }
    return (
        <div style={objectStyle} onKeyUp={onPressed} tabIndex="0">
            {renderShape()}
            {console.log(`${w}`)}
        </div>
    );
}

export default RandomObject;