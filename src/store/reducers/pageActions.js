const initialState = {
  lang: "uz",
};

export const pageActions = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LANGUAGE": {
      return {
        ...state,
        lang: action.payload,
      };
    }
    default:
      return state;
  }
};
