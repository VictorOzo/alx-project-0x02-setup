import React, { useState } from "react";
import { type PostModalProps } from "@/interfaces";

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSave = () => {
    if (title && content) {
      onSave(title, content);
      setTitle("");
      setContent("");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <form className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <h2 className="text-lg font-bold mb-4 text-black">Add New Post</h2>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border text-black border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Enter content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border text-black border-gray-300 rounded mb-4 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default PostModal;
