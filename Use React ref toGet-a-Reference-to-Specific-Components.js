import React from "react";
import ReactDom from "react-dom";

class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    update() {
        this.setState({
            a: ReactDom.findDOMNode(this.a).value,
            b: this.b.refs.inputb.value
        });
    }

    render() {
        return (
            <div>
                <InputA
                    ref={component => (this.a = component)}
                    update={this.update.bind(this)}
                />{" "}
                {this.state.a}
                <hr />
                <InputB
                    ref={component => (this.b = component)}
                    update={this.update.bind(this)}
                />{" "}
                {this.state.b}
            </div>
        );
    }
}

class InputA extends React.Component {
    render() {
        return <input type="text" onChange={this.props.update} />;
    }
}

class InputB extends React.Component {
    render() {
        return (
            <div>
                <input ref="inputb" type="text" onChange={this.props.update} />
            </div>
        );
    }
}

export default App;
