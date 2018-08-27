import React, {Component} from 'react';

import './Field.css';
import Cube from "./cube/Cube.component";

class Field extends Component {
    render() {
        return (
            <svg className="field">
                <Cube/>
            </svg>
        );
    }
}



export default Field;
