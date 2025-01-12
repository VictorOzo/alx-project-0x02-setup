import React from "react";
import { type UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-md bg-white">
      <h2 className="text-lg font-semibold mb-2 text-black">{name}</h2>
      <p className="text-gray-700 mb-1">
        <strong>Email:</strong> {email}
      </p>
      <p className="text-gray-700">
        <strong>Address:</strong> {address.street}, {address.city},{" "}
        {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
