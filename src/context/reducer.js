import{ apartments } from '../data/apartments'

export const initialState = {
  apartments: apartments
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_APT":
      return {
        ...state,
        region: action.payload
      };
    default:
      return state;
  }
};