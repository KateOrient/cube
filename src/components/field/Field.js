import React, {Component} from 'react';

import './Field.css';
import Cube from "./cube/Cube";

class Field extends Component {

    render() {
        return (
            <svg className="field" ref={this.setField}>
                <Cube/>
            </svg>
        );
    }
}

export default Field;
