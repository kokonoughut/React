import { createContext } from "react";

export const SampleContext = createContext();

const SampleProvider = ({ children }) => {
  return (
    <SampleContext.Provider value={{ test: "Sample text" }}>
      {children}
    </SampleContext.Provider>
  );
};

export default SampleProvider;
