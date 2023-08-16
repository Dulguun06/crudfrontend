import React from 'react';
import axios from 'axios';


export default class StudentList extends React.Component {
  state = {
    students: [],
  };

  componentDidMount() {
    axios.get(`/api/getAllStudents`).then((res) => {
      const students = res.data;
      this.setState({ students });
    });
  }

  render() {
    return (
      <ul>
        {this.state.students.map((student) => (
          <li key={student.id}>{student.firstName}</li>
        ))}
      </ul>
    );
  }
}
