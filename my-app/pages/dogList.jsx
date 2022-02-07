import React, {useState,useEffect} from 'react';
import Dog from "./dog";

function DogList() {
        //run BACKEND SERVER
        //fetch dogs from api, store in state, then map through them

    const [allDogState, setAllDogState] = useState([]);

    const fetchAllDogs = async () => {
        const res = await fetch(`http://localhost:3001/dogs`);
        console.log(res)
        const data = await res.json();
        console.log(data.dogs);
        setAllDogState(data.dogs);
    }
    
    useEffect(() => {
        fetchAllDogs();
        }, []);

    return (

        <div>
            {allDogState.map((dog) => {
                return <Dog key={dog.id} dog={dog}/>
            })}
        </div>
    );
}

export default DogList;