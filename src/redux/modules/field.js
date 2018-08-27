import {createAction, handleActions} from 'redux-actions';
import {createSelector} from 'reselect';


//- Actions
export const setFieldSize = createAction("FIELD_SIZE_SET", size => size);


//- State
const initialState = {
    size: {
        height: 600,
        width: 600
    },
    position: {
        x: 0,
        y: 0
    }
};

//- Reducers
export default handleActions({
    FIELD_SIZE_SET: (state, action) => {
        return {...state, size: action.payload};
    }
}, initialState);

//- Selectors
export const getField = state => state.field;

export const getFieldSize = createSelector(
    getField,
    field => field.size
);

export const getFieldPosition = createSelector(
    getField,
    field => field.position
);

export const getFieldCenterPoint = state => {
    let position = getFieldPosition(state);
    let size = getFieldSize(state);

    return {x: size.width/2 + position.x, y: size.height/2 + position.y};
};