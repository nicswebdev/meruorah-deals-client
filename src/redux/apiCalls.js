import { userActions } from "./userRedux";
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
}