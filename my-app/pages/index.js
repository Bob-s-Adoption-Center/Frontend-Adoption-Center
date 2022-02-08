import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import App from "./_app";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div>
      <nav>
        <Navbar></Navbar>
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

        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Another headline</h2>
              <img src={"img/RockyandMe.jpg"} width="300" height="200"></img>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div className="bg-light shadow-sm mx-auto"></div>
          </div>
          <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Another headline</h2>
              <img src={"img/ctor.svg"} width="300" height="200"></img>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div className="bg-dark shadow-sm mx-auto"></div>
          </div>
          <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Another headline</h2>
              <img src={"img/howie.svg"} width="300" height="200"></img>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div className="bg-dark shadow-sm mx-auto"></div>
          </div>
          <div className="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Another headline</h2>
              <img src={"img/alvan.svg"} width="300" height="200"></img>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div className="bg-light shadow-sm mx-auto"></div>
          </div>
        </div>
      </main>
      <br></br>
      <br></br>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}
