import React, {Component} from 'react';
import Counter from './Counter';
import sapi from '../product/sapi.jpg';

class CardProduct extends Component {

    render() {
        return(
            <div className='card'>
                <img src={sapi} width='90%'></img>
                <p className='title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia mollitia pariatur quos in quibusdam reiciendis error, et vero aut, nesciunt obcaecati reprehenderit tempore quisquam sit dicta debitis architecto facere consequuntur.</p>
                <p className='price'>Rp. 34.000</p>
                <Counter onCounterChange={(value) => this.props.onCounterChange(value)}/>
            </div>
        );
    }
}

export default CardProduct;