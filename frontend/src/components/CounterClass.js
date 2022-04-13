import React from "react";

class CounterClass extends React.Component{
    constructor(){
        super();
        this.state = {
            number: 0
        }
    }

increment(){
    this.increment = this.increment.bind(this)
    this.setState({
        number: ++this.state.number
    })
}


    render(){
        return(
        <div>
<h1>Counter = {this.state.number}</h1>
<button onClick={this.increment}>Increment</button>
        </div>
        )
    }
}

export default CounterClass;
