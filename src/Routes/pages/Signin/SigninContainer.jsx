import React from "react";
import SigninPresenter from "./SigninPresenter";
import { AuthAPI } from "../../../API";
import { setCookie } from "../../../utils";
import { useNavigate } from "react-router-dom";

const SigninContainer = () => {
  /* Router */
  /* State */
  const navigate = useNavigate();
  /* Hooks */
  /* Functions */
  const handleSigninUp = async (userInfo) => {
    const result = await AuthAPI.requestSignin(userInfo);
    console.log(result);
    if (result) {
      const { access_token, guard_nm, ...guard_id } = result;
      setCookie("Authorization", access_token);
      setCookie("User_name", JSON.stringify(guard_nm));
      setCookie("ISGUARD_USER", JSON.stringify(guard_id));
      navigate("/");
      return true;
    }
    return false;
  };
  /* Render */
  return <SigninPresenter handleSigninUp={handleSigninUp} />;
};

export default SigninContainer;
