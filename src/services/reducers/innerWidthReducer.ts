import {GET_INNER_WIDTH, TInnerWidthAction} from "../actions/getInnerWidth";

interface IState {
    ui: {
        width: null
    }
}

const initialState: IState = {
    ui: {
        width: null
    }
}

function innerWidthReducer(state = initialState, action: TInnerWidthAction) {
    switch (action.type) {
        case GET_INNER_WIDTH: {
            return action.ui.width
        }
        default:
            return state;
    }
}

export default innerWidthReducer;