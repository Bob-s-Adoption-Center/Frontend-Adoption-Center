import Link from 'next/link';



const Dog = ({dog}) => {

    return (
        <div className="container">
            <div className="card"> <style jsx>{`
            .card {
            width: 18rem;
            }
        `}</style>
                {/* <div>
                <label for="favorite" class="custom-checkbox">
                    <input type="checkbox" id="favorite"/>
                    <i class="glyphicon glyphicon-star-empty"></i>
                    <i class="glyphicon glyphicon-star"></i>
                </label> 
            </div> */}
                <img src={dog.image} className="card-img-top" alt={"photo of a " + "dog.color" + " " + dog.breed + " named " + dog.name} />
                <div className="card-body">
                    <h5 className="card-title">{dog.name}</h5>
                    <p className="card-text">{dog.age}</p>
                    <Link href={{
                        pathname: '/dogDetail/',
                        query: { dogId: dog.id },
                    }}>
                        <a className="btn btn-primary">View Me!</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Dog;