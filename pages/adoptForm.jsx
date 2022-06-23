import React, { useState, Component, Fragment, useEffect } from 'react';
import {Form, Row, Col, Button} from 'react-bootstrap'
// import Jumbotron from 'react-bootstrap/Jumbotron'
import NavbarDogs from '../components/navbarDogs';
import Footer from '../components/footer';
import { useRouter } from 'next/router';
import Image from 'next/image';



function AdoptForm() {

    //set an initial state for the form
    const initialState = {name:""}
    const router = useRouter();
    
    const {formByDogID} = router.query;
    
    const [formState, setFormState]= useState(initialState)
    const [dogState, setDogState] = useState({name: "", image: ""});
    



useEffect(() => {
  const fetchDogDetail = async () => {
      try {
        const res = await fetch(`https://bob-s-adoption-center.herokuapp.com/dogs/${formByDogID}`, {
            method: 'GET'
        });
        const data = await res.json();
        setDogState(data.dog);
        console.log(data.dog)
      } catch(err) {
        console.log(err);
      }
    }
  }, [formByDogID]);



const handleImageLoad = (event) => {
  const imageHeight = event.target.clientHeight;
  const imageWidth = event.target.clientWidth;
 

  if (imageHeight > imageWidth) {
      event.target.className="circular--portrait"
  }else if(imageHeight < imageWidth) {
      event.target.className="circular--landscape"
  }else {
      event.target.className="circular--square"
  }
}  

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

    const postAdopt = async () => {
        await fetch(`https://bob-s-adoption-center.herokuapp.com/newInquiry`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: formState.name,
                
            })
        })
        
    }


    return (
        <>
        <NavbarDogs/>
        <section className="formBanner">
          <div className="dog-img">
              <Image 
                  id="profile-img"
                  src={dogState.image} 
                  alt={"photo of a dog named " + dogState.name}
                  onLoad={handleImageLoad}
              />
          </div>

          <h2 className="name">{dogState.name}</h2>
        </section>

        <section className="form" id="howToAdopt">
          <h1>Thank you for wanting to bring {dogState.name} into their furr-ever home!</h1>
          <p>We&apos;re sure you are a match perfect for eachother. You may stop by during regular operating hours anytime to bond with your new pup. we ask that you call ahead when looking for a specific animal to make sure you don&apos;t arrive while they are in clinic. All dogs will be vaccinated and micro-chipped upon time of adoption. Dogs older than two years will be spayed and neutered. If your adoptee is under two, you may bring them in after they are fully grown to be spayed and neutered for free. All dogs are currently free to adopt, however we do accept donations to help offset opperating costs. Please fill out your information for a background check below so we can begin the approval process. Upon approval, we will reach out to schedule an interview and meet and greet with {dogState.name}.</p>
        </section>

        <div id="formBody">
        <Form className="adoptForm" onSubmit={handleSubmit}>
        <div className="formSection">
        <h3>Contact Information</h3>
        <p>Complete the questionaire below to begin this adoption inquiry.</p>
        <br/>
        <br/>
        <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridFname">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" placeholder="First Name" onChange={handleChange}/>
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
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
        <option value="AR">Arkansas</option>
        <option value="CA">California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="DE">Delaware</option>
        <option value="DC">District Of Columbia</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="HI">Hawaii</option>
        <option value="ID">Idaho</option>
        <option value="IL">Illinois</option>
        <option value="IN">Indiana</option>
        <option value="IA">Iowa</option>
        <option value="KS">Kansas</option>
        <option value="KY">Kentucky</option>
        <option value="LA">Louisiana</option>
        <option value="ME">Maine</option>
        <option value="MD">Maryland</option>
        <option value="MA">Massachusetts</option>
        <option value="MI">Michigan</option>
        <option value="MN">Minnesota</option>
        <option value="MS">Mississippi</option>
        <option value="MO">Missouri</option>
        <option value="MT">Montana</option>
        <option value="NE">Nebraska</option>
        <option value="NV">Nevada</option>
        <option value="NH">New Hampshire</option>
        <option value="NJ">New Jersey</option>
        <option value="NM">New Mexico</option>
        <option value="NY">New York</option>
        <option value="NC">North Carolina</option>
        <option value="ND">North Dakota</option>
        <option value="OH">Ohio</option>
        <option value="OK">Oklahoma</option>
        <option value="OR">Oregon</option>
        <option value="PA">Pennsylvania</option>
        <option value="RI">Rhode Island</option>
        <option value="SC">South Carolina</option>
        <option value="SD">South Dakota</option>
        <option value="TN">Tennessee</option>
        <option value="TX">Texas</option>
        <option value="UT">Utah</option>
        <option value="VT">Vermont</option>
        <option value="VA">Virginia</option>
        <option value="WA">Washington</option>
        <option value="WV">West Virginia</option>
        <option value="WI">Wisconsin</option>
        <option value="WY">Wyoming</option>
  

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
  <p>Verifiable ID required for adoption process.</p>
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
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
        <option value="AR">Arkansas</option>
        <option value="CA">California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="DE">Delaware</option>
        <option value="DC">District Of Columbia</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="HI">Hawaii</option>
        <option value="ID">Idaho</option>
        <option value="IL">Illinois</option>
        <option value="IN">Indiana</option>
        <option value="IA">Iowa</option>
        <option value="KS">Kansas</option>
        <option value="KY">Kentucky</option>
        <option value="LA">Louisiana</option>
        <option value="ME">Maine</option>
        <option value="MD">Maryland</option>
        <option value="MA">Massachusetts</option>
        <option value="MI">Michigan</option>
        <option value="MN">Minnesota</option>
        <option value="MS">Mississippi</option>
        <option value="MO">Missouri</option>
        <option value="MT">Montana</option>
        <option value="NE">Nebraska</option>
        <option value="NV">Nevada</option>
        <option value="NH">New Hampshire</option>
        <option value="NJ">New Jersey</option>
        <option value="NM">New Mexico</option>
        <option value="NY">New York</option>
        <option value="NC">North Carolina</option>
        <option value="ND">North Dakota</option>
        <option value="OH">Ohio</option>
        <option value="OK">Oklahoma</option>
        <option value="OR">Oregon</option>
        <option value="PA">Pennsylvania</option>
        <option value="RI">Rhode Island</option>
        <option value="SC">South Carolina</option>
        <option value="SD">South Dakota</option>
        <option value="TN">Tennessee</option>
        <option value="TX">Texas</option>
        <option value="UT">Utah</option>
        <option value="VT">Vermont</option>
        <option value="VA">Virginia</option>
        <option value="WA">Washington</option>
        <option value="WV">West Virginia</option>
        <option value="WI">Wisconsin</option>
        <option value="WY">Wyoming</option>
      </Form.Select>
    </Form.Group>
  </Row>

  </div>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check for Adoption Updates" />
  </Form.Group>

  <Button type="submit" id="formBtn">
    Submit
  </Button>
</Form>
</div>
<Footer/>

        </>
    );
}

export default AdoptForm;

