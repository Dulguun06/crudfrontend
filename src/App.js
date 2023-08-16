import React from "react";
import "./App.css";
import Login from "./login";
import StudentList from "./list";
//import SignUp from "./signup";
function App() {
  return (
    <div className="App">
      <header className="App-body">
        <Login />
        <StudentList/>
      </header>
    </div>
  );
}

export default App;
