const FirstComponent = ({
  name,
  courseName,
  age,
  isStudent,
  details,
  subjects,
  square,
}) => {
  return (
    <div>
      <p>For example</p>
      <h1>{name}</h1>
      <h1>{courseName}</h1>
      <p>
        {details.name} is {age} years old and has {details.bloodGroup} blood and
        lives in {details.address} and is {isStudent ? "" : "not "} a student
        whose Square of his age is {square(age)} and who has the subjects are :
        <button
          onClick={(e) => console.log(e)}
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
