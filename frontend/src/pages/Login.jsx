import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import API from "../api/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {

   if (email.trim() === "") {
    setError("Please enter your email.");
    return;
   }

   if (password.trim() === "") {
    setError("Please enter your password.");
    return;
   }

   if (!email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email.");
      return;
    }

   if (password.length < 6) {
     setError("Password must be at least 6 characters.");
     return;
   }

    try {

       const res = await API.post("/users/login", {
       email,
       password,
       });

       console.log("Response:", res.data);

       localStorage.setItem("token", res.data.token);
       localStorage.setItem("user", JSON.stringify(res.data.user));
       console.log("Saved Token:", localStorage.getItem("token"));

       alert(res.data.message);

       window.location.href = "/";

      } catch (error) {

       setError(
        error.response?.data?.message || "Login Failed"
     );

  }
   };
  return (
    <>
      <Navbar />

      <section className="login-page">

        <div className="login-box">

          <h1>Welcome Back</h1>

          <p>Login to continue shopping.</p>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />   

          {error && <p className="error-message">{error}</p>}

          <button
            className="login-btn"
            onClick={handleLogin}
          >
            Login
          </button>

          <p className="register-text">
             Don't have an account?{" "}
           <Link to="/register">Register</Link>
         </p>

        </div>

      </section>
    </>
  );
}

export default Login;