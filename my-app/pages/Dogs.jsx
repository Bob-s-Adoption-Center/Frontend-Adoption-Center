import Link from 'next/link';
import { Card, Row, Col, Container } from "react-bootstrap";
import React, {useState,useEffect} from 'react';
import Image from "react-bootstrap/Image";

const Dogs = ({dog}) => {
        let className = 'card';
        let placeholder = 'holder.js/100px180';
        const imagestyle = {
            maxWidth: '100%',
            maxHeight: '100%',
        };
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
                <Container>
                    <Row>
                    {dogState.map((dog) => (
                        <Col key={dog.id} dog={dog} xs={12} md={4} lg={3}>
                            <Card style={{ 
                                width: '18rem', 
                                height: '25rem',
                                margin: '15px',
                                boxShadow: '2px 4px 10px black',
                                }}>
                                <Card.Header style={{ 
                                    height: '12rem',
                                    textAlign: 'center',
                                    backgroundColor: 'green',
                                 }}>
                                    <Image 
                                        src={dog.image ? dog.image : placeholder} 
                                        alt={"photo of a " + dog.color + " " + dog.breed + " named " + dog.name}
                                        style={ imagestyle }
                                        roundedCircle/>
                                </Card.Header>
                                <Card.Body>
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
                                        <a className="btn btn-success">View Me!</a>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                    </Row>
                </Container>
                
            )
}


export default Dogs; 