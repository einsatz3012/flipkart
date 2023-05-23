import { createContext, useEffect, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const storedAccount =
    localStorage.getItem("account") === "null"
      ? null
      : localStorage.getItem("account");

  const [account, setAccount] = useState(storedAccount);

  useEffect(() => {
    localStorage.setItem("account", account);
  }, [account]);

  return (
    <DataContext.Provider value={{ account, setAccount }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
