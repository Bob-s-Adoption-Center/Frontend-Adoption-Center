import Link from 'next/link';



const Dog = ({dog}) => {

    return (
        <div className="container">
            <style jsx>{`
                .container {
                    flex-direction: row;
                }
                .card {
                    width: 18rem;
                    border: 2px solid black; 
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 20px;
                }
            `}</style>
            <div className="row">
                <div className="card"> 
                <div className="card col-sm"> <style jsx>{`
                    .container {
                        display: flex;
                        flex-direction: grid;
                    }
                    .card {
                        width: 18rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin: 15px;
                        border: 2px solid black;
                    }
                    `}</style>
                    {/* <div>
                    <label for="favorite" class="custom-checkbox">
                        <input type="checkbox" id="favorite"/>
                        <i class="glyphicon glyphicon-star-empty"></i>
                        <i class="glyphicon glyphicon-star"></i>
                    </label> 
                </div> */}
                    <img src={dog.image} className="card-img-top" alt={"photo of a " + dog.color + " " + dog.breed + " named " + dog.name} />
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
        </div>
        </div>
    )
}

export default Dog;