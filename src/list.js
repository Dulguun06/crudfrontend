import React from "react";
import axios from "axios";
import {
  Button,
  Col,
  Container,
  Row,
  Table,
  Form,
  Modal,
} from "react-bootstrap";

class StudentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      show: false,
      showDel: false,
      showUpdate: false,
      firstName: "",
      lastName: "",
      grade: null,
      id: null,
    };
  }

  componentDidMount() {
    this.getData();
  }
  getData() {
    axios.get(`/api/getAllStudents`).then((res) => {
      const students = res.data;
      this.setState({ students });
    });
  }

  save = () => {
    axios
      .post("api/addStudent", {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        grade: this.state.grade,
      })
      .then((data) => {
        if (data != null) {
          this.getData();
          this.close();
        }
      });
  };
  deleteStudent = (id) => {
    axios.delete("api/service/deleteStudentById/" + id).then((data) => {
      if (data != null) {
        this.getData();
        this.close();
      }
    });
  };
  updateStudent = (id) => {
    axios
      .put("api/service/updateStudentById/" + id, {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        grade: this.state.grade,
      })
      .then((data) => {
        if (data != null) {
          this.getData();
          this.close();
        }
      });
  };
  add = () => {
    this.setState({ show: true });
  };
  delete = () => {
    this.setState({ showDel: true });
  };
  update = () => {
    this.setState({ showUpdate: true });
  };
  handleChange = (event) => {
    let name = event.target.name;
    this.setState({ [name]: event.target.value });
  };
  close = () => {
    this.setState({ show: false });
    this.setState({ showDel: false });
    this.setState({ showUpdate: false });
  };
  logOut = () => {
    window.location.href = "/login";
  };

  render() {
    return (
      <Container>
        <Row>
          <Col sm="10" md="9">
            <h1 id="sd">Student Dashboard</h1>
          </Col>
          <Col id="logOut">
            <Button type="submit" variant="dark" onClick={this.logOut}>
              Log Out
            </Button>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md="4"></Col>
          <Col>
            <Button onClick={this.add} variant="success">
              Add
            </Button>
          </Col>
          <Col>
            <Button onClick={this.update} variant="primary">
              Update
            </Button>
          </Col>
          <Col>
            <Button onClick={this.delete} variant="danger">
              Delete
            </Button>
          </Col>
        </Row>
        <br />
        <Table striped variant="dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map((student) => {
              return (
                <tr>
                  <td>{student.id}</td>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>{student.grade}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Modal
          show={this.state.show}
          onHide={this.close}
          className="glass-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>Student Detail</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group mb="3">
                <Form.Control
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <br />
              <Form.Group mb="3">
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <br />
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="grade"
                  placeholder="Grade"
                  value={this.state.grade}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="light" type="submit" onClick={this.save}>
              Submit
            </Button>
            <Button variant="light" onClick={this.close}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal
          show={this.state.showDel}
          onHide={this.close}
          className="glass-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>Delete Student</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group mb="3">
                <Form.Control
                  type="text"
                  name="id"
                  placeholder="Student id"
                  value={this.state.id}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="light"
              type="submit"
              onClick={(e) => this.deleteStudent(this.state.id)}
            >
              Delete
            </Button>
            <Button variant="light" onClick={this.close}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal
          show={this.state.showUpdate}
          onHide={this.close}
          className="glass-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>Update Student</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group mb="3">
                <Form.Control
                  type="text"
                  name="id"
                  placeholder="Student id"
                  value={this.state.id}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <br />
              <Form.Group mb="3">
                <Form.Control
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <br />
              <Form.Group mb="3">
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <br />
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="grade"
                  placeholder="Grade"
                  value={this.state.grade}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="light"
              type="submit"
              onClick={(e) => this.updateStudent(this.state.id)}
            >
              Submit
            </Button>
            <Button variant="light" onClick={this.close}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}

export default StudentList;
