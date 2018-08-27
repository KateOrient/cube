import {connect} from 'react-redux';

import Cube from './Cube';
import {getFieldCenterPoint} from "../../../redux/modules/field";
import {getCubeEdgeLength} from "../../../redux/modules/cube";

const VERTEX_NUM = 8;

const SIGN_BY_VERTEX_NUM = [
    {x: -1, y: -1},
    {x: -1, y: -1},
    {x: 1, y: -1},
    {x: 1, y: -1},
    {x: -1, y: 1},
    {x: -1, y: 1},
    {x: 1, y: 1},
    {x: 1, y: 1}
];


const calculateCubePoints = (centerPoint, edgeLength) => {
    let points = [];
    let distanceFromCenterToVertex = edgeLength / (2 * Math.sin(Math.atan(1 / Math.sqrt(2))));
    for (let i = 0; i < VERTEX_NUM; i++) {
        points.push({
            x: centerPoint.x + SIGN_BY_VERTEX_NUM[i].x * distanceFromCenterToVertex,
            y: centerPoint.y + SIGN_BY_VERTEX_NUM[i].y * distanceFromCenterToVertex
        });
    }

    return points;
};

export const mapStateToProps = (state) => {
    return ({
        centerPoint: getFieldCenterPoint(state),
        cubePoints: calculateCubePoints(getFieldCenterPoint(state), getCubeEdgeLength(state))
    });
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Cube);