
export const fetchBoards = () => {
    return $.ajax({
        url: '/api/boards'
    })
}

export const fetchBoard = (boardId) => {
    return $.ajax({
        url: `/api/boards/${boardId}`
    })
}

export const createBoard = (board) => {
    return $.ajax({
        url: '/api/boards',
        method: 'POST',
        data: { board }
    })
}

export const updateBoard = (board) => {
    return $.ajax({
        url: `/api/boards/${board.id}`,
        method: 'PATCH',
        data: { board }
    })
}

export const removeBoard = (boardId) => {
    return $.ajax({
        url: `/api/posts/${boardId}`,
        method: "DELETE"
    })
}