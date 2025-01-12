import Header from "@/components/layout/Header";
import React, { useState, useEffect } from "react";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );
        const data: PostProps[] = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <Header />
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.userId}>
            <PostCard {...post} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
