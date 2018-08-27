import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Cube.css';

import _ from 'lodash';

class Cube extends Component {
    render() {
        return (
            <g>
                <circle className="center-point" cx={this.props.centerPoint.x} cy={this.props.centerPoint.y}/>
                {this.renderPoints()}
            </g>
        );
    }

    renderPoints = () => {
        return _.map(this.props.cubePoints, (point, index) => <circle className="cube-point" cx={point.x} cy={point.y} key={index}/>)
    }
}

const PointShape = PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
});

Cube.propTypes = {
    centerPoint:PointShape.isRequired,
    cubePoints: PropTypes.arrayOf(PointShape)
};

export default Cube;

