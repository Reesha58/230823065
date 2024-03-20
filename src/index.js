import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Story from './Story';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Story name="adam" image="person1.jpg"/>
    <Story name="adam" image="person2.jpg"/>
  </React.StrictMode>
);

reportWebVitals();
