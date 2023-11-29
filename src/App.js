import logo from "./logo.svg";
import "./App.css";
import FirstComponent from "./FirstComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>MY name is utsab</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          UTSAB KARKI
        </a>
        {/* self closing tag for only sending attributes without any children*/}
        <FirstComponent
          name="Test"
          courseName="Mern"
          age={22}
          isStudent={true}
          details={{ name: "abcd", bloodGroup: "A+", address: "Dhapakhel" }}
          subjects={["mongoDB", "expressJs", "reactJs", "NodeJs"]}
        />
      </header>
    </div>
  );
}

export default App;
