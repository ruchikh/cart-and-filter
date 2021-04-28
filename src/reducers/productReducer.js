import {
    FETCH_PRODUCTS,
  } from "../actions/types";

  const initState = {
		items: [],
    filteredItems: [],
    size: "",
    sort: ""
  };

  export default function (state = initState, action) {
    switch (action.type) {
      case FETCH_PRODUCTS:
        return { ...state, items: action.payload, filteredItems: action.payload }

      default:
        return state;
    }
  }