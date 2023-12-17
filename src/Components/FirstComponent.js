import { useContext, useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdOutlineEdit } from "react-icons/md";
import { SampleContext } from "../App";

const FirstComponent = (props) => {
  //const [a, b] = useState(false);
  const [age, setage] = useState(props.age);
  //var subs = [];
  const [subs, setSubs] = useState(props.subs);

  const [subject, setSubject] = useState("");

  const [editMode, setEditMode] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const [alertState, setAlertState] = useState(false);

  //console.log(a, "values", b);
  console.log(editMode);

  const testTheProvider = useContext(SampleContext);

  console.log(testTheProvider, "check ");
  return (
    <div>
      {/* <p>for example</p>
      <h1>{props.name}</h1>
      <h2>{props.coursename}</h2> */}
      <h3>{age}</h3>
      <button onClick={(e) => setage(age + 1)}>+</button>
      <div>
        <input
          placeholder="enter subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <button
          onClick={(e) => {
            if (editMode) {
              setSubs(subs.map((y, i) => (selectedIndex === i ? subject : y)));
              setSubject("");
              setEditMode(false);
            } else {
              setSubs([subject, ...subs]);
              setSubject("");
              setSelectedIndex(-1);
            }
          }}
        >
          {editMode ? "update" : "Add"} Subject
        </button>
        {editMode && (
          <button
            onClick={(e) => {
              setEditMode(false);
              setSubject("");
            }}
          >
            Cancel
          </button>
        )}
      </div>
      <ol>
        {subs.map((s, index) => (
          <li key={s}>
            {s}{" "}
            <MdOutlineEdit
              onClick={(e) => {
                setEditMode(true);
                setSelectedIndex(index);
                setSubject(s);
              }}
            />
            <FaDeleteLeft
              onClick={(e) => {
                setAlertState(true);
                setSelectedIndex(index);
              }}
            />
            {alertState && index === selectedIndex && (
              <div style={{ backgroundColor: "red" }}>
                Are you sure?
                <button
                  onClick={(e) => {
                    setSubs(subs.filter((x) => x !== s));
                    setAlertState(false);
                  }}
                >
                  Delete
                </button>
                <button onClick={(e) => setAlertState(false)}>Cancel</button>
              </div>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default FirstComponent;
