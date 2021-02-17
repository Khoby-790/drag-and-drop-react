import { ADD_BOARD, REMOVE_BOARD } from "../types";

const initialState = {
    boards: [
        { id: 1, title: "Todos", items: [1, 2, 3, 4, 5, 5, 6, 6] },
        { id: 2, title: "Inprogress", items: [4.3, 5] },
        { id: 3, title: "Testing", items: [4, 5, 6, 7, 7, 66, 5] },
        { id: 4, title: "Deployed", items: [3, 5, 6, 6] },
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOARD:
            return {
                ...state,
                boards: [...state.boards, action.payload]
            }
        case REMOVE_BOARD:
            return {
                ...state,
                boards: [...state.boards.filter(board => board.id === action.payload)]
            }
        default:
            return state;
    }
}

export default reducer