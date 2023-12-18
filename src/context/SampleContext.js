import { createContext, useReducer } from "react";

export const SampleContext = createContext();

const sampleReducer = (state, action) => {
  switch (action.type) {
    case "Update Test":
      state.test = action.payload;
      return state;
    default:
      return state;
  }
};

const SampleProvider = ({ children }) => {
  const [samplestate, dispatch] = useReducer(sampleReducer, {
    test: "sample test",
  });
  return (
    <SampleContext.Provider value={{ test: "Sample text" }}>
      {children}
    </SampleContext.Provider>
  );
};

export default SampleProvider;
