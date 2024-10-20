import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const DeleteModal = ({ isOpen, onClose, userId }) => {
  const { deleteUser } = useContext(UserContext);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded relative w-96">
        
        {/* Header with Close Button */}
        <div className="flex justify-between items-center mb-4 p-4 border-b border-1 ">
          <h2 className="text-xl font-semibold">Delete User</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-black focus:outline-none"
          >
            ✕
          </button>
        </div>

        <p className="text-gray-700 mb-6 p-4">
          Are you sure you want to delete this user?
        </p>

        {/* Action Buttons */}
        <div className="flex justify-end border-1 border-t p-4">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
          >
            Close
          </button>
          <button
            onClick={() => deleteUser(userId)}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
