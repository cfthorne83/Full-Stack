import {
    RECEIVE_ALL_BOARDS,
    RECEIVE_BOARD,
    REMOVE_BOARD,
} from '../actions/board_actions';


const BoardsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ALL_BOARDS:
            return action.boards;
        case RECEIVE_BOARD:
            return Object.assign({}, state, { [action.board.id]: action.board });
        case REMOVE_BOARD:
            let newState = Object.assign({}, state);
            delete newState[action.boardId];
            return newState;
        default:
            return state;
    }
}

export default BoardsReducer;