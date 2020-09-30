import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

class Counter extends Component {
   
    // handelCounterChange = (newValue) => {
    //     this.props.onCounterChange(newValue);
    // }

    // handelPlus = () => {
    //     this.setState({
    //         order: this.state.order += 1
    //     }, () => {
    //         this.handelCounterChange(this.state.order);
    //     });

    // }

    // handelMin = () => {
    //     if(this.state.order > 0){
    //         this.setState({
    //             order: this.state.order -= 1
    //         }, () => {
    //             this.handelCounterChange(this.state.order);
    //         });
    //     } 
    // }

    render(){
        console.log(this.props);
        return(
            <div className='counter'>
                <button className='plus' onClick={this.props.handelPlus}>+</button>
                <input type="text" value={this.props.order} className='value'/>
                <button className='minus' onClick={this.props.handelMinus}>-</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlePlus: () => dispatch({type: 'PLUS_ORDER'}),
        handleMinus: () => dispatch({type: 'MINUS_ORDER'}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);