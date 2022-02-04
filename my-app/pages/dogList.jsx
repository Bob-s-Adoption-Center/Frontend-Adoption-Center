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
        // <div>Hello World!</div>
//////Martin's code
        // {Dog.map(dog => (
        //     <div>
        //     <p key={dog.id}>{dog.name}</p>
        //     {/* <img key={dog.image} src={dog.image}></img> */}
        //     </div>
        // ))}
/////Michael's code
        <div>
            {allDogState.map((dog) => {
                //see if different in next.js
                return <Dog key={dog.id} dog={dog}/>
            })}
        </div>
    );
}

export default DogList;