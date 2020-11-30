import React, { useEffect, useRef } from 'react';


import '../styles/randomobj.css';


const RandomObject = ({s, w, right, left}) => 
{
    const renderShape = () => 
    {
        switch(s) {
            case 0: 
                return <div className="triangle"> <p className="weight-text">{w}</p> </div>;
            case 2:
                return <div className="square"> {w} </div>;
             default: 
                return <div className="circle"> {w} </div>;
        }
        
    };

    const objectStyle = 
    {
        position: 'absolute',
        right: `${right}px`,
        fontSize: '15px', 
        bottom: '', 
        margin: '0px'
    }
    return (
        <div style={objectStyle}tabIndex="0">
            {renderShape()}
        </div>
    );
}

export default RandomObject;