import React from 'react';
import ReactDOM from 'react-dom/client';
import SettingsProvider from './Components/Context/Settings/index.js';
import { BrowserRouter } from 'react-router-dom';

import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SettingsProvider>
        <App />
      </SettingsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
