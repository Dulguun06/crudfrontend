import { Component, React } from "react";
import "./App.css";
import Login from "./login";
import StudentList from "./list";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-body">
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="login" element={<Login />} />
              <Route path="dashboard" element={<StudentList />} />
            </Routes>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
