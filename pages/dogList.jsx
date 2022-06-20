import React, {useState,useEffect} from 'react';
import Footer from '../components/footer';
import NavbarDogs from '../components/navbarDogs';
import Dog from "./dog";


function DogList() {
        //run BACKEND SERVER
        //fetch dogs from api, store in state, then map through them

    const [allDogState, setAllDogState] = useState([]);

    const fetchAllDogs = async () => {
        const res = await fetch(`https://bob-s-adoption-center.herokuapp.com/dogs`);
        console.log(res)
        const data = await res.json();
        console.log(data.dogs);
        setAllDogState(data.dogs);
    }
    
    useEffect(() => {
        fetchAllDogs();
        }, []);

    return (
        <> 
        <NavbarDogs />
        <div>
            {allDogState.map((dog) => {
                return <Dog key={dog.id} dog={dog}/>
            })}
        </div>

        <Footer />

        </>
    );

}

export default DogList;