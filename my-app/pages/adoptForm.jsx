import React, { useState, Component, Fragment } from 'react';
import Form from 'react-bootstrap/Form'


function adoptForm(props) {

    //set an initial state for the form
    const initialState = {name:"", image:""}

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
        postSauce()

        //reset form
        setFormState(initialState)
    }

    //create new sauce in database
    const postSauce = async () => {
        await fetch(`http://localhost:3000/new-sauce`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: formState.name,
                image: formState.image
            })
        })
        window.location.assign('/dogs')
    }


    return (
        <>
        {/* <h2>How may we contact you?</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="fname">First Name:</label>
            <input type="text" id="fname" name="fname" required onChange={handleChange}/><br/>
            <label htmlFor="lname">Last Name:</label>
            <input type="text" id="lname" name="lname" required onChange={handleChange}/><br/>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required onChange={handleChange}/><br/>
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" required onChange={handleChange}/><br/>
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" required onChange={handleChange}/><br/>
            <label htmlFor="city">City:</label>
            <input type="text" id="city" name="city" required onChange={handleChange}/><br/>
            <label htmlFor="state">State:</label>
            <input type="text" id="state" name="state" required onChange={handleChange}/><br/>
            <label htmlFor="zip">Zip:</label>
            <input type="text" id="zip" name="zip" required onChange={handleChange}/><br/>
            <label htmlFor="birthday">Birthday:</label>
            <input type="date" id="birthday" name="birthday" required onChange={handleChange}/><br/>

            <button type="submit">Submit Adoption Application</button>
        </form> */}
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
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

        <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
            Submit
        </Button>
</Form>
        </>
    );
}

export default adoptForm;