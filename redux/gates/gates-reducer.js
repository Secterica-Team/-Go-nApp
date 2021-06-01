import * as actionTypes from "./gates-types";

const INITIAL_STATE = {
  gates: [],
};

export const currentState = {
  gates: [],
};

const gatesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_GATE:
      state.gates.push(action.payload.item);
      currentState.gates.push(action.payload.item);
      return {
        ...state,
        gates: state.gates,
      };

    case actionTypes.REMOVE_GATE:
      var removeIndex = state.gates
        .map((item) => item.id)
        .indexOf(action.payload.id);
      state.gemstonesProducts.splice(removeIndex, 1);
      var removeIndexCurrentState = currentState.gates
        .map((item) => item.id)
        .indexOf(action.payload.id);
      currentState.gates.splice(removeIndexCurrentState, 1);
      return {
        ...state,
        gates: state.gates,
      };
    case actionTypes.EDIT_GATE:
      state.gates = [];
      currentState.gates = [];
      return {
        ...state,
        gates: state.gates,
      };
    default:
      return state;
  }
};

export default gatesReducer;
