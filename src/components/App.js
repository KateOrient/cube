import React, {Component} from 'react';
import './App.css';
import Toolbar from "./toolbar/Toolbar";
import Field from "./field/Field";


class App extends Component {
    setMain = (main) => {
        this.main = main;
    };

    render() {
        return (
            <div className="app">
                <Toolbar/>
                <div className="main" ref={this.setMain}>
                    <Field/>
                </div>
            </div>
        );
    }

    componentDidMount () {
        window.onresize = this.onResize;
        this.props.onMainResize({height: this.main.offsetHeight, width: this.main.offsetWidth});
    }

    onResize = () => {
        this.props.onMainResize({height: this.main.offsetHeight, width: this.main.offsetWidth});
    };
}

export default App;
