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
      show:false,
      firstName:'',
      lastName:'',
      grade:''
    };
  }

  componentDidMount() {
    this.getData()
  }
  getData(){
    axios.get(`/api/getAllStudents`).then((res) => {
      const students = res.data;
      this.setState({ students });
    });
  }

  save=()=> {
    axios.post("api/addStudent", {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        grade: this.state.grade,
      },).then(data=>{
        if(data != null){
          this.getData()
          this.close()
        }
      })
  }
  add= () => {
    console.log("CLICKED ADD")
    this.setState({show:true})
    // setInterval(console.log("state", this.state),5000)
    
  }
  handleChange=(event)=> {
    let name = event.target.name
    this.setState({[name]:event.target.value});
  }
  close = () => {
    this.setState({show:false})
  }

  render() {
    return (
      <Container>
        <Row>
          <Col sm="10" md="9">
            <h1 id="sd">Student Dashboard</h1>
          </Col>
          <Col id="logOut">
            <Button type="submit" variant="dark">
              Log Out
            </Button>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md="6"></Col>
          <Col>
            <Button onClick={this.add}>Add</Button>
          </Col>
          <Col>
            <Button type="submit" variant="danger">
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
        <Modal show={this.state.show} onHide={this.close}>
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
              <Button
                variant="success"
                type="submit"
                onClick={this.save}
              >
                Submit
              </Button>
              <Button variant="danger" onClick={this.close}>
                Cancel
              </Button>
            </Modal.Footer>
          </Modal>
      </Container>
    );
  }
}
export default StudentList