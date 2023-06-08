import React, { useEffect, useState } from "react";
import { getCookie } from "../../../utils";

const CreateGroupPresenter = () => {
  /* Router */
  /* State */
  const user_nm = JSON.parse(getCookie("User_name"));
  const [nickname, setNickname] = useState("");
  /* Hooks */
  useEffect(() => {
    setNickname(user_nm);
  }, [user_nm]);

  /* Functions */
  /* Render */
  return (
    <main className="grow bg-gray-50">
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="max-w-3xl mx-auto text-center pb-12">
              <h1 className="h2 font-cabinet-grotesk">Create Group!</h1>
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
                      User NickName
                    </label>
                    <input
                      id="email"
                      name="guard_login_id"
                      type="text"
                      className="form-input w-full text-gray-800 bg-slate-200"
                      disabled
                      value={nickname}
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
                  <button className="btn-sm text-white bg-[#1D9BF0] hover:bg-[#1A90DF] w-full relative flex items-center">
                    z
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

export default CreateGroupPresenter;
