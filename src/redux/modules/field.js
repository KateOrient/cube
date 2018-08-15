import {handleActions} from 'redux-actions';
import {createSelector} from 'reselect';


//- Actions

//- State
const initialState = {
    position: {
        x: 500,
        y: 500
    }

};

//- Reducers
export default handleActions({
}, initialState);

//- Selectors