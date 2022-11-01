import React, { useState } from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider({children}) {

  const [maxItems, setMaxItems] = useState(3);
  const [showCompleted, setShowCompleted] = useState(false);
  const [sort, setSort] = useState('difficulty');

  const settings = {
    maxItems,
    showCompleted,
    sort,
    setMaxItems,
    setShowCompleted,
    setSort,
  }

  return(
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;