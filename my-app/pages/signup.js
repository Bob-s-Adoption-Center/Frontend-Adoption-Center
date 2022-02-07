const signup = () => {
  return (
    <main>
      <div className="form-signup" >
        <form action="/signup" method="post">
          <h1 className="h3 mb-3 fw-normal">Please sign up</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="name@example.com"
            />
            <label for="email">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
            />
            <label for="password">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign up
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
        </form>
      </div>
    </main>
  );
};

export default signup;
