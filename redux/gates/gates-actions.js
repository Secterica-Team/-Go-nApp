import * as actionTypes from "./gates-types";

export const addGate = (gate) => {
  return {
    type: actionTypes.ADD_GATE,
    payload: { item: gate },
  };
};
export const removeGate = (gateId) => {
  return {
    type: actionTypes.REMOVE_GATE,
    payload: { id: gateId },
  };
};
export const editGate = (gateId, gate) => {
  return {
    type: actionTypes.EDIT_GATE,
    payload: { id: gateId, item: gate },
  };
};
