import React from "react";
import PostCard from "../components/common/PostCard";
import { type PostProps } from "../interfaces";

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data: PostProps[] = await response.json();

  return {
    props: {
      posts: data,
    },
  };
}

const Posts: React.FC<{ posts: PostProps[] }> = ({ posts }) => {
  return (
    <div>
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
