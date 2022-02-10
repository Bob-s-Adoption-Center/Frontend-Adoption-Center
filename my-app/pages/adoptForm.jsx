import React, { useState, Component, Fragment } from 'react';
import {Form, Row, Col, Button} from 'react-bootstrap'
// import Jumbotron from 'react-bootstrap/Jumbotron'



function adoptForm(props) {

    //set an initial state for the form
    const initialState = {name:""}

    //store the sauce form in state
    const [formState, setFormState]= useState(initialState)

    //update name state when an input changes
    const handleChange = (e) => {
        setFormState({...formState, [e.target.id]: e.target.value})
    }

    //handle form submission
    const handleSubmit = (e) => {
        //prevent the page from refreshing on submit
        e.preventDefault()

        //create new sauce in database
        postAdopt()

        //reset form
        setFormState(initialState)
    }

    //create new sauce in database
    const postAdopt = async () => {
        await fetch(`http://localhost:3000/adoptForm`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: formState.name,
                
            })
        })
        window.location.assign('/adoptForm')
    }


    return (
        <>
        {/* <Jumbotron>
            <h1>Hello, world!</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p>
            <p>
                <Button bsStyle="primary">Learn more</Button>
            </p>
        </Jumbotron>; */}
        <Form className="adoptForm">
        <div className="formSection">
        <h3>Contact Information</h3>
        <p3>Complete the questionaire below to begin this adoption inquiry.</p3>
        <br/>
        <br/>
        <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridFname">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" placeholder="First Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridLname">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" placeholder="Last Name" />
    </Form.Group>
  </Row>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridBirthday">
      <Form.Label>Birthday</Form.Label>
      <Form.Control type="date" placeholder="" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formPhone">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control placeholder="214.222.3333" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

  </div>

  <div className="formSection">
  <Row className="mb-3">
  <h3>Background Check Information</h3>
  <p3>Verifiable ID required for adoption process.</p3>
  <br/>
  <br/>
    <Form.Group as={Col} controlId="formGridDocID">
      <Form.Label>Document ID #</Form.Label>
      <Form.Control type="text" placeholder="Enter liscense ID" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Issuing State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>
  </Row>

  </div>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check for Adoption Updates" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

        </>
    );
}

export default adoptForm;

