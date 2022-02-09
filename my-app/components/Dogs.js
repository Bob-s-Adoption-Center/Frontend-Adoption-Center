import {useRouter} from 'next/router'

const puppies = () => {

const router = useRouter();
const dogId = router.query.dogId;

    return (
        <div class="container-fluid">
            <main>
                <header>
                    <nav>
                        <ul class="nav justify-content-space-between">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Contact Us!</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Home</a>
                            </li>
                        </ul>
                    </nav>
                    <h1>View Adoptable Pets!</h1>
                </header>
                    <div class="card" style="width: 18rem;">
                        {/* <div>
                            <label for="id-of-input" class="custom-checkbox">
                                <input type="checkbox" id="favorite"/>
                                <i class="glyphicon glyphicon-star-empty"></i>
                                <i class="glyphicon glyphicon-star"></i>
                            </label>
                        </div> */}
                        <img src="" class="card-img-top" alt="" />
                        <div class="card-body">
                            <h5 class="card-title">Bob</h5>
                            <p class="card-text">Pug Male Adult</p>
                            <a href="#" class="btn btn-primary">View Me!</a>
                        </div>
                    </div>
            </main>
        </div>    
    )
}

export default dogs;