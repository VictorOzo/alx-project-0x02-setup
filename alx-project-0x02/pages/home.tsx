// pages/home.tsx
import React from "react";
import Card from "@/components/common/Card";

const Home: React.FC = () => {
  return (
    <div>
      <Card title="Welcome" content="This is a reusable Card component." />
      <Card
        title="React + TypeScript"
        content="Build scalable and maintainable UIs with React and TypeScript."
      />
      <Card
        title="Dynamic Props"
        content="Customize your components using props."
      />
    </div>
  );
};

export default Home;
