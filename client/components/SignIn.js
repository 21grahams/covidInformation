import React, { useState } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SignIn(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const validate = () => {
    let nameError = '';
    let emailError = '';
    
    if (!name) {
      nameError = 'name cannot be blank'
    }
    if (!email.includes('@') || !email.includes('.')) {
      emailError = 'invalid email'
    }
    if (emailError || nameError) {
      setNameError(nameError);
      setEmailError(emailError);
      return false;
    }
    return true;
  }
  
  const handleSubmit = (e) => {
    let nameError = '';
    let emailError = '';
    e.preventDefault();
  
    let login = {
      name: name,
      email: email
    };

    const isValid = validate();
    if (isValid) {
      axios.post('/userInfo', login)
      .then(res => alert('Thank you for joining!'))
      .catch(err => console.log('Error With Registration', err));
      props.onHide();
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Smith" />
          </Form.Group>
         
          <p style={{color: 'red'}}>{nameError}</p>
          
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" />
          </Form.Group>
          
          <p style={{color: 'red'}}>{emailError}</p>
          
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>Close</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SignIn;
