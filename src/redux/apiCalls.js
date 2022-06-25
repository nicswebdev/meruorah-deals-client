import { userActions } from "./userRedux";
import { registerActions } from "./registerRedux";
import { dealsActions } from "./dealsRedux";
import {publicRequest} from "../requestMethods";

import { toast } from "react-toastify";

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

export const getDeals = async (dispatch) => {
  dispatch(dealsActions.fetchStart());

  try {
    const res = await publicRequest.get("/deals?new=true");

    dispatch(dealsActions.fetchSuccess(res.data));
  } catch (error) {
    dispatch(dealsActions.fetchFailure());
    toast.error("Something went wrong...", { position: "top-right" });
  }
};