import Head from "next/head";
import "../styles/Home.module.css";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useContext } from "react";
import Link from "next/link"
import Image from "next/image";

export default function Home({ message }) {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>

      <main className="main">
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 fw-normal">Bob&apos;s Adoption Center</h1>
            <Image
              src={"/img/dog-banner.png"}
              width={660}
              height={174}
              className="img-fluid"
              alt="Responsive image"
            /> 
            <p className="lead fw-normal">
              Adopting a pet actually saves TWO LIVES as you free up space for
              another animal in need to find lasting love through the wonder of
              adoption.
            </p>
            <Link href="/Dogs">
              <a style={{ border: "none" }} className="view-btn btn btn-outline-secondary">Look through our pets!</a>
            </Link>
          </div>
          <div className="product-device shadow-sm d-none d-md-block"></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
{/* foster volunteer fight */}
        <div
          className="d-md-flex flex-md-equal w-90 my-md-3 ps-md-3"
          id="foster"
        >
          <div className="side-card me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden" id="action">
            <div className="my-3 py-3">
              <h2 className="display-5">BECOME A FOSTER HERO</h2>
              <p className="lead" style={{ color: "white" }}>
                By fostering an animal in your home, you can prepare a homeless
                animal to be paired with a loving forever family. Change the
                life of an animal with a little extra TLC today.
              </p>
              <Link href="https://spca.org/adopt/foster/be-a-foster-hero/">
                <a className="view-btn btn btn-outline-secondary" target="_blank">Get Started</a>
              </Link>
            </div>
            <div className="bg-light shadow-sm mx-auto"></div>
          </div>
          <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-wrap">
            <div className="my-3 p-3">
              <h2 className="display-5">VOLUNTEER TO HELP ANIMALS</h2>
              <p className="lead">
                Love animals? We’ve got a volunteer job for you, whether it’s
                working directly with animals, working behind the scenes or
                helping out at our next special event.
              </p>
              <Link href="https://spca.org/support-us/volunteer/ways-to-volunteer/">
                <a className="learn-btn btn btn-outline-secondary" target="_blank">Learn More</a>
              </Link>
            </div>
            <div className="bg-dark shadow-sm mx-auto"></div>
          </div>
          <div className="side-card me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">FIGHT ANIMAL CRUELTY</h2>
              <p className="lead" style={{ color: "white" }}>
                Our Animal Cruelty Investigations Unit helped more than 1,400
                animals last year. If you see an animal suffering in your
                neighborhood, speak up and help put a stop to cruelty and
                neglect.
              </p>
              <Link href="https://spca.org/resources/help-animals/report-abuse/animal-cruelty-complaint/">
                <a className="view-btn btn btn-outline-secondary" target="_blank">Report Abuse</a>
              </Link>
            </div>
            <div className="bg-light shadow-sm mx-auto"></div>
          </div>
        </div>

        {/* trying another div here */}
        <div className="content-region  content-region--text-image-grid  content-region--white">
          <div className="content-region__container content-region__container--center">
            <h4
              className="text-image-grid__headline"
              style={{ color: "purple", textAlign: "center" }}
            >
              YOUR ADOPTION JOURNEY
            </h4>

            <ul className="text-image-grid  text-image-grid--center">
              <li overflow-wrap>
                <div className="press">
                  <Image
                    src={"/img/image-grid-search.png"}
                    alt=""
                    width="500"
                    height="365"
                  />
                  <h6>Search</h6>
                  <p>
                    It&apos;s easy to find a dog or cat who&apos;s right for you
                    at a shelter or rescue group. Simply enter your zip code
                    above to start your <a href="/pet-search/">search</a>.
                  </p>
                </div>
              </li>
              <li overflow-wrap>
                <div className="press">
                  <Image
                    src="/img/image-grid-hearts.png"
                    alt=""
                    width="500"
                    height="365"
                  />
                  <h6>Meet</h6>
                  <p>
                    Once you find a pet, click &quot;learn more about me&quot;
                    to get contact info for their shelter or rescue. Contact
                    them to learn more about how to meet and adopt the pet.
                  </p>
                </div>
              </li>
              <li overflow-wrap>
                <div className="press">
                  <Image
                    src="/img/image-grid-house.png"
                    alt=""
                    width="500"
                    height="365"
                    overflow-wrap="true"
                  />
                  <h6>Adopt</h6>
                  <p>
                    The rescue or shelter will walk you through their adoption
                    process. Prepare your home for the arrival of your dog or
                    cat to help them adjust to their new family.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* coloms under */}

        <div className="d-md-flex flex-md-equal w-90 my-md-3 ps-md-3" id="btmCards">
          <div className="side-card bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3">
              <h4
                className="item-title"
                style={{ textAlign: "center", color: "#23022e" }}
              >
                <b>Clinics</b>
              </h4>
              <p>
                Your best animal friend deserves the best care, and we are
                committed to providing services you can afford.
              </p>
              <Link href="https://www.spca.org/resources/clinic/clinic-services/">
                <a className="text-link" target="_blank">
                See Locations and Services
                </a>
              </Link>
            </div>
            <div className="bg-dark shadow-sm mx-auto"></div>
          </div>
          <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h4
                className="item-title"
                style={{ textAlign: "center", color: "#f0c65c" }}
              >
                <b>Online Pharmacy</b>
              </h4>{" "}
              <p>
                Order medicine, food and even treats online, and they’ll be
                delivered direct to your door.
              </p>
              <Link
                
                href="https://spcaoftexas3.securevetsource.com/site/view/182142_HomeDelivery.pml"
                target="_blank"
              >
                <a >Browse and Shop</a>
              </Link>
            </div>
            <div className="bg-dark shadow-sm mx-auto"></div>
          </div>
          <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h4
                className="item-title"
                style={{ textAlign: "center", color: "#ed1c24" }}
              >
                <b>Care &amp; Tips</b>
              </h4>{" "}
              <p>
                You love your pet. Now learn all the best ways to care for him,
                from training tips to health and safety guidelines.
              </p>
              <Link href="https://www.spca.org/resources/pet-needs/pet-tips-training/">
                <a className="text-link" target="_blank">Get Expert Help for Your Animal</a>
              </Link>
            </div>
            <div className="bg-light shadow-sm mx-auto"></div>
          </div>
          <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3">
              <h4
                className="item-title"
                style={{ textAlign: "center", color: "#b74f6f" }}
              >
                <b>Lost &amp; Found</b>
              </h4>{" "}
              <p>
                Check our found pet listings and connect to other shelters so
                you can be reunited with your pet.
              </p>
              <Link
                className="text-link"
                href="https://www.spca.org/resources/pet-needs/lost-found/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Fast Help for a Lost Animal
              </Link>
            </div>
            <div className="bg-dark shadow-sm mx-auto"></div>
          </div>

          <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h4
                className="item-title"
                style={{ textAlign: "center", color: "#0f5257" }}
              >
                <b>Get Help to Keep Your Pet</b>
              </h4>{" "}
              <p>
                Struggling to provide medical care or food for your pet? We may
                be able to provide temporary assistance.
              </p>
              <Link href="https://www.spca.org/resources/pet-needs/support-to-keep-your-pet/">
                <a className="text-link" target="_blank">Learn How We Can Help</a>
              </Link>
            </div>
            <div className="bg-light shadow-sm mx-auto"></div>
          </div>

          <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h4
                className="item-title"
                style={{ textAlign: "center", color: "#083d77" }}
              >
                <b>Animal Surrender</b>
              </h4>{" "}
              <p>
                Giving up a pet isn’t easy. If you’re wondering what your
                options are, we’re here to help.
              </p>
              <Link
                href="https://www.spca.org/resources/pet-needs/rehome/"
              >
                <a className="text-link" target="_blank">Rehoming Options</a>
              </Link>
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
