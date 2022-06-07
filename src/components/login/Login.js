import { useState } from "react";
import "./Login.scss";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="login --100vh --center-all">
      <div className="--card --bg-light">
        <h2 className="--color-danger">Login</h2>
        <div className="--form-control">
          <input type="text" placeholder="Username" className="--width-100" />
          <div className="password">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="--width-100"
            />
            <div className="icon" onClick={togglePassword}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </div>
          </div>
          <button className="--btn --btn-danger --btn-block">Login</button>
        </div>
      </div>
    </section>
  );
};

export default Login;
