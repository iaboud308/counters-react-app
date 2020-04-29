import React, { Component } from 'react';



class Counter extends Component {

    render() {
        return (
            <div>
                <span className = 'badge badge-primary p-3 m-3 text-light font-weight-bold'> {this.props.counter.value} </span>

                <button className = 'btn btn-warning p-2 m-2 text-light font-weight-bold' onClick = {() => {
                    this.props.onIncrement(this.props.counter);
                }}>Increment</button> 

                <button className = 'btn btn-info p-2 m-2 text-light font-weight-bold' onClick = {() => {
                    this.props.onReset(this.props.counter.id);
                }}>Reset</button>

                <button className = 'btn btn-danger p-2 m-2 text-light font-weight-bold' onClick = {() => {
                    this.props.onDelete(this.props.counter.id);
                }}> Delete </button>
            </div>
        )

    }


}

export default Counter;