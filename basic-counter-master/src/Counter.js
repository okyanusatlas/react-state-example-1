import React, {Component} from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState({count: ++this.state.count})
    };

    decrement = () => {
        this.setState({count: --this.state.count})
    };

    reset = () => {
        this.setState({count: 0})
    };

    render() {
        return (
          <section className="Counter">
              <h1>Count: {this.state.count}</h1>
              <button onClick={this.increment} className="full-width">Increment
              </button>
              <button onClick={this.decrement} className="full-width">Decrement
              </button>
              <button onClick={this.reset} className="full-width">Reset
              </button>
          </section>
        );
    }
}
