import React, {useState,useEffect} from 'react';
import Dog from "./dog";

function DogList() {
        //run BACKEND SERVER
        //fetch dogs from api, store in state, then map through them

    const [allDogState, setAllDogState] = useState({});

    const fetchAllDogs = async () => {
        const res = await fetch(`http://localhost:3001/dogs`);
        const data = await res.json();
        console.log(data);
        setAllDogState(data);
    }
    
    useEffect(() => {
        fetchAllDogs();
        }, []);

    return (

        <div>
            {allDogState.map((dog) => {
                //see if different in next.js
                return <Dog key={dog.id} dog={dog}/>
            })}
        </div>
    );
}

export default DogList;