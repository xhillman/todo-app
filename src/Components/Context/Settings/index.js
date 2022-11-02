import React, { useEffect, useState } from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider({children}) {

  const [maxItems, setMaxItems] = useState(3);
  const [showCompleted, setShowCompleted] = useState(false);
  const [sort, setSort] = useState('difficulty');
  const [checked, setChecked] = useState(true);

  const settings = {
    maxItems,
    showCompleted,
    sort,
    checked,
    setMaxItems,
    setShowCompleted,
    setSort,
    setChecked
  }

  useEffect(() => {
    let settings = JSON.parse(localStorage.getItem('settings'));
    console.log('Settings', settings);
  });

  return(
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;