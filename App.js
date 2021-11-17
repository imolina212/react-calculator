import React from "react";
import './App.css';
import Display from "./components/Display"
import Keypad from "./components/Keypad";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        display: "0",
        rV: [],
        operation: "",
    };
  }

  getPercent = () => {
    this.setState({
      display: `${Number(this.state.display) / 100}`,
      rV: Number(this.state.display) / 100,
      operation: '',
    })
  };

  flipSign = () => {
    this.setState({
      display: `${Number(this.state.display) * -1}`,
    })
  }

  multiply = (a, b) => a * b;

  divide = (a, b) => a / b;

  subtract = (a, b) => a - b;

  add = (a, b) => a + b;

  handleDecimal = () => {
    if (!this.state.display.includes('.')){    
      this.setState({
        display: this.state.display + '.'
      })
    }
  };

  reset = () => {
      this.setState({
      display: '0',
      rV: [],
      operation: "",
      });
  };

  evaluate = () => {
    const { display, rV, operation } = this.state;
    const result = this[operation](Number(rV), Number(display));
    this.setState({
      display: result,
    })  
  }

  handleNum = (event) => {
    this.setState({
      display: `${Number(this.state.display + event.target.value)}`
    })
  }

  selectOperand = (operand) => {
    this.setState({
      display:'0',
      rV:Number(this.state.display),
      operation:operand,
    })
  }

  render() {
    return (
      <div className="App">
        <Display display={this.state.display}/>
        <Keypad
          handleNum={this.handleNum}
          reset={this.reset}
          flipSign={this.flipSign}
          getPercent={this.getPercent}
          selectOperand={this.selectOperand}
          handleDecimal={this.handleDecimal}
          evaluate={this.evaluate}
        />
      </div>
    );
  }
  
}

export default App;
