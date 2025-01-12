import React, { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";

const Home: React.FC = () => {
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const addPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <>
      <Header />
      <div className="p-6">
        <button
          onClick={() => setModalOpen(true)}
          className="mb-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Add New Post
        </button>
        <div className="grid gap-4">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
        <PostModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          onSave={addPost}
        />
      </div>
    </>
  );
};

export default Home;
