import {useRouter} from 'next/router'

const puppies = () => {

const router = useRouter();
const dogId = router.query.dogId;

    return (
        <div className="container-fluid">
            <main>
                <header>
                    <nav>
                        <ul className="nav justify-content-space-between">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Contact Us!</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                        </ul>
                    </nav>
                    <h1>View Adoptable Pets!</h1>
                </header>
                    <div className="card" style="width: 18rem;">
                        {/* <div>
                            <label for="id-of-input" className="custom-checkbox">
                                <input type="checkbox" id="favorite"/>
                                <i className="glyphicon glyphicon-star-empty"></i>
                                <i className="glyphicon glyphicon-star"></i>
                            </label>
                        </div> */}
                        <img src="" className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Bob</h5>
                            <p className="card-text">Pug Male Adult</p>
                            <a href="#" className="btn btn-primary">View Me!</a>
                        </div>
                    </div>
            </main>
        </div>    
    )
}

export default dogs;