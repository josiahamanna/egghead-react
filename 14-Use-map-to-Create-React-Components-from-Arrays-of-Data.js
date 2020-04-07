import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = { items: [] }
    }

    // Capture filter key and update it in state
    filter(e) {
        this.setState({ filter: e.target.value })
    }

    // Call the api before the component mounts
    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => this.setState({ items: data }))
    }

    render() {

        // update the items by filtering according to key
        let items = this.state.items
        if (this.state.filter) {
            items = items
                .filter(item =>
                    item.name.toLowerCase()
                        .includes(this.state.filter.toLowerCase()))
        }
        return <div>
            <input type='text' onChange={this.filter.bind(this)} />
            {/** Call User (fucntional component) by sending user as props
        key is also required here (only amongst siblings) */}
            {items.map(item => <User key={item.id} user={item} />)}
        </div>
    }
}

const User = (props) => <h2>{props.user.name}</h2>

export default App