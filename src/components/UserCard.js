import React, { useState, useContext } from "react";
import { FaHeart, FaTrash } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import { AiOutlineEdit, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import UserContext from "../context/UserContext";

const UserCard = ({ user }) => {
  const { updateUser } = useContext(UserContext);

  const [isLiked, setIsLiked] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSave = (updatedData) => {
    updateUser(user.id, updatedData);
  };

  const avatarUrl = `https://api.dicebear.com/9.x/avataaars/svg?size=32&seed=${user.name}`;

  return (
    <div className="max-w-sm w-full border shadow-md overflow-hidden mx-auto md:max-w-md lg:max-w-lg ">
      <div className=" bg-neutral-100">
        <img src={avatarUrl} alt={user.name} className="w-1/2 h-1/2 m-auto" />
      </div>

      <div className="px-5">
        <h3 className="text-xl font-bold mt-4 break-words">{user.name}</h3>

        {/* Align icon and email text in one line */}
        <div className="flex items-center justify-start gap-2 mt-1">
          <AiOutlineMail />
          <p className="break-words w-full">{user.email}</p>
        </div>

        <div className="flex items-center justify-start gap-2 mt-1">
          <AiOutlinePhone />
          <p className="w-full">{user.phone}</p>
        </div>

        <div className="flex items-center justify-start gap-2 mt-1">
          <BsGlobe />
          <p className="break-words w-full">{user.website}</p>
        </div>
      </div>

      <div className="flex justify-around mt-4 p-4 bg-zinc-50 border-l border-t">
        <button  aria-label="like" onClick={() => setIsLiked(!isLiked)}>
          <FaHeart color={isLiked ? "red" : "gray"} />
        </button>

        <button
         aria-label="Edit"
          onClick={() => setModalOpen(true)}
          className="px-12 border-l border-r border-gray-300"
        >
          <AiOutlineEdit color="#8a8a8a" />
        </button>

        <button  aria-label="delete" onClick={() => setIsDeleteOpen(true)}>
          <FaTrash color="#8a8a8a" />
        </button>
      </div>

      <EditModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        initialData={user}
        fields={[
          { name: "name", label: "Name" },
          { name: "phone", label: "Phone" },
          { name: "email", label: "Email", type: "email" },
          { name: "website", label: "Website" },
        ]}
        onSave={handleSave}
        title="Edit User Profile"
      />

      <DeleteModal
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        userId={user.id}
      />
    </div>
  );
};

export default UserCard;
