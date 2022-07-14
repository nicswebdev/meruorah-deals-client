import { userActions } from "./userRedux";
import { registerActions } from "./registerRedux";
import { dealsActions } from "./dealsRedux";
import { orderActions } from "./orderRedux";
import { publicRequest } from "../requestMethods";
import axios from "axios";

import { toast } from "react-toastify";

const API_URL = "http://localhost:5000/api/";

export const login = async (dispatch, user) => {
    dispatch(userActions.loginStart());

    try {
        const res = await publicRequest.post("/auth/login", user);

        dispatch(userActions.loginSuccess(res.data));
    } catch (error) {
        dispatch(userActions.loginFailure());
        toast.error("Something went wrong...", { position: "top-right" });
    }
};

export const register = async (dispatch, register) => {
    dispatch(registerActions.registerStart());

    try {
        const res = await publicRequest.post("/auth/register", register);

        dispatch(registerActions.registerSuccess(res.data));
    } catch (error) {
        dispatch(registerActions.registerFailure());
        toast.error("Something went wrong...", { position: "top-right" });
    }
};

export const getDeals = async () => {
    //const res = await axios.get(API_URL + "deals?new=true");
    const res = await publicRequest.get("deals?new=true");

    return res.data;
};

export const getHighlight = async () => {
    //const res = await axios.get(API_URL + "deals?new=true");
    const res = await publicRequest.get("deals/highlight");

    return res.data;
};

export const getFeatured = async () => {
    //const res = await axios.get(API_URL + "deals?new=true");
    const res = await publicRequest.get("deals/featured");

    return res.data;
};

export const getNavCategories = async () => {
    //const res = await axios.get(API_URL + "deals?new=true");
    const res = await publicRequest.get("categories/nav-cat");

    return res.data;
};

export const order = async (dispatch, order) => {
    dispatch(orderActions.orderStart());

    try {
        const res = await publicRequest.post("/orders", order);

        dispatch(orderActions.orderSuccess(res.data));
    } catch (error) {
        dispatch(orderActions.orderFailure());
        toast.error("Something went wrong...", { position: "top-right" });
    }
};
