// src/Skills.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Skills() {
  return (
    <Container id="skills" className="my-5">
      <h2>Skills</h2>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>React</Card.Title>
              <Card.Text>
                Proficient in building dynamic and responsive web applications using React. Experienced in creating reusable components, managing state effectively with hooks, and working with libraries such as Redux for state management.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Java</Card.Title>
              <Card.Text>
                Solid understanding of Java programming and backend development. Familiar with building APIs, working with frameworks like Spring Boot, and implementing object-oriented design principles.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Python</Card.Title>
              <Card.Text>
                Skilled in scripting, data analysis, and developing web applications with Python. Knowledgeable in using libraries and frameworks such as Django, Flask, Pandas, and NumPy.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Web Technologies</Card.Title>
              <Card.Text>
                Comfortable with HTML, CSS, and JavaScript. Understanding of modern web development practices and responsive design.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Databases</Card.Title>
              <Card.Text>
                Basic knowledge of SQL and experience with relational databases such as MySQL.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Version Control</Card.Title>
              <Card.Text>
                Proficient in using Git for version control, including working with branches and pull requests.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
