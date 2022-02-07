import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

                {/* {dogs.map((dog) => (
            <div>
                <p key={dog.id}>{dog.name}</p> */}
                {/* <img key={dog.image} src={dog.image}></img> */}
            {/* </div>
            ))}   */}
 

function DogDetail(dog) {
    //const { dogId } = useParams();
    const router = useRouter();
    const { dogId } = router.query;
   

    const [dogState, setDogState] = useState({});

    // const fetchDogDetail = async () => {
    //     const res = await fetch(`http://localhost:3001/api/dogs/${dogId}`);
    //     const data = await res.json();
    //     setDogState(data);
    // }

    const getServerSideProps = async ({dogId}) => {
        try {
            const res = await fetch(`http://localhost:3001/dogs/${dogId}`, {
                method: 'GET'
            });
            console.log(res);

            const data = await res.json();
            console.log(data);

            setDogState(data.dog);
            console.log(data.dog);
        } catch(err) {
            console.log(err);
        }
    }




    useEffect(() => {
        getServerSideProps();
        }, [dogId]);
    
    return (
                
            <div>
           
                <div className="profile-top">
                    <h1>{dogId}</h1>
                    <h1>Adopt Me!</h1>
                    <img className="dog-img" alt="cute dog"/>
                    <h2>Dog's Name {dogState.name}</h2>
                </div>

                <h2>About Me:</h2>
                <p>{dogState.description}</p>

                <h2>Additional Details:</h2>

                <div className="row">
                <div className="col-sm-6">
                    <div className="card text-center" >
                        <div className="card-body">
                            <svg width="100" height="100">
                                <circle cx="50" cy="50" r="40" />
                            </svg>
                            <h5 className="card-title">Pet Adoption ID:</h5>
                            <p className="card-text">A10651991</p>
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
                            <p className="card-text">Pug</p>
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
                            <p className="card-text">Adult</p>
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
                            <p className="card-text">Male</p>
                        </div>
                    </div>
                </div>
            </div>


            </div>
       
    );
}

export default DogDetail;