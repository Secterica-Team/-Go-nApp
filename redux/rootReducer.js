import { combineReducers } from "redux";
import gatesReducer from "./gates/gates-reducer";
const rootReducer = combineReducers({
  gates: gatesReducer,
});

export default rootReducer;
