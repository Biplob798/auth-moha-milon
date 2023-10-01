import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    // create user in firebase

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200 border">
      <div className="hero-content flex-col  border bg-blue-200">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-b-600">Register now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body border bg-blue-100">
            <form onSubmit={handleRegister}>
              <div className="form-control border">
                <label className="label">
                  <span className="label-text font-bold">Name :</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name Please"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control border">
                <label className="label">
                  <span className="label-text font-bold">Email :</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email Please"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control border">
                <label className="label">
                  <span className="label-text font-bold">Password :</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Your password Please"
                  required
                  className="input input-bordered"
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover  font-bold"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6 border">
                <button className="btn text-lg font-bold bg-blue-200">
                  Register
                </button>
              </div>
            </form>
            <p className="border">
              Already have a account? please{" "}
              <Link to="/login">
                <button className="btn text-lg font-bold bg-blue-200">
                  Login
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
