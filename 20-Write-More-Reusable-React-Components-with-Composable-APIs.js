// Compoents should be reusabel as well as composable
import React from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      red: 0
    };
    this.update = this.update.bind(this);
    // this.refs = React.createRef();
  }
  update() {
    this.setState({
      red: ReactDom.findDOMNode(this.refs.red.refs.inp).value
    });
  }
  render() {
    return (
      <div>
        <NumbInput
          ref="red"
          min={0}
          max={255}
          // set step
          step={127}
          label="red"
          value={this.state.red}
          update={this.update}
          // options range or number
          type="range"
        />
      </div>
    );
  }
}

class NumbInput extends React.Component {
  render() {
    const lable =
      this.props.label !== "" ? (
        <label>
          {this.props.label} - {this.props.value}
        </label>
      ) : null;
    return (
      <div>
        <input
          ref="inp"
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          type={this.props.type}
          defaultValue={this.props.value}
          onChange={this.props.update}
        />
        {lable}
      </div>
    );
  }
}

NumbInput.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number,
  label: PropTypes.string,
  update: PropTypes.func.isRequired,
  type: PropTypes.oneOf[("range", "number")]
};

NumbInput.defaultProps = {
  min: "0",
  max: "0",
  step: "1",
  value: "0",
  label: "",
  type: "range"
};

export default App;
