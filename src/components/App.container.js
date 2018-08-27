import {connect} from 'react-redux';

import App from './App';
import {setFieldSize} from "../redux/modules/field";

export const mapStateToProps = (state) => {
    return ({
    });
};

const mapDispatchToProps = (dispatch) => {
    return {
        onMainResize: size => dispatch(setFieldSize(size))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);