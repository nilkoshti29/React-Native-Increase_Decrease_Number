import React, { Component } from 'react';
import { Text, Button } from 'react-native';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state ={

      clicks: 0,
      show: true
    };
  }

  IncrementItem =() => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }

  ToggleClick =() => {
    this.setState({ show: !this.state.show });
  }

  render(){
    return(
      <div>
        <button onClick={this.IncrementItem}> Click to increment by 1 </button>
        <button onClick={this.DecreaseItem}> Click to decrease by 1 </button>
        <button onClick={this.ToggleClick}>
          
       <Text> {this.state.show ? 'Hide number' : 'show number'}</Text>
        </button>
       <Text>{this.state.show ? <h2>{ this.state.clicks }</h2> : ''}</Text> 
      </div>
    );
  }
}