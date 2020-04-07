import React from "react";

class App extends React.Component {
    render() {
        // Call Title with props called text
        return <Title text="12345" />;
    }
}

const Title = props => <h1>Title: {props.text}</h1>;

Title.propTypes = {
    // Validating text
    text(props, propName, component) {
        // if propName is not there in prop
        if (!(propName in props)) {
            return new Error(`Missing ${propName}`);
        }
        // If props[propName].length < 6 send error message
        if (props[propName].length < 6) {
            return new Error(`${propName} was too short`);
        }
    }
};

export default App;
