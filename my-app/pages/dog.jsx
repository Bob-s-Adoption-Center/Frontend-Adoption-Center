import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';


const Dog = ({dog}) => {

    return (
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
            <img src="" className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{dog.name}</h5>
                <p className="card-text">{dog.age}</p>
                <a href="#" className="btn btn-primary">View Me!</a>
            </div>
        </div>
    )
}

export default Dog;