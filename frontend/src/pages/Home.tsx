// Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Tasks Home Page</h1>
      <Link to="/create-task">Create a New Task</Link>
    </div>
  );
};

export default Home;
