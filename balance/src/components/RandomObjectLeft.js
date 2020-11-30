import React, { useRef, useState, useEffect } from 'react';


import '../styles/randomobj.css';


const RandomObject = ({s, w, onKeyDown, right, left, barOffsetTop, calculateBalance}) => 
{
    const element = useRef();
    const [top, setTop] = useState();
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
                left = left + 55;
                console.log(right + 'right')
                break;
            case 37:
                left = left - 55;
                console.log(left + 'left')
                break;
            default:
                return true
        }
    };

    useEffect(() => {
        let interval;
        if(top + 90 < barOffsetTop -50) {
         interval = setInterval(() => {
                const newTop= top + 10;
                setTop(newTop);
        }, 300); } else {
            calculateBalance();
        }
        document.addEventListener("keydown", e => onPressed(e));
        return () => clearInterval(interval);
    });

    const objectStyle = 
    {
        position: 'absolute',
        top: `${top}px`,
        right: `30%`,
        left: `${left}px`,
        fontSize: '15px', 
        bottom: '', 
        margin: '0px', 
        display: 'contents'
    }
    return (
        <div style={objectStyle} onKeyDown={onPressed} tabIndex="0">
            {renderShape()}
        </div>
    );
}

export default RandomObject;