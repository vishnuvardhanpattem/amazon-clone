import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import { useState } from "react";
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            history.push("/");
        })
        .catch((e) => alert(e.message));
    }
    const register = event => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            history.push("/");
        })
        .catch((e) => alert(e.message));
    }
    return (
        <div className="login">
            <Link to="/">
                <img className="login__image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png" alt="amazon logo" />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <button type="submit" onClick={login} className="login__signIn">Sign In</button>
                </form>
                <p>By signing-in you agree to Amazon's Conditions of
                    see our Privacy Notice, our Cookies Notice and our Notice.
                </p>
                <button onClick={register} className="login__account">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login;