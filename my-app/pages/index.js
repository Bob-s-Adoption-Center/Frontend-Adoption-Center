import Head from "next/head";
import "../styles/Home.module.css";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 fw-normal">Punny headline</h1>
            <img
              src={"img/dog-banner.png"}
              className="img-fluid"
              alt="Responsive image"
            ></img>
            <p className="lead fw-normal">
              And an even wittier subheading to boot. Jumpstart your marketing
              efforts with this example based on Apple’s marketing pages.
            </p>
            <a className="btn btn-outline-secondary" href="#">
              Subscribe
            </a>
          </div>
          <div className="product-device shadow-sm d-none d-md-block"></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>

        <div
          className="d-md-flex flex-md-equal w-90 my-md-3 ps-md-3"
          id="foster"
        >
          <div className="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">BECOME A FOSTER HERO</h2>
              {/* <img src={"img/RockyandMe.jpg"} width="300" height="200"></img> */}
              <p className="lead">
                By fostering an animal in your home, you can prepare a homeless
                animal to be paired with a loving forever family. Change the
                life of an animal with a little extra TLC today.
              </p>
            </div>
            <div className="bg-light shadow-sm mx-auto"></div>
          </div>
          <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">VOLUNTEER TO HELP ANIMALS</h2>
              <p className="lead">
                Love animals? We’ve got a volunteer job for you, whether it’s
                working directly with animals, working behind the scenes or
                helping out at our next special event..
              </p>
              <button> Getting Started</button>
            </div>
            <div className="bg-dark shadow-sm mx-auto"></div>
          </div>
          <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">FIGHT ANIMAL CRUELTY</h2>
              {/* <img src={"img/howie.svg"} width="300" height="200"></img> */}
              <p className="lead">
                Our Animal Cruelty Investigations Unit helped more than 1,400
                animals last year. If you see an animal suffering in your
                neighborhood, speak up and help put a stop to cruelty and
                neglect.
              </p>
            </div>
            <div className="bg-dark shadow-sm mx-auto"></div>
          </div>
          <div className="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">CARE & TIPS</h2>
              {/* <img src={"img/alvan.svg"} width="300" height="200"></img> */}
              <p className="lead">
                You love your pet. Now learn all the best ways to care for him,
                from training tips to health and safety guidelines.
              </p>
            </div>
            <div className="bg-light shadow-sm mx-auto"></div>
          </div>
        </div>

        {/* trying another div here */}
        <h1>
          <p style={{ textAlign: "center", color: "purple" }}>
            Your Pet Adoption Journey
          </p>
        </h1>
        <div className="content-region__container content-region__container--center">
          <ul className="text-image-grid  text-image-grid--center">
            <li>
              <img
                src="https://theshelterpetproject.org/wp-content/uploads/2019/02/image-grid-search.png"
                alt=""
                width="500"
                height="365"
              ></img>
              <h6>Search</h6>
              <p>
                It's easy to find a dog or cat who's right for you at a shelter
                or rescue group. Simply enter your zip code above to start your{" "}
                <a href="/pet-search/">search</a>.
              </p>
            </li>
            <li>
              <img
                src="https://theshelterpetproject.org/wp-content/uploads/2019/02/image-grid-hearts.png"
                alt=""
                width="500"
                height="365"
              ></img>
              <h6>Meet</h6>
              <p>
                Once you find a pet, click "learn more about me" to get contact
                info for their shelter or rescue. Contact them to learn more
                about how to meet and adopt the pet.
              </p>
            </li>
            <li>
              <img
                src="https://theshelterpetproject.org/wp-content/uploads/2019/02/image-grid-house.png"
                alt=""
                width="500"
                height="365"
              ></img>
              <h6>Adopt</h6>
              <p>
                The rescue or shelter will walk you through their adoption
                process. Prepare your home for the arrival of your dog or cat to
                help them adjust to their new family.
              </p>
            </li>
          </ul>
        </div>
      </main>
      <br></br>
      <br></br>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
