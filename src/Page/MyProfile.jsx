import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    document.title = "NeonBytes Store | My Profile";
    if (user) {
      setName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
    }
  }, [user]);

  const handleUpdate = (e) => {
    e.preventDefault();
    setUpdating(true);
    updateUserProfile(name, photoURL)
      .then(() => {
        toast.success("Profile updated successfully!");
        setUpdating(false);
      })
      .catch(() => {
        toast.error("Failed to update profile!");
        setUpdating(false);
      });
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-[#f9fafb] px-4">
      <div className="bg-white p-10 rounded-2xl shadow-md text-center max-w-sm w-full border border-gray-200">
        <div className="mx-auto mb-6">
          <img
            src={
              user?.photoURL && user.photoURL !== ""
                ? user.photoURL
                : "https://i.ibb.co/6Nf3pP7/default-avatar.png"
            }
            alt="User Avatar"
            className="w-28 h-28 mx-auto rounded-full border-4 border-[#0cc0df] object-cover"
          />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-1">
          {user?.displayName && user.displayName !== ""
            ? user.displayName
            : "No Name"}
        </h2>
        <p className="text-gray-500 mb-6">{user?.email || "No Email"}</p>

        <div className="border-t border-gray-200 my-6"></div>

        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Want to Update Your Profile?
        </h3>

        <form onSubmit={handleUpdate} className="space-y-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="input input-bordered w-full bg-white border-gray-300 focus:border-[#0cc0df] focus:outline-none"
          />
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            placeholder="Enter photo URL"
            className="input input-bordered w-full bg-white border-gray-300 focus:border-[#0cc0df] focus:outline-none"
          />
          <button
            type="submit"
            disabled={updating}
            className="btn bg-[#0cc0df] hover:bg-[#09b1cd] border-none text-white font-semibold w-full"
          >
            {updating ? "Updating..." : "Update Info"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
