import { useState } from "react";

const FirstComponent = ({
  name,
  courseName,
  age,
  isStudent,
  details,
  subjects,
  square,
}) => {
  // testBoolean=> same type as parameter and setTestBoolean will be a function
  const [testBoolean, setTestBoolean] = useState(false);
  console.log(typeof testBoolean, typeof setTestBoolean, "check state");
  return (
    // providing an id to uniquely identify the components
    <div id="myComponent" style={{ color: testBoolean ? "black" : "white" }}>
      <p>For example</p>
      <h1>{name}</h1>
      {testBoolean && <h1>{courseName}</h1>}
      <p>
        {details.name} is {age} years old and has {details.bloodGroup} blood and
        lives in {details.address} and is {testBoolean ? "" : "not "} a student
        whose Square of his age is {square(age)} and who has the subjects are :
        <button
          onClick={(e) => setTestBoolean(!testBoolean)}
          onMouseOver={(e) => console.log(e)}
        >
          Click here!
        </button>
      </p>
      <ul>
        {subjects.map((s) => (
          // key needs to be provided for a list as during array use all the elements must be provided a unique key
          <li key={s}>{s}</li>
        ))}
      </ul>
    </div>
  );
};

// something needs need to be exported when a file is created
export default FirstComponent;
