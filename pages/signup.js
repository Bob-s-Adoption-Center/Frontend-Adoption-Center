import { useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    window.location.href = "/signin";
    const response = await fetch(
      "https://bob-s-adoption-center.herokuapp.com/signup",
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    );
    setMessage(`Success! Welcome ${email}!`);
    const data = await response.json();
  };

  return (
    <main className="signInLayout">
      <Navbar />
      <div className="form-signin">
        <img
          className="signInImage"
          src="./img/dog-banner.png"
          alt="10 dogs sitting alongside side each other serving as the sign in page banner"
          width="275"
          height="75"
        ></img>
        <form action="/signup" method="post">
          <h1 className="h3 mb-3 fw-normal" style={{ textAlign: "center" }}>
            Welcome! Please sign up
          </h1>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
            <label htmlFor="email">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
            <label htmlFor="password">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button
            onClick={handleSignUp}
            className="w-100 btn btn-lg"
            type="submit"
            style={{ backgroundColor: "magenta", color: "black" }}
          >
            Sign up
          </button>
        </form>
        <br></br>
        <p style={{ textAlign: "center" }}>{message}</p>
        <Footer />
      </div>
    </main>
  );
};

export default signup;
