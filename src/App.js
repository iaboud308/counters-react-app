import React, { Component } from 'react';
import Counter from './Components/Counter';
import Navbar from './Components/Navbar';
import './App.css';


class App extends Component {

  constructor() {
    super();
    this.state = {
      counters: [
        {id: 0, value: 0},
        {id: 1, value: 0},
        {id: 2, value: 0},
        {id: 3, value: 0}
      ]
    }
    // this.onIncrement = this.onIncrement.bind(this);
    // this.resetValues = this.resetValues.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

    handleIncrement =  (counter) => {
    let newCounters = [...this.state.counters];
    newCounters[counter.id] = {...counter};
    newCounters[counter.id].value++;
    this.setState( { counters: newCounters })
  }

  handleReset = (id) => {
    let newCounters = this.state.counters;
    newCounters[id].value = 0;
    this.setState({ counters: newCounters })
  }

  handleDelete (id) {
    let newCounters = this.state.counters.filter( (counter) => {
      if (counter.id === id) {
        return false
      } else {
        return true
      }
    })
    this.setState({ counters: newCounters })
  }

  getTotalValue() {
    let total = 0;
    this.state.counters.forEach( (counter) => {
      total += counter.value;
    })
    return total;
  }

  
  render() {
    return (
    <div>
      <Navbar total = {this.getTotalValue()}/>
      {this.state.counters.map( (counter, index) => {
        return (<Counter 
            key = {index} 
            counter = {counter} 
            onIncrement = {this.handleIncrement} 
            onReset = {this.handleReset} 
            onDelete = {this.handleDelete}
        />)
      })}
    </div>
    );
  }

}


export default App;
