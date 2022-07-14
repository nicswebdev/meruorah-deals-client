import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartRedux";
import userReducer from "./userRedux";
import registerRedux from "./registerRedux";
import dealsRedux from "./dealsRedux";
import highlightRedux from "./highlightRedux";
import featuredRedux from "./featuredRedux";
import orderRedux from "./orderRedux";
import categoryRedux from "./categoryRedux";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
        register: registerRedux,
        deals: dealsRedux,
        order: orderRedux,
        highlight: highlightRedux,
        featured: featuredRedux,
        category: categoryRedux,
    },
});

export default store;
