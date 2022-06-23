import Link from 'next/link';
import { Card, Row, Col, Container } from "react-bootstrap";
import React, {useState,useEffect} from 'react';
import Image from "react-bootstrap/Image";
import Footer from "../components/footer";
import NavbarDogs from '../components/navbarDogs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const Dogs = () => {
        let placeholder = 'http://holder.js/100px180';

        const imagestyle = {
            maxWidth: '100%',
            maxHeight: '100%',
            marginTop: '10px',
            width: '200px',
            height: '200px',
            border: '2px solid whitesmoke',
        };

        const favstyle = {
            // position: 'absolute',
            // top: '0px',
            // right: '0px',
            alignSelf: 'flex-end'
        };

        const cardBody = {
            display:'flex',
            flexDirection:'column',
            
        };

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

        const [dogState, setDogState] = useState([]);

        const fetchAllDogs = async () => {
            const res = await fetch(`https://bob-s-adoption-center.herokuapp.com/dogs`);
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
                    backgroundColor: '#FFFFFF',
                 }}>
                    <NavbarDogs />
                    <Image 
                        src={"https://www.pet-insurance.co.uk/images/bravo/homepage-banner-dog.jpg"} 
                        alt={"image of two dogs running through a grass field"}
                        style={{
                            width: '100%',
                            marginTop: '55px',
                            borderBottom: '20px solid #83D9DB'
                        }} />
                    <Container 
                        style={{ 
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: '20px',
                            paddingTop: '50px'
                        }}>
                        <Row>
                            {dogState.map((dog) => (
                            <Col key={dog.id} dog={dog} xs={12} md={4} lg={3} style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}>
                                <Card style={{ 
                                    width: '18rem', 
                                    height: '26rem',
                                    margin: '15px',
                                    boxShadow: '1px 2px 5px grey'
                                    }}>
                                    <Card.Header style={{ 
                                        height: '15rem',
                                        textAlign: 'center',
                                        backgroundColor: '#83D9DB',
                                    }}>
                                        <Image 
                                            src={dog.image ? dog.image : placeholder} 
                                            alt={"photo of a " + dog.color + " " + dog.breed + " named " + dog.name}
                                            style={ imagestyle }
                                            onLoad={handleImageLoad}
                                            roundedCircle/>
                                    </Card.Header>
                                    <Card.Body style={ cardBody }>
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between'
                                            }}>
                                            <Card.Title as="h2">{dog.name}</Card.Title>
                                            <FontAwesomeIcon icon={faHeart}/>
                                        </div>
                                        <div>
                                            <Card.Text style={{ cardBody }}>
                                                {dog.age} {dog.gender} {dog.breed}
                                                <br></br> 
                                                {dog.description.substring(0, 50)}...
                                                <span>
                                                    <Link href={{
                                                        pathname: '/dogDetail/',
                                                        query: { dogId: dog.id },
                                                    }}>
                                                        <a style={{ color: "black" }}>See more</a>
                                                    </Link>
                                                </span>   
                                                
                                            </Card.Text>
                                        </div>
                                        <div style={{ 
                                            display:'flex',
                                            flexDirection:'column',
                                            marginTop: '10px' }}>
                                            <Link href={{
                                                pathname: '/dogDetail/',
                                                query: { dogId: dog.id },
                                            }}>
                                                <a className="btn view-btn" style={{ width: '75%', margin: 'auto' }}>View Me!</a>
                                            </Link>
                                        </div>
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

