import { combineReducers, configureStore } from "@reduxjs/toolkit";
import appSlice from "./app.slice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import productSlice from "./product.slice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    product: productSlice,
    count: appSlice,
  })
);

 const store = configureStore({
  
  reducer: persistedReducer,
});
const persistor= persistStore(store);

export  {persistor,store} 

