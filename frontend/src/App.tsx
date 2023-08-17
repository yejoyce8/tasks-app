import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateTaskContainer from './containers/CreateTaskContainer';
import Home from './pages/Home';
import logo from './assets/logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/create-task" Component={CreateTaskContainer}/>
      </Routes>
    </Router>
  );
}

export default App;
