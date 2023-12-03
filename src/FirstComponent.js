import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
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
  const [testBoolean, setTestBoolean] = useState(isStudent);

  // number state example
  const [count, setCount] = useState(age);
  console.log(typeof testBoolean, typeof setTestBoolean, "check state");

  // array state setting example
  const [subs, setSubs] = useState(subjects);

  //string state setting example
  const [subject, setSubjects] = useState("");

  const [editMode, setEditMode] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    // providing an id to uniquely identify the components
    <div id="myComponent" style={{ color: testBoolean ? "black" : "white" }}>
      <p>For example</p>
      <h1>{name}</h1>
      {testBoolean && <h1>{courseName}</h1>}
      <p>
        {details.name} is {count} years old and has {details.bloodGroup} blood
        and lives in {details.address} and is {testBoolean ? "" : "not "} a
        student whose Square of his age is {square(age)} and who has the
        subjects are :
        <button
          onClick={(e) => setTestBoolean(!testBoolean)}
          onMouseOver={(e) => console.log(e)}
        >
          Click here!
        </button>
        <button onClick={(e) => setCount(count + 1)}>Click here add age</button>
        <button onClick={(e) => setCount(count > 1 ? count - 1 : count)}>
          Click here sub age
        </button>
        <input
          placeholder="enter name of subject"
          value={subject}
          // here e stands for event so we take the target value of the onChange event
          onChange={(e) => setSubjects(e.target.value)}
        />
        <button
          onClick={(e) => {
            if (editMode) {
              setSubs(subs.map((y, i) => (selectedIndex === i ? subject : y)));
              setEditMode(false);
              setSubjects("");
              setSelectedIndex(-1);
            } else {
              setSubs([subject, ...subs]);
              // added as to remove the text in textbox
              setSubjects("");
            }
          }}
        >
          {editMode ? "Update" : "Add"} subject
        </button>
        {editMode && (
          <button
            onClick={() => {
              setEditMode(false);
              setSubjects("");
              setSelectedIndex(-1);
            }}
          >
            Cancel
          </button>
        )}
      </p>
      <ul>
        {subs.map((s, index) => (
          // key needs to be provided for a list as during array use all the elements must be provided a unique key
          <li key={s}>
            {s}{" "}
            <FaRegEdit
              color="e6f3ff"
              onClick={(e) => {
                setEditMode(true);
                setSelectedIndex(index);
                setSubjects(s);
              }}
            />
            {/* places only the elements that is not equal to s */}
            <AiFillDelete
              color="4d7a4d"
              onClick={(e) => setSubs(subs.filter((x) => x !== s))}
            />
          </li>
        ))}
      </ul>
      {/* <form>
        <input type="button" />
        <input type="checkbox" />
        <input type="color" />
        <input type="date" />
        <input type="datetime-local" />
        <input type="email" />
        <input type="file" />
        <input type="hidden" />
        <input type="image" />
        <input type="month" />
        <input type="number" />
        <input type="password" />
        <input type="radio" />
        <input type="range" />
        <input type="reset" />
        <input type="search" />
        <input type="submit" />
        <input type="tel" />
        <input type="text" />
        <input type="time" />
        <input type="url" />
        <input type="week" />
      </form> */}
    </div>
  );
};

// something needs need to be exported when a file is created
export default FirstComponent;
