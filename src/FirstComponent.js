const FirstComponent = (abc) => {
  return (
    <div>
      <p>For example</p>
      <h1>{abc.name}</h1>
      <h1>{abc.courseName}</h1>
    </div>
  );
};

// something needs need to be exported when a file is created
export default FirstComponent;
