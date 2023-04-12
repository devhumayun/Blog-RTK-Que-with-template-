import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import route from './route/routes';

function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
