import { createContext, useReducer } from "react";

export const SampleContext = createContext();

const sampleReducer = (state, action) => {
  switch (action.type) {
    case "Update_Test":
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

  const updateTest = (testValue) => {
    dispatch({
      type: "Update_Test",
      payload: testValue,
    });
  };
  return (
    <SampleContext.Provider value={{ samplestate, updateTest }}>
      {children}
    </SampleContext.Provider>
  );
};

export default SampleProvider;
