import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {

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

     setError("");
     alert("Login Successful!");

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