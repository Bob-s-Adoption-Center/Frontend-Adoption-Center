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

    const imgRef = React.useRef();    

    
    return (
        dogState
        ?

            <div>
                <Link href="/dogs"><a id="backLink">Back to Dogs</a></Link>
                <div className="profile-top">
                    <h1>Adopt Me!</h1>
                    <div>
                    {(() => {
                        if (dogState.Image) {
                        return (
                            <div class="circular--landscape">
                                <img class="circular--square" ref={imgRef} src={dogState.image} alt={"photo of a " + "dogState.color" + " " + dogState.breed + " named " + dogState.name}/>
                            </div>
                        )
                        } else if (otherCase) {
                        return (
                            <div class="circular--portrait">
                                <img class="circular--square" src={dogState.image} alt={"photo of a " + "dogState.color" + " " + dogState.breed + " named " + dogState.name}/>
                            </div>
                        )
                        } else {
                        return (
                            <div class="circular--square">
                                <img class="circular--square" src={dogState.image} alt={"photo of a " + "dogState.color" + " " + dogState.breed + " named " + dogState.name}/>
                            </div>
                        )
                        }
                    })()}
                    </div>
                    {/* <div class="circular--landscape">
                        <img class="circular--square" src={dogState.image} alt={"photo of a " + "dogState.color" + " " + dogState.breed + " named " + dogState.name}/>
                    </div> */}

                    <h2>{dogState.name}</h2>
                </div>

                <h2 className="sectionTag">About Me:</h2>
                <p>{dogState.description}</p>

                <h2 className="sectionTag">Additional Details:</h2>

                 <div className="row">
                <div className="col-sm-6">
                    <div className="card text-center" >
                        <div className="card-body">
                            <svg width="100" height="100">
                                <circle cx="50" cy="50" r="40" />
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
                                <circle cx="50" cy="50" r="40" />
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
                                <circle cx="50" cy="50" r="40" />
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
                                <circle cx="50" cy="50" r="40" />
                            </svg>
                            <h5 className="card-title">Gender:</h5>
                            <p className="card-text">{dogState.gender}</p>
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