import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAccount, useConnect } from "wagmi";
import metamaskLogo from "../../../assets/metamask.png";
const SigninPresenter = ({ handleSigninUp }) => {
  /* Router */
  /* State */
  const initialState = {
    guard_login_id: "",
    guard_login_pw: "",
  };
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(initialState);
  const { isConnected, address } = useAccount();
  const { connect, connectors, isLoading, pendingConnector } = useConnect();
  /* Hooks */
  useEffect(() => {
    if (isConnected || address) {
      navigate("/");
    }
  }, [address, isConnected, navigate]);

  /* Functions */
  const handleMetamaskSignIn = () => {
    connect({ connector: connectors[0] });
  };

  const handleUserInfo = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    handleSigninUp(userInfo);
  };

  /* Render */
  return (
    <main className="grow bg-gray-50">
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="max-w-3xl mx-auto text-center pb-12">
              <h1 className="h2 font-cabinet-grotesk">
                Welcome back, Creative!
              </h1>
            </div>
            {/* Form */}
            <div className="max-w-sm mx-auto">
              <div>
                <div className="flex flex-wrap mb-4">
                  <div className="w-full">
                    <label
                      className="block text-gray-500 text-sm font-medium mb-1"
                      htmlFor="email"
                    >
                      User ID
                    </label>
                    <input
                      id="email"
                      name="guard_login_id"
                      type="text"
                      className="form-input w-full text-gray-800"
                      required
                      value={userInfo.user_id}
                      onChange={handleUserInfo}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap mb-4">
                  <div className="w-full">
                    <label
                      className="block text-gray-500 text-sm font-medium mb-1"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      name="guard_login_pw"
                      type="password"
                      className="form-input w-full text-gray-800"
                      required
                      value={userInfo.user_pw}
                      onChange={handleUserInfo}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between mt-6">
                  <button className="font-medium text-sm sm:text-base text-blue-500 decoration-blue-500 decoration-2 underline-offset-2 hover:underline">
                    Join
                  </button>
                  <div className="ml-2">
                    <button
                      type="submit"
                      className="btn-sm text-white bg-blue-500 hover:bg-blue-600 shadow-sm"
                      onClick={handleLogin}
                    >
                      Sign In
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center my-6">
                <div
                  className="border-t border-gray-200 grow mr-3"
                  aria-hidden="true"
                />
                <div className="text-sm text-gray-500 italic">or</div>
                <div
                  className="border-t border-gray-200 grow ml-3"
                  aria-hidden="true"
                />
              </div>
              <div className="flex flex-wrap">
                <div className="w-full">
                  <button
                    className="btn-sm text-white bg-[#1D9BF0] hover:bg-[#1A90DF] w-full relative flex items-center"
                    onClick={handleMetamaskSignIn}
                  >
                    <img src={metamaskLogo} alt="metamask" width={28} />
                    <span className="flex-auto pl-16 pr-8 -ml-16">
                      Metamask Login
                      {isLoading &&
                        pendingConnector?.id === connectors[0].id &&
                        `connecting`}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SigninPresenter;
