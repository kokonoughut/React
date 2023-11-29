const FirstComponent = (abc) => {
  return (
    <div>
      <p>For example</p>
      <h1>{abc.name}</h1>
      <h1>{abc.courseName}</h1>
      <p>
        {abc.details.name} is {abc.age} years old and has{" "}
        {abc.details.bloodGroup} blood and lives in {abc.details.address} and is{" "}
        {abc.isStudent ? "" : "not "} a student
      </p>
    </div>
  );
};

// something needs need to be exported when a file is created
export default FirstComponent;
