import { connect } from "react-redux";

import PinShow from "./pin_show";
import { fetchPin } from "../../actions/pin_actions";

const msp = (state, ownProps) => {
    debugger
    return {
        pin: state.entities.pins[ownProps.match.params.pinId]
    }
}

const mdp = (dispatch, ownProps) => {
    debugger
    return {
        fetchPin: (pinId) => dispatch(fetchPin(pinId))
    }
}

export default connect(msp, mdp)(PinShow);