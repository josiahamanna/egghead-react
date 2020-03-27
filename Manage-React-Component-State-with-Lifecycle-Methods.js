import React from "react";
import ReactDom from "react-dom";

class App extends React.Component {
    constructor() {
        super();
        this.state = { val: 0 };
        this.update = this.update.bind(this);
    }

    update() {
        this.setState({ val: this.state.val + 1 });
    }

    // Before dom renders. Only once
    componentWillMount() {
        console.log("Component will mount");
        this.setState({ m: 2 });
    }

    // When the state changes
    render() {
        console.log("render");
        return (
            <button onClick={this.update}>{this.state.val * this.state.m}</button>
        );
    }

    // After mounting
    // You update state which in turn trugger render
    componentDidMount() {
        console.log("component did mount");
        console.log(ReactDom.findDOMNode(this));
        this.inc = setInterval(this.update, 500);
    }

    // When unmounting
    // clear the on going jobs
    componentWillUnmount() {
        console.log("component will unmount");
        clearInterval(this.inc);
    }
}

class Wrapper extends React.Component {
    mount() {
        ReactDom.render(<App />, document.getElementById("a"));
    }

    unmount() {
        ReactDom.unmountComponentAtNode(document.getElementById("a"));
    }

    render() {
        return (
            <div>
                <button onClick={this.mount.bind(this)}>mount</button>
                <button onClick={this.unmount.bind(this)}>unmount</button>
                <div id="a" />
            </div>
        );
    }
}
export default Wrapper;
