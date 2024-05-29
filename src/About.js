// src/About.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css'; 
import myImage from './myImage.jpg'; 

function About() {
  return (
    <Container id="about" className="my-5">
      <Row>
        <Col md={4}>
        <img src={myImage} alt="My Image" className="img-fluid rounded-small-image" />
        </Col>
        <Col md={8}>
          <h2>About Me</h2>
          <p>Hi, I'm Nishant Deore, a passionate and motivated software developer with a strong foundation in React, Java, and Python. As a recent graduate, I am eager to apply my skills and knowledge to real-world projects and contribute to a dynamic team.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
