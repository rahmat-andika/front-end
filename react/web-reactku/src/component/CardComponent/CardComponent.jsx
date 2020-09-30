import React from 'react';
import bg from './bg.jpeg';
import './CardComponent.css';

const CardComponent = (props) => {
    return (
        <div className='container'>
            <div className='content'>
                <p>title : {props.title}</p>
                <img src={bg} width='150px'></img>
                <p>duration : {props.time}</p>
            </div>
        </div>
    );
}

CardComponent.defaultProps = {
    time: '00.00',
    title: 'default'
}

export default CardComponent;