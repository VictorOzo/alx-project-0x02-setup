import React from "react";
import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

const About: React.FC = () => {
  return (
    <>
      <Header />
      <div className="p-6 space-y-4">
        <h1 className="text-2xl font-bold mb-4">About Page</h1>
        <Button size="small" shape="rounded-sm">
          Small Button
        </Button>
        <Button size="medium" shape="rounded-md">
          Medium Button
        </Button>
        <Button size="large" shape="rounded-full">
          Large Button
        </Button>
      </div>
    </>
  );
};

export default About;
