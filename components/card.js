import '../pages/_app';
import Image from 'next/image';

const Card = ({dogs, results}) => {
    return (
<div className="card">
  <Image src={results[0].photos['full']} className="card-img-top" alt="No image"></Image>
  <div className="card-body">
    <h5 className="card-title">Name: {results[0].name}</h5>
    <p className="card-text">Gender: {results[0].gender}</p>
    <p className="card-text">Breed: {results[0].breeds['primary']}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    )
}

export default Card;