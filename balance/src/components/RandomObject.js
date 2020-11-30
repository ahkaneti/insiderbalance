import React from 'react';


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
        bottom: '160px', 
        margin: '0px',
        height: `${w*10}px`, 
        width: `${w*10}px`
    }
    return (
        <div style={objectStyle}tabIndex="0">
            {renderShape()}
        </div>
    );
}

export default RandomObject;