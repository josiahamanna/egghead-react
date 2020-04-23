import React from "react";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Buttons>
          <button value="A">A</button>
          <button value="B">B</button>
          <button value="C">C</button>
        </Buttons>
      </div>
    );
  }
}

class Buttons extends React.Component {
  constructor() {
    super();
    this.state = { selected: "none" };
  }
  itemselected(selected) {
    this.setState({ selected });
  }
  render() {
    // these childern are just descriptors of themselves
    // we connot make any actions to them
    // we can only read from them
    // so, child.onClick don't work
    let fn = child =>
      React.cloneElement(child, {
        // remember here this.props.value won't be having anything
        // child.props.value has values
        onClick: this.itemselected.bind(this, child.props.value)
      });
    const items = React.Children.map(this.props.children, fn);
    console.log(items);
    return (
      <div>
        <h2>You have selected: {this.state.selected}</h2>
        {items}
      </div>
    );
  }
}

export default App;
