import React from "react";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            action: "---"
        };
        this.update = this.update.bind(this);
    }

    update(event) {
        this.setState({ action: event.type });
    }
    render() {
        return (
            <div>
                <textarea
                    col="10"
                    row="10"
                    onKeyPress={this.update}
                    onCopy={this.update}
                    onCut={this.update}
                    onPaste={this.update}
                    onFocus={this.update}
                    onBlur={this.update}
                    onDoubleClick={this.update}
                    onTouchStart={this.update}
                    onTouchEnd={this.update}
                    onTouchMove={this.update}
                />
                <h1>{this.state.action}</h1>
            </div>
        );
    }
}

export default App;
