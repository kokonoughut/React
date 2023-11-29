const FirstComponent = (abc) => {
  return (
    <div>
      <p>For example</p>
      <h1>{abc.name}</h1>
      <h1>{abc.courseName}</h1>
      <p>
        {abc.details.name} is {abc.age} years old and has{" "}
        {abc.details.bloodGroup} blood and lives in {abc.details.address} and is{" "}
        {abc.isStudent ? "" : "not "} a student who has the subjects are :{" "}
        Square of his age is {abc.square(abc.age)}
      </p>
      <ul>
        {abc.subjects.map((s) => (
          // key needs to be provided for a list as during array use all the elements must be provided a unique key
          <li key={s}>{s}</li>
        ))}
      </ul>
    </div>
  );
};

// something needs need to be exported when a file is created
export default FirstComponent;
