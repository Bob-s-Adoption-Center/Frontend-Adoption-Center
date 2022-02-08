import { useState } from "react";
import Head from 'next/head'

const signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    fetch("http://localhost:3001/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    console.log("success");
  };
  return (
    <main className="form-signin">
          <img class="signInImage" src="./img/dog-banner.png" alt="10 dogs sitting alongside side each other serving as the sign in page banner" width="275" height="75"></img>
        <form action="/signup" method="post">
          <h1 className="h3 mb-3 fw-normal" style={{textAlign: "center"}}><strong>Welcome Back! Please sign in</strong></h1>
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
            onClick={handleSignIn}
            className="w-100 btn btn-lg btn-primary"
            type="submit"
          >
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted" style={{textAlign: "center"}}>&copy; 2017–2022</p>
        </form>
    </main>
  );
};

export default signin;
