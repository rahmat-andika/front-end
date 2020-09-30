import React, {Component, Fragment} from 'react';
import './Product.css';
import CardProduct from '../CardProduct/CardProduct';

class Product extends Component {
    state = {
        order: 4
    }

    handelCounterChange = (newValue) => {
        this.setState({
            order: newValue
        });
    }

    render(){
        return(
                <Fragment>
                    <div className='header'>
                        <p>logo</p>
                        <div className='count'>{this.state.order}</div>
                    </div>
                    <CardProduct onCounterChange={(value) => this.handelCounterChange(value)}/>
                </Fragment>
        );
    }
}

export default Product;