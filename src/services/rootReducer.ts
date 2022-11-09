import {combineReducers} from "@reduxjs/toolkit";
import innerWidthReducer from "./reducers/innerWidthReducer";

const rootReducer = combineReducers({
    innerWidthReducer,
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;