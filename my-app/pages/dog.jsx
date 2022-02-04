const Dog = (props) => {
    
    return (
        <div class="card" style="width: 18rem;">
        {/* <div>
            <label for="favorite" class="custom-checkbox">
                <input type="checkbox" id="favorite"/>
                <i class="glyphicon glyphicon-star-empty"></i>
                <i class="glyphicon glyphicon-star"></i>
            </label>
        </div> */}
            <img src="" class="card-img-top" alt="" />
            <div class="card-body">
                <h5 class="card-title">{props.dog.name}</h5>
                <p class="card-text">{props.dog.age}</p>
                <a href="#" class="btn btn-primary">View Me!</a>
            </div>
        </div>
    )
}

export default Dog;