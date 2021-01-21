import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SessionForm from './session_form'
import { signup, login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.session, 
        formType: 'signup'
    }
}

const mdp = (dispatch) => {
    return {
        processForm: (user) => dispatch(signup(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('login'))}>
                Already a member? Log in
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        openModal: () => dispatch(openModal('signup')),
        login: (user) => dispatch(login(user))
    }
}

export default connect(msp, mdp)(SessionForm);