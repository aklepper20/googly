//what th data layer looks like when it first loads
export const initialState = {
  term: null,
};

//whenever we want to change the data layer, we have to dispatch an action that says go ahead and change the search term
export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
};

//listen to any dispatched action
//when we dispatch an action for set_search_term. return the present state and update it with the dispatched action
//default just returns the present state if we dont change anything
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        term: action.term,
      };
    default:
      return state;
  }
};

export default reducer;
