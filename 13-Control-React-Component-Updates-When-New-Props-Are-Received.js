import React from 'react'
import ReactDom from 'react-dom'

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            increasing: false
        }
    }

    update() {
        ReactDom.render(
            <App val={this.props.val + 1} />,
            document.getElementById('root')
        )
    }

    // It takes next props as the parameter
    // while receiving the props we can update the state
    // and calls render
    componentWillReceiveProps(nextProps) {
        console.log(`next props: ${nextProps.val}`)
        this.setState({ increasing: nextProps.val > this.props.val })
    }

    // Accepts next props and next state as parameters
    // returns true or false
    // based on the boolean value render method will be called
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.val % 5 === 0
    }

    render() {
        console.log(`inside render: ${this.state.increasing}`)
        return <button
            onClick={this.update.bind(this)}>
            {this.props.val}
        </button>
    }

    // Acceps previous props and previous state as parameters
    // after updating (after render method is called) this will execute
    componentDidUpdate(preProps, preState) {
        console.log(`previous props: ${preProps.val}`)
    }
}

App.defaultProps = {
    val: 0
}

export default App