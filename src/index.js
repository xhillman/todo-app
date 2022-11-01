import React from 'react';
import ReactDOM from 'react-dom/client';
import SettingsProvider from './Components/Context/Settings/index.js';

import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SettingsProvider>
      <App />
    </SettingsProvider>
  </React.StrictMode>
);
