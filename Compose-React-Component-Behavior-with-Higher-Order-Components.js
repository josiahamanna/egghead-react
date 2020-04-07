import React from "react";

// Higher Order Component (HOC)
const HOC = InnerComponent =>
    class extends React.Component {
        constructor() {
            super();
            this.state = { count: 0 };
        }
        update() {
            this.setState({ count: this.state.count + 1 });
        }
        componentWillMount() {
            console.log("HOC mounted");
        }
        render() {
            return (
                <InnerComponent
                    // If not present props are not available
                    {...this.props}
                    // If not present state is not available
                    {...this.state}
                    update={this.update.bind(this)}
                />
            );
        }
    };

// main app
export default function App() {
    return (
        <div className="App">
            <Button>Button</Button>
            <hr />
            <LableHOC>Lable</LableHOC>
        </div>
    );
}

// functional component for button
const Button = HOC(props => (
    <button onClick={props.update}>
        {props.children} - {props.count}
    </button>
));

// class component for lable
class Lable extends React.Component {
    componentWillMount() {
        console.log("Lable mounted");
    }
    render() {
        return (
            <lable onMouseMove={this.props.update}>
                {this.props.children} - {this.props.count}
            </lable>
        );
    }
}

const LableHOC = HOC(Lable);
