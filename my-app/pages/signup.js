import { useState } from "react";

const signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    fetch("http://localhost:3001/signup", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
  };

  return (
    <main>
      <div className="form-signup">
        <form action="/signup" method="post">
          <h1 className="h3 mb-3 fw-normal">Please sign up</h1>

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
              autoComplete="current-email"
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
            className="w-100 btn btn-lg btn-primary"
            type="submit"
          >
            Sign up
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
        </form>
      </div>
    </main>
  );
};

export default signup;
