import * as BoardApiUtil from '.././util/board_api_util';

export const RECEIVE_ALL_BOARDS = 'RECEIVE_ALL_BOARDS';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const REMOVE_BOARD = 'REMOVE_BOARD';

export const receiveBoards = (boards) => {
    return {
        type: RECEIVE_ALL_BOARDS,
        boards
    }
};

export const receiveBoard = (data) => {
    return {
        type: RECEIVE_BOARD,
        board: data.board
    }
};

export const removeBoard = (boardId) => {
    return {
        type: REMOVE_BOARD,
        boardId
    }
};

export const fetchBoards = () => {
    return dispatch => {
        return BoardApiUtil.fetchBoards().then(boards => {
            dispatch(receiveBoards(boards))
        })
    }
}

export const fetchBoard = (boardId) => {
    return dispatch => {
        return BoardApiUtil.fetchBoard(boardId).then(data => {
            dispatch(receiveBoard(data))
        })
    }
}

export const createBoard = (board) => {
    return dispatch => {
        return BoardApiUtil.createBoard(board).then(board => {
            dispatch(receiveBoard(board))
        })
    }
}

export const updateBoard = (board) => {
    return dispatch => {
        return BoardApiUtil.updateBoard(board).then(board => {
            dispatch(receiveBoard(board))
        })
    }
}
export const deleteBoard = (boardId) => {
    return dispatch => {
        return BoardApiUtil.deleteBoard(boardId).then(() => {
            dispatch(removeBoard(boardId))
        })
    }
}