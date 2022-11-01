import React, { useState } from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider({children}) {

  const settings = {
    maxItems: 3,
    completed: true,
  }

  return(
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;