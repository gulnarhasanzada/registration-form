import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const RegistrationForm = ({ formObj, setFormObj}) => {
  // const [formObj, setFormObj] = useState({
  //   email: '',
  //   password: '',
  //   city: '',
  //   type: '',
  //   check: false
  // })

  const handleChange = (e)=>{
    // if(e.target.name === 'check'){
    //   setFormObj({...formObj, [e.target.name]: e.target.checked})
    // }else{
    //   setFormObj({...formObj, [e.target.name]: e.target.value})
    // }
    const value = e.target.name === 'check'? e.target.checked : e.target.value
    setFormObj({...formObj, [e.target.name]: value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    setFormObj({
      email: '',
      password: '',
      city: '',
      type: '',
      check: false
    })
  }


  return (
    <Container>
      <h1>Registration Form</h1>
      <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={formObj.email} placeholder="Enter email" onChange={handleChange}/>
          </Form.Group>   
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" value={formObj.password} placeholder="Password" onChange={handleChange}/>
          </Form.Group>
        </Col>
      </Row>
      <Row>
      <Col>
          <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control placeholder="Enter city" name="city" value={formObj.city} onChange={handleChange}/>
          </Form.Group>
      </Col>
      <Col>
        <Form.Group className="mb-3">
            <Form.Label>Type</Form.Label>
            <Form.Select name="type" value={formObj.type} onChange={handleChange}>
              <option></option>
              <option>Full Time</option>
              <option>Part Time</option>
            </Form.Select>
          </Form.Group>
      </Col>
      </Row>
      <Row>
        <Col>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" name="check" checked={formObj.check} onChange={handleChange}/>
          </Form.Group>
        <Button variant="primary" type="submit">Sign in</Button>
        </Col>
      </Row>
      </Form>
    </Container>
    
  )
}

export default RegistrationForm
