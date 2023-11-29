import {useState, userState} from "react";
import axios from "axios";


const AuthPage = (props) => {
    const [username, setUsername] = useState("");
    const [secret, setSecret] = useState("");
    const [email, setEmail] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");

    const onLogin = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3001/login",{username, secret })
            .then((r)=> props.onAuth({...r.data, secret}))
            .catch((e)=> console.log(JSON.stringify(e.response.data)));
    };

    const onSignup = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3001/signup" , {
                username,
                secret,
                email,
                first_name,
                last_name,
            })
            .then((r) => props.onAuth({ ...r.data, secret}))
            .catch((e) => console.log(JSON.stringify(e.response.data)));
    };

    return (
        <div className="login-page">
          <div className="card">
            {/* Login Form */}
            <form onSubmit={onLogin} className="auth-form">
              <div className="title">Login</div>
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
<input
            type="password"
            name="secret"
            placeholder="Password"
            onChange={(e) => setSecret(e.target.value)}
          />
          <button type="submit">LOG IN</button>
        </form>

        {/* Sign Up Form */}
        <form onSubmit={onSignup} className="auth-form">
          <div className="title">Don't have an account? Sign Up</div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="secret"
            placeholder="Password"
            onChange={(e) => setSecret(e.target.value)}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            name="first_name"
            placeholder="First name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <button type="submit">SIGN UP</button>
        </form>
      </div>

      <style>{`
        .login-page { display: flex; align-items: center; justify-content: center; height: 100vh; background: linear-gradient(180deg, #2980b9, #2c3e50); }
        .card { width: 400px; background-color: #fff; border-radius: 8px; padding: 20px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); }
        .title { font-size: 22px; color: #333; font-weight: 700; margin-bottom: 20px; }
        .auth-form { display: flex; flex-direction: column; align-items: center; }
        input { width: 100%; margin-top: 12px; padding: 10px; border: 1px solid #ccc; border-radius: 4px; outline: none; }
        button { margin-top: 12px; width: 100%; padding: 10px; background-color: #3498db; color: #fff; border: none; border-radius: 4px; cursor: pointer; }
      `}</style>
    </div>
  );
};


export default AuthPage;