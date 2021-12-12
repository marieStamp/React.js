import { REQUEST_STATUS } from "../../utils/constants";
import {
  REQUEST_FOOD_FAILURE,
  REQUEST_FOOD_LOADING,
  REQUEST_FOOD_SUCCESS,
} from "./actions";

const initialState = {
  foodList: [],
  request: {
    status: REQUEST_STATUS.IDLE,
    error: "",
  },
};

export const foodReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST_FOOD_LOADING:
      return {
        ...state,
        request: {
          ...state.request,
          status: REQUEST_STATUS.LOADING,
        },
      };
    case REQUEST_FOOD_SUCCESS:
      return {
        ...state,
        foodList: payload,
        request: {
          error: "",
          status: REQUEST_STATUS.SUCCESS,
        },
      };
    case REQUEST_FOOD_FAILURE:
      return {
        ...state,
        request: {
          error: payload,
          status: REQUEST_STATUS.FAILURE,
        },
      };
    default:
      return state;
  }
};
