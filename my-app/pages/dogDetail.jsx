import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

function DogDetail() {
   
    const router = useRouter();
    const { dogId } = router.query;
   
    //use state for data fetch or form submission (because handle change)
    const [dogState, setDogState] = useState({});

    const fetchDogDetail = async () => {
        try {
            const res = await fetch(`http://localhost:3001/dogs/${dogId}`, {
                method: 'GET'
            });
            const data = await res.json();
            setDogState(data.dog);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchDogDetail();
        }, [dogId]);


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
        
    return (
        dogState
        ?


            <div className="body">
                <section className="hero is-primary">
                    <Link href="/Dogs"><a id="backLink">Back to Dogs</a></Link>
                    <div className="profile-top">
                        <h1 className="pageHeading">Adopt Me! {dogState.status}</h1>


                        <div className="dog-img">
                            <img 
                                id="profile-img"
                                src={dogState.image} 
                                alt={"photo of a " + dogState.color + " " + dogState.breed + " named " + dogState.name}
                                onLoad={handleImageLoad}
                            />
                        </div>

                        <h2>{dogState.name}</h2>
                    </div>
                </section>
                {/* <h2 className="sectionTag">Availability:</h2>
                <p>{dogState.status}</p> */}
                <hr></hr>

                <h2 className="sectionTag">About Me:</h2>
                <p>{dogState.description} <span>You can find me located at: {dogState.location}.</span></p>

                <h2 className="sectionTag">Additional Details:</h2>

                <div className="row">
                    <div className="col-sm-6">
                        <div className="card text-center" >
                            <div className="card-body">
                                <svg width="100" height="100">
                                    <circle cx="50" cy="50" r="20" />
                                </svg>
                                <h5 className="card-title">Pet Adoption ID:</h5>
                                <p className="card-text">{dogState.id}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card text-center" >
                            <div className="card-body">
                                <svg width="100" height="100">
                                    <circle cx="50" cy="50" r="20" />
                                </svg>
                                <h5 className="card-title">Breed:</h5>
                                <p className="card-text">{dogState.breed}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card text-center" >
                            <div className="card-body">
                                <svg width="100" height="100">
                                    <circle cx="50" cy="50" r="20" />
                                </svg>
                                <h5 className="card-title">Age:</h5>
                                <p className="card-text">{dogState.age}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card text-center" >
                            <div className="card-body">
                                <svg width="100" height="100">
                                    <circle cx="50" cy="50" r="20" />
                                </svg>
                                <h5 className="card-title">Gender:</h5>
                                <p className="card-text">{dogState.gender}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card text-center" >
                            <div className="card-body">
                                <svg width="100" height="100">
                                    <circle cx="50" cy="50" r="20" />
                                </svg>
                                <h5 className="card-title">Size:</h5>
                                <p className="card-text">{dogState.size}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card text-center" >
                            <div className="card-body">
                                <svg width="100" height="100">
                                    <circle cx="50" cy="50" r="20" />
                                </svg>
                                <h5 className="card-title">Color:</h5>
                                <p className="card-text">{dogState.color}</p>
                            </div>
                        </div>
                    </div>
                </div> 

            </div>
        :
        <p>woof! woof! loading...</p>
       
    );
}


export default DogDetail;