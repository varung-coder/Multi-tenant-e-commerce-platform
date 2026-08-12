import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import API from "../api/api";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

 const handleRegister = async () => {

  if (name.trim() === "") {
    setError("Please enter your name.");
    return;
  }

  if (email.trim() === "") {
    setError("Please enter your email.");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    setError("Please enter a valid email.");
    return;
  }

  if (password.trim() === "") {
    setError("Please enter your password.");
    return;
  }

  if (password.length < 6) {
    setError("Password must be at least 6 characters.");
    return;
  }

  try {

  const res = await API.post("/users/register", {
    name,
    email,
    password,
  });

  alert(res.data.message);

  navigate("/login");

} catch (error) {

  setError(
    error.response?.data?.message || "Registration Failed"
  );

}

 };
  return (
    <>
      <Navbar />

      <section className="login-page">

        <div className="login-box">

          <h1>Create Account</h1>

          <p>Register to start shopping.</p>

          <input
             type="text"
             placeholder="Enter your name"
             value={name}
             onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Confirm password"
          />

          {error && <p className="error-message">{error}</p>}

          <button
            className="register-btn"
            onClick={handleRegister}
          >
             Register
          </button>

          <p className="register-text">
            Already have an account?{" "}
           <Link to="/login">Login</Link>
          </p>

        </div>

      </section>
    </>
  );
}

export default Register;