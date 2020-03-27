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
    }

    // When the state changes
    render() {
        console.log("render");
        return <button onClick={this.update}>{this.state.val}</button>;
    }

    // After mounting
    componentDidMount() {
        console.log("component did mount");
    }

    // When unmounting
    componentWillUnmount() {
        console.log("component will unmount");
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
