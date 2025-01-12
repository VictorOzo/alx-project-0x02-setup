import React from "react";
import { type PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{content}</p>
      <p>User ID: {userId}</p>
    </div>
  );
};

export default PostCard;
