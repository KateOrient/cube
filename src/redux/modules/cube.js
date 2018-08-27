import {createAction, handleActions} from 'redux-actions';
import {createSelector} from 'reselect';

//- Actions


//- State
const initialState = {
    angleDeltaX: 0,
    angleDeltaY: 0,
    edgeLength: 100
};

//- Reducers
export default handleActions({
}, initialState);

//- Selectors
export const getCube = state => state.cube;

export const getCubeAngleDelta = createSelector(
    getCube,
    cube => ({deltaX: cube.angleDeltaX, deltaY: cube.angleDeltaY})
);

export const getCubeEdgeLength = createSelector(
    getCube,
    cube => cube.edgeLength
);
