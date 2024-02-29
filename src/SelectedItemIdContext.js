// SelectedItemIdContext.js
import React, { createContext, useContext, useState } from "react";

const SelectedItemIdContext = createContext();

export const SelectedItemIdProvider = ({ children }) => {
  const [selectedItemId, setSelectedItemId] = useState(null);

  return (
    <SelectedItemIdContext.Provider
      value={{ selectedItemId, setSelectedItemId }}
    >
      {children}
    </SelectedItemIdContext.Provider>
  );
};

export const useSelectedItemId = () => useContext(SelectedItemIdContext);
