/**
* Use the in browser CDN for babel transpiler
https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js
**/

import React from "react";
import "./styles.css";

// Babel transpiling
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      err: "",
      output: "",
      input: "/** put here jsx here ***/"
    };
  }
  update(e) {
    let code = e.target.value;
    try {
      this.setState({
        // this is coming from the Babel object which you have CDN'ed
        output: window.Babel.transform(code, { presets: ["es2015", "react"] })
          .code,
        err: ""
      });
    } catch (err) {
      this.setState({ err: err.message });
    }
  }
  render() {
    return (
      <div>
        {/** Show the errors in the header */}
        <header>{this.state.err}</header>
        <div classname="container">
          {/* place for input. write jsx here */}
          <textarea
            onChange={this.update.bind(this)}
            defaultValue={this.state.input}
          />
          {/* Output is shown here */}
          <pre>{this.state.output}</pre>
        </div>
      </div>
    );
  }
}

export default App;

