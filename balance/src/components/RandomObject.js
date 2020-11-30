import React, {useState, useRef} from 'react';


const RandomObject = ({s, w, top, right, onKeyDown, left}) => 
{

    const element = useRef();
    const renderShape = () => 
    {
        switch(s) {
            case 1: 
                return <div classame="triangle" ref={element}> <div className="weightText"> {w} </div> </div>;
            case 2:
                return <div classame="square" ref={element}> <div className="weightText"> {w} </div> </div>;
             default: 
                return <div classame="circle" ref={element}> <div className="weightText"> {w} </div> </div>;
        }
    };
    const objectStyle = 
    {
        position: 'absolute',
        top: `${top}px`,
        right: `${right}px`,
        left: `${left}px`,
        fontSize: '15px', 
        bottom: 0
    }
}

export default RandomObject;