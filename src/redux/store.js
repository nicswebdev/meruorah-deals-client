import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartRedux";
import userReducer from "./userRedux";
import registerRedux from "./registerRedux";
import dealsRedux from "./dealsRedux";
import orderRedux from "./orderRedux";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    register: registerRedux,
    deals: dealsRedux,
    order: orderRedux,
  },
});

export default store;