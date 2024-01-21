import { combineReducers,configureStore } from "@reduxjs/toolkit";

import dataStore from "./data.store";

const data = combineReducers({
    data: dataStore,
  });
  
  export const store = configureStore({
    reducer: data,
  });
  