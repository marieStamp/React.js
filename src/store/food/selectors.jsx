import { REQUEST_STATUS } from "../../utils/constants";

export const selectFoodList = (state) => state.food.foodList;
export const selectFoodLoading = (state) =>
  state.food.request.status === REQUEST_STATUS.LOADING;
export const selectFoodError = (state) => state.food.request.error;
