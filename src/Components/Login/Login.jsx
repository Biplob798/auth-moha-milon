import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { singInUser, singInWithGoogle, singInWithGithub } =
    useContext(AuthContext);

  // login korar por default vabe home page ajaber jonno

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    singInUser(email, password)
      .then((result) => {
        console.log(result.user);

        // login hobar por reset
        e.target.reset();

        // default vabe home page a pathano

        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // social login GoogleSingIn

  const handleGoogleSingIn = () => {
    singInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGithubSingIn = () => {
    singInWithGithub()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200 border">
      <div className="hero-content flex-col border bg-blue-200">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-b-600">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  border bg-blue-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-control border">
                <label className="label">
                  <span className="label-text text-lg font-bold">Email :</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Please"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control border">
                <label className="label">
                  <span className="label-text text-lg font-bold">
                    Password :
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Your Password Please"
                  required
                  className="input input-bordered"
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover font-bold"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6 border">
                <button className="btn text-lg font-bold bg-blue-200">
                  Login
                </button>
              </div>
            </form>
            <p className="border">
              New to this page ? please{" "}
              <Link to="/register">
                <button className="btn text-lg font-bold bg-blue-200">
                  Register
                </button>
              </Link>
              <div className="border flex items-center justify-center my-4">
                <p>
                  {" "}
                  <button
                    onClick={handleGoogleSingIn}
                    className="btn text-lg font-bold bg-blue-200"
                  >
                    Google
                  </button>
                </p>
                <p>
                  {" "}
                  <button
                    onClick={handleGithubSingIn}
                    className="btn text-lg font-bold bg-blue-200"
                  >
                    Github
                  </button>
                </p>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
