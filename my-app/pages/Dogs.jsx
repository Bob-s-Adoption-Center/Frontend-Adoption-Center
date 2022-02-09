import Link from 'next/link';
import { Card, Row, Col, Container } from "react-bootstrap";
import React, {useState,useEffect} from 'react';
import Image from "react-bootstrap/Image";
import Footer from "../components/footer";
import NavbarDogs from '../components/navbarDogs';
import Favorite from "../components/favorite";

const Dogs = () => {
        let placeholder = 'holder.js/100px180';

        const imagestyle = {
            maxWidth: '100%',
            maxHeight: '100%',
            marginTop: '10px',
        };

        const handleImageLoad = (event) => {
            const imageHeight = event.target.clientHeight;
            const imageWidth = event.target.clientWidth;
            console.log(event)
    
            if (imageHeight > imageWidth) {
                event.target.className="circular--portrait"
            }else if(imageHeight < imageWidth) {
                event.target.className="circular--landscape"
            }else {
                event.target.className="circular--square"
            }


        }  

        const [dogState, setDogState] = useState([]);

        const fetchAllDogs = async () => {
            const res = await fetch(`http://localhost:3001/dogs`);
            console.log(res)
            const data = await res.json();
            console.log(data.dogs);
            setDogState(data.dogs);
        };

        useEffect(() => {
            fetchAllDogs();
        }, []);

            return (
                <div style={{ 
                    backgroundColor: '#FEFEE3',
                 }}>
                    <NavbarDogs />
                    <Container 
                        style={{ 
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: '20px',
                            paddingTop: '40px'
                        }}>
                        <Row>
                            {dogState.map((dog) => (
                            <Col className="container-fluid" key={dog.id} dog={dog} xs={12} md={4} lg={3}>
                                <Card style={{ 
                                    width: '18rem', 
                                    height: '25rem',
                                    margin: '15px',
                                    boxShadow: '1px 2px 5px black',
                                    }}>
                                    <Card.Header style={{ 
                                        height: '15rem',
                                        textAlign: 'center',
                                        backgroundColor: '#D9E3DA',
                                    }}>
                                        <Image 
                                            src={dog.image ? dog.image : placeholder} 
                                            alt={"photo of a " + dog.color + " " + dog.breed + " named " + dog.name}
                                            style={ imagestyle }
                                            onLoad={handleImageLoad}
                                            roundedCircle/>
                                    </Card.Header>
                                    <Card.Body>
                                        {/* <Favorite /> */}
                                        <Card.Title as="h2">{dog.name}</Card.Title>
                                        <Card.Text style={{
                                        }}>
                                            <p>{dog.age} {dog.gender} {dog.breed}    
                                            </p>
                                        </Card.Text>
                                        <Link href={{
                                            pathname: '/dogDetail/',
                                            query: { dogId: dog.id },
                                        }}>
                                            <a className="btn view-btn">View Me!</a>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                        </Row>
                    </Container>
                    <Footer />
                </div>
            )
}

export default Dogs; 

