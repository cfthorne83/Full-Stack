import React from 'react';
import { connect } from 'react-redux';

import SessionForm from './session_form'
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.session,
        formType: 'Log in'
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        processForm: (user) => dispatch(login(user)),
        otherForm: (
            <button className='other-form' onClick={() => dispatch(openModal('signup'))}>
                Not on myPin yet? Sign Up
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        login: (user) => dispatch(login(user))
    }
}

export default connect(msp, mdp)(SessionForm);