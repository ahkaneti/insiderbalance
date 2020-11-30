import React from 'react';


import '../styles/randomobj.css';


const RandomObject = ({s, w, right, actualRight}) => 
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
        right: `${83+ (5 - actualRight) * 110 + w}px`,
        fontSize: '15px', 
        bottom: '160px', 
        margin: '0px',
        height: `${20 + ((w - 1) * 7)}px`, 
        width: `${20 + ((w - 1) * 7)}px`, 
    }
    const triangleStyle=
    {
        position: 'absolute',
        right: `${83+ (5 - actualRight) * 110}px`,
        fontSize: '15px', 
        bottom: '160px', 
        margin: '0px',
        height: 'auto',
        width: 'auto',
    }
    return (
        <div style={s === 0 ? triangleStyle:objectStyle}tabIndex="0">
            {renderShape()}
        </div>
    );
}

export default RandomObject;