import Card from '../components/card';
import { useEffect, useState, useContext} from 'react'
import { AuthContext } from './_app'

const dogApi = () => {
    const [results, setResults] = useState(null);
    const accessToken = useContext(AuthContext);
    useEffect(() => {
        if (accessToken === null) return;
        const fetchPets = async () => {
            const petResults = await fetch('https://api.petfinder.com/v2/animals?type=Dog&limit=2', {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            const json = await petResults.json();
            setResults(json.animals);
        };
        fetchPets();
    }, [accessToken]);
    if (results === null) return null;
    return <Card results={results}/>;
};

export default dogApi;