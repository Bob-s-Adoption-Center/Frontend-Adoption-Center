import '../pages/_app'

const card = ({dogs, results}) => {
    return (
<div className="card">
  <img src={results[0].photos['full']} className="card-img-top" alt="No image" />
  <div className="card-body">
    <h5 className="card-title">Name: {results[0].name}</h5>
    <p className="card-text">Gender: {results[0].gender}</p>
    <p className="card-text">Breed: {results[0].breeds['primary']}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    )
}

export default card;