import React from "react";

class Keypad extends React.Component {
    render() {
        return (
            <div className="keypad">
                <div>
                    <button id='ac' className="top-bar" onClick={this.props.reset}>AC</button>
                    <button id='flip' className="top-bar" onClick={this.props.flipSign}>±</button>
                    <button id='perc' className="top-bar" onClick={this.props.getPercent}>%</button>
                    <button id='divide' className="operands" onClick={() => this.props.selectOperand('divide')} value="/">÷</button>
                </div>
                <div>
                    <button id='seven' onClick={this.props.handleNum} value="7">7</button>
                    <button id='eight' onClick={this.props.handleNum} value="8">8</button>
                    <button id='nine' onClick={this.props.handleNum} value="9">9</button>
                    <button id='multiply' className="operands" onClick={() => this.props.selectOperand('multiply')} value="*">*</button>
                </div>
                <div>
                    <button id='four' onClick={this.props.handleNum} value="4">4</button>
                    <button id='five' onClick={this.props.handleNum} value="5">5</button>
                    <button id='six' onClick={this.props.handleNum} value="6">6</button>
                    <button id='subtract' className="operands" onClick={() => this.props.selectOperand('subtract')} value="-">-</button>
                </div>
                <div>
                    <button id='one' onClick={this.props.handleNum} value="1">1</button>
                    <button id='two' onClick={this.props.handleNum} value="2">2</button>
                    <button id='three' onClick={this.props.handleNum} value="3">3</button>
                    <button id='add' className="operands" onClick={() => this.props.selectOperand('add')} value="+">+</button>
                </div>
                <div className="bottom-row">
                    <button onClick={this.props.handleNum} className="zero-btn" id='zeroBtn' value="0">0</button>
                    <button onClick={this.props.handleDecimal} id='decimalBtn' value=".">.</button>
                    <button onClick={this.props.evaluate} className="operands" id='equalBtn' value="=">=</button>
                </div>
            </div>
        );
    }
}

export default Keypad;