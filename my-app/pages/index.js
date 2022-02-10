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
            <h1 className="display-4 fw-normal">Bob's Adoption Center</h1>
            <img
              src={"img/dog-banner.png"}
              className="img-fluid"
              alt="Responsive image"
            ></img>
            <p className="lead fw-normal">
              Adopting a pet actually saves TWO LIVES as you free up space for
              another animal in need to find lasting love through the wonder of
              adoption.
            </p>
            <a className="btn btn-outline-secondary" href="/Dogs">
              Look through our pets!
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
              <p className="lead" style={{ color: "white" }}>
                By fostering an animal in your home, you can prepare a homeless
                animal to be paired with a loving forever family. Change the
                life of an animal with a little extra TLC today.
              </p>
              <a className="btn btn-outline-secondary" href="#">
                Get Started
              </a>
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
              <a className="btn btn-outline-secondary" href="#">
                Learn More
              </a>
            </div>
            <div className="bg-dark shadow-sm mx-auto"></div>
          </div>
          <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">FIGHT ANIMAL CRUELTY</h2>
              <p className="lead">
                Our Animal Cruelty Investigations Unit helped more than 1,400
                animals last year. If you see an animal suffering in your
                neighborhood, speak up and help put a stop to cruelty and
                neglect.
              </p>
              <a className="btn btn-outline-secondary" href="#">
                Report Abuse
              </a>
            </div>
            <div className="bg-dark shadow-sm mx-auto"></div>
          </div>
          <div className="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">CARE & TIPS</h2>
              <p className="lead" style={{ color: "white" }}>
                You love your pet. Now learn all the best ways to care for him,
                from training tips to health and safety guidelines.
              </p>
              <a className="btn btn-outline-secondary" href="#">
                GET HELP
              </a>
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
                It's easy to find a dog who's right for you at a shelter or
                rescue group. Simply enter your zip code above to start your{" "}
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
                process. Prepare your home for the arrival of your dog to help
                them adjust to their new family.
              </p>
            </li>
          </ul>
        </div>

        {/* coloms under */}

        <div
          className="d-md-flex flex-md-equal w-90 my-md-3 ps-md-3"
          id="foster"
        >
          <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3">
              <h4
                class="item-title"
                style={{ textAlign: "center", color: "purple" }}
              >
                Clinics
              </h4>
              <p>
                Your best animal friend deserves the best care, and we are
                committed to providing services you can afford.
              </p>
              <a
                class="text-link"
                href="https://www.spca.org/resources/clinic/clinic-services/"
              >
                See Locations and Services
              </a>
            </div>
            <div className="bg-dark shadow-sm mx-auto"></div>
          </div>
          <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h4
                class="item-title"
                style={{ textAlign: "center", color: "orange" }}
              >
                Online Pharmacy
              </h4>{" "}
              <p>
                Order medicine, food and even treats online, and they’ll be
                delivered direct to your door.
              </p>
              <a
                class="text-link"
                href="https://spcaoftexas3.securevetsource.com/site/view/182142_HomeDelivery.pml"
              >
                Browse and Shop
              </a>
            </div>
            <div className="bg-dark shadow-sm mx-auto"></div>
          </div>
          <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h4
                class="item-title"
                style={{ textAlign: "center", color: "red" }}
              >
                Care &amp; Tips
              </h4>{" "}
              <p>
                You love your pet. Now learn all the best ways to care for him,
                from training tips to health and safety guidelines.
              </p>
              <a
                class="text-link"
                href="https://www.spca.org/resources/pet-needs/pet-tips-training/"
              >
                Get Expert Help for Your Animal
              </a>
            </div>
            <div className="bg-light shadow-sm mx-auto"></div>
          </div>
          <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3">
              <h4
                class="item-title"
                style={{ textAlign: "center", color: "indigo" }}
              >
                Lost &amp; Found
              </h4>{" "}
              <p>
                Check our found pet listings and connect to other shelters so
                you can be reunited with your pet.
              </p>
              <a
                class="text-link"
                href="https://www.spca.org/resources/pet-needs/lost-found/"
              >
                Get Fast Help for a Lost Animal
              </a>
            </div>
            <div className="bg-dark shadow-sm mx-auto"></div>
          </div>

          <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h4
                class="item-title"
                style={{ textAlign: "center", color: "green" }}
              >
                Get Help to Keep Your Pet
              </h4>{" "}
              <p>
                Struggling to provide medical care or food for your pet? We may
                be able to provide temporary assistance.
              </p>
              <a
                class="text-link"
                href="https://www.spca.org/resources/pet-needs/support-to-keep-your-pet/"
              >
                Learn How We Can Help
              </a>
            </div>
            <div className="bg-light shadow-sm mx-auto"></div>
          </div>

          <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h4
                class="item-title"
                style={{ textAlign: "center", color: "blue" }}
              >
                Animal Surrender
              </h4>{" "}
              <p>
                Giving up a pet isn’t easy. If you’re wondering what your
                options are, we’re here to help.
              </p>
              <a
                class="text-link"
                href="https://www.spca.org/resources/pet-needs/rehome/"
              >
                Rehoming Options
              </a>
            </div>
            <div className="bg-dark shadow-sm mx-auto"></div>
          </div>
        </div>
      </main>
      <br></br>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
