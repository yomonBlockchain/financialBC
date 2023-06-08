import React, { useEffect, useState } from 'react';
import { getCookie } from '../../../utils';

const CreateGroupPresenter = () => {
  /* Router */
  /* State */
  const user_nm = JSON.parse(getCookie('User_name'));
  const [nickname, setNickname] = useState('');
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
                      Group Leader
                    </label>
                    <input
                      id="leader"
                      name="group_leader"
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
                      Group Name
                    </label>
                    <input
                      id="name"
                      name="group_name"
                      type="text"
                      className="form-input w-full text-gray-800"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-wrap mb-4">
                  <div className="w-full">
                    <label
                      className="block text-gray-500 text-sm font-medium mb-1"
                      htmlFor="password"
                    >
                      Group Description
                    </label>
                    <input
                      id="decription"
                      name="group_desc"
                      type="text"
                      className="form-input w-full text-gray-800"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-wrap mb-4">
                  <div className="w-full">
                    <label
                      className="block text-gray-500 text-sm font-medium mb-1"
                      htmlFor="password"
                    >
                      Group Region
                    </label>
                    <select
                      id="region"
                      name="group_region"
                      className="form-input w-full text-gray-800"
                      required
                    >
                      <option value="null">
                        ===============================
                      </option>
                      <option value="Jangjeon1dong">
                        부산광역시 금정구 장전1동
                      </option>
                      <option value="Jangjeon2dong">
                        부산광역시 금정구 장전2동
                      </option>
                      <option value="Jangjeon3dong">
                        부산광역시 금정구 장전3동
                      </option>
                      <option value="Bugok1dong">
                        부산광역시 금정구 부곡1동
                      </option>
                      <option value="Bugok2dong">
                        부산광역시 금정구 부곡2동
                      </option>
                      <option value="Bugok3dong">
                        부산광역시 금정구 부곡3동
                      </option>
                      <option value="Bugok4dong">
                        부산광역시 금정구 부곡4동
                      </option>
                      <option value="Guseo1dong">
                        부산광역시 금정구 구서1동
                      </option>
                      <option value="Guseo2dong">
                        부산광역시 금정구 구서2동
                      </option>
                    </select>
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
