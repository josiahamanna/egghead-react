/* this is to understand when we children to parent component
   inside the parent component how to get to know all the childrens */

import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        <Parent>
          <div className="ClassA" />
          <div className="ClassB" />
        </Parent>
      </div>
    );
  }
}

class Parent extends React.Component {
  render() {
    console.log("this.props.children", this.props.children);
    console.log("React.children", React.Children);
    // Can't put brackets around this.props.childer and child.
    // throws an error telling binding a expression21
    React.Children.forEach(this.props.children, child => {
      console.log("child", child.props.className);
    });
    const items = React.Children.toArray(this.props.children);
    console.log("items", items);
    // this will only work if the parent has only one child
    // const elements = React.Children.only(this.props.children);
    // console.log("Using React.Children.only(this.props.children", elements);
    return null;
  }
}

export default App;
