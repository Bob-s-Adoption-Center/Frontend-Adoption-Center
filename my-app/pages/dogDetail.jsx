import { Link, useParams } from 'react-router-dom';

function DogDetail() {
    const { dogId } = useParams();

    const [dogState, setDogState] = useState({});

    const fetchDogDetail = async () => {
        const res = await fetch(`http://localhost:3001/api/dogs/${dogId}`);
        const data = await res.json();
        setDogState(data);
    }
    return (
        <div>
            <h1>Dog Detail</h1>
            <p>Dog ID: {dogId}</p>
            <Link to="/dogs">Back to Dogs</Link>
        </div>
    );
}