import { combineReducers } from 'redux';
import { counterReducer } from './atmReducer';
export const RootReducer = combineReducers({
//   mockupDataCategory,
//   mockupDataCategoryBestSeller,
//   mockupDataCategoryDiscount,
//   mockupDataCategoryHot,
counterReducer})

export type AppState = ReturnType<typeof RootReducer>;
