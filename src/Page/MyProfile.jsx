import React, { useEffect } from 'react'

const MyProfile = () => {
          useEffect(() => {
          document.title = "My Profile";
      }, []);
  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-[#f9fafb] px-4">
      <div className="bg-white p-10 rounded-2xl shadow-md text-center max-w-sm w-full border border-gray-200">
        
        <div className="mx-auto mb-6">
          <img
            src="https://i.ibb.co/6Nf3pP7/default-avatar.png"
            alt="User Avatar"
            className="w-28 h-28 mx-auto rounded-full border-4 border-[#0cc0df] object-cover"
          />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-1">
          Abdur Rahman Mamun
        </h2>
        <p className="text-gray-500 mb-6">mamun@example.com</p>

        <div className="border-t border-gray-200 my-6"></div>

        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Want to Update Your Profile?
        </h3>
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Enter your name"
            className="input input-bordered w-full bg-white border-gray-300 focus:border-[#0cc0df] focus:outline-none"
          />
          <input
            type="text"
            placeholder="Enter photo URL"
            className="input input-bordered w-full bg-white border-gray-300 focus:border-[#0cc0df] focus:outline-none"
          />
          <button className="btn bg-[#0cc0df] hover:bg-[#09b1cd] border-none text-white font-semibold w-full">
            Update Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
