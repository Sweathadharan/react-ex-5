import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  Increment = () => {
    this.setState({ value: this.state.value + 1 });
  };

  Decrement = () => {
    if (this.state.value > 0) {
      this.setState({ value: this.state.value - 1 });
    } else {
      this.setState({ value: 0 });
    }
  };

  Reset = () => {
    this.setState({ value: 0 });
  };

  render() {
    return (
      <div className="count">
        <h1>Counter: {this.state.value}</h1>
        <button onClick={this.Increment}>Increment</button>
        <button onClick={this.Decrement}>Decrement</button>
        <button onClick={this.Reset}>Reset</button>
      </div>
    );
  }
}

export default Counter;
