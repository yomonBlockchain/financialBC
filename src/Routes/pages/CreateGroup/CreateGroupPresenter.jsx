import React from 'react';

const CreateGroupPresenter = (props) => {
  /* Router */
  /* State */
  const { groupInfo, handleCreateGroup, handleGroupInfo } = props;
  const { group_name, group_desc, group_region } = groupInfo;
  /* Hooks */
  /* Functions */
  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleCreateGroup(groupInfo);
  };
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
                    <label className="block text-gray-500 text-sm font-medium mb-1">
                      Group Name
                    </label>
                    <input
                      id="group_name"
                      name="group_name"
                      type="text"
                      className="form-input w-full text-gray-800"
                      value={group_name}
                      onChange={handleGroupInfo}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap mb-4">
                  <div className="w-full">
                    <label className="block text-gray-500 text-sm font-medium mb-1">
                      Group Description
                    </label>
                    <input
                      id="decription"
                      name="group_desc"
                      type="text"
                      className="form-input w-full text-gray-800"
                      value={group_desc}
                      onChange={handleGroupInfo}
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
                      value={group_region}
                      onChange={handleGroupInfo}
                    >
                      <option value="null">
                        ===============================
                      </option>
                      <option value="1">부산광역시 금정구 장전1동</option>
                      <option value="2">부산광역시 금정구 장전2동</option>
                      <option value="3">부산광역시 금정구 장전3동</option>
                      <option value="4">부산광역시 금정구 부곡1동</option>
                      <option value="5">부산광역시 금정구 부곡2동</option>
                      <option value="6">부산광역시 금정구 부곡3동</option>
                      <option value="7">부산광역시 금정구 부곡4동</option>
                      <option value="8">부산광역시 금정구 구서1동</option>
                      <option value="9">부산광역시 금정구 구서2동</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex items-center my-6">
                <div
                  className="border-t border-gray-200 grow mr-3"
                  aria-hidden="true"
                />
                <div
                  className="border-t border-gray-200 grow ml-3"
                  aria-hidden="true"
                />
              </div>
              <div className="flex flex-wrap">
                <div className="w-full">
                  <button
                    id="submit"
                    type="submit"
                    className="btn-sm text-white bg-[#1D9BF0] hover:bg-[#1A90DF] w-full relative flex items-center"
                    onClick={handleSubmit}
                  >
                    Create
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
