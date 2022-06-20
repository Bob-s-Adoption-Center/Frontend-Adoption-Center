import Link from "next/link";

// This function maps through all backend dog objects given the specified data

//dogs is the array within the database while dog serves as the shorthand data attirbute to access the array of dogs

//Consider using a different method than map to find a single dog from the dog array such as findOne() or filter()
// {dogs.map((dog) => (
//     <div>
//         <p key={dog.id}>{dog.name}</p>
//         {/* <img key={dog.image} src={dog.image}></img> */}
//     </div>
//  ))}
<Link href="/dogs">
  <a>Back to Dogs</a>
</Link>;

const profile = ({ dogs }) => {
  return (
    <div className="container-fluid">
      <header>
        <nav>
          <ul>
            <li>
              <a>Contact Us</a>
            </li>
            <li>
              <a>Home</a>
            </li>
          </ul>
        </nav>
      </header>
      <body>
        <div className="profile-top">
          <h1>Adopt Me!</h1>
          <img className="dog-img" alt="cute dog" />
          {/* Martin's code snippit was below inside the h2 tag */}
          <h2>
            Dog's Name
            {/* {dogs.map((dog) => (
    <div>
        <p key={dog.id}>{dog.name}</p> */}
            {/* <img key={dog.image} src={dog.image}></img> */}
            {/* </div>
    ))}   */}
          </h2>
        </div>
        <h2>About Me:</h2>
        <p>Bob is cool. (description)</p>
        <h2>Additional Details:</h2>

        <div className="row">
          <div className="col-sm-6">
            <div className="card text-center">
              <div className="card-body">
                <svg width="100" height="100">
                  <circle cx="50" cy="50" r="40" />
                </svg>
                <h5 className="card-title">Pet Adoption ID:</h5>
                <p className="card-text">A10651991</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card text-center">
              <div className="card-body">
                <svg width="100" height="100">
                  <circle cx="50" cy="50" r="40" />
                </svg>
                <h5 className="card-title">Breed:</h5>
                <p className="card-text">Pug</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card text-center">
              <div className="card-body">
                <svg width="100" height="100">
                  <circle cx="50" cy="50" r="40" />
                </svg>
                <h5 className="card-title">Age:</h5>
                <p className="card-text">Adult</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card text-center">
              <div className="card-body">
                <svg width="100" height="100">
                  <circle cx="50" cy="50" r="40" />
                </svg>
                <h5 className="card-title">Gender:</h5>
                <p className="card-text">Male</p>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default profile;
