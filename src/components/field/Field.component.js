import {connect} from 'react-redux';

import Field from './Field';
import {getFieldCenterPoint} from "../../redux/modules/field";

export const mapStateToProps = (state) => {
    return ({
        centerPoint: getFieldCenterPoint(state)
    });
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Field);