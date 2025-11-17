import React, { useState } from "react";
import "./style.css"; 
import FacebookIconSrc from '../icon/facebook-icon.svg';
import InstagramIconSrc from '../icon/instagram-icon.svg';
import TwitterIconSrc from '../icon/twitter-icon.svg';

function App() {
    const [isSignUp, setIsSignUp] = useState(false);

    const handleSignUpClick = () => setIsSignUp(true);
    const handleSignInClick = () => setIsSignUp(false);

    return (
        <div className={`container ${isSignUp ? "right-panel-active" : ""}`}>
            {/* Form Đăng ký */}
            <div className="form-container sign-up-container">
                <form>
                    <h1>Create Account</h1>
                    <div className="social-container">
                        {/* Icon Facebook */}
                        <a href="style" className="social">
                            <img src={FacebookIconSrc} alt="Facebook" className="icon-social" />
                        </a>

                        {/* Icon Instagram */}
                        <a href="style" className="social">
                            <img src={InstagramIconSrc} alt="Instagram" className="icon-social" />
                        </a>

                        {/* Icon Twitter */}
                        <a href="style" className="social">
                            <img src={TwitterIconSrc} alt="Twitter" className="icon-social" />
                        </a>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Sign Up</button>
                </form>
            </div>

            {/* Form Đăng nhập */}
            <div className="form-container sign-in-container">
                <form>
                    <h1>Sign in</h1>
                    <div className="social-container">
                        {/* Icon Facebook */}
                        <a href="style" className="social">
                            <img src={FacebookIconSrc} alt="Facebook" className="icon-social" />
                        </a>

                        {/* Icon Instagram */}
                        <a href="style" className="social">
                            <img src={InstagramIconSrc} alt="Instagram" className="icon-social" />
                        </a>

                        {/* Icon Twitter */}
                        <a href="style" className="social">
                            <img src={TwitterIconSrc} alt="Twitter" className="icon-social" />
                        </a>
                    </div>
                    <span>or use your account</span>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <a href="style">Forgot your password?</a>
                    <button>Login</button>
                </form>
            </div>

            {/* Overlay chuyển hiệu ứng */}
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className="ghost" onClick={handleSignInClick}>
                            Login
                        </button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button className="ghost" onClick={handleSignUpClick}>
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;


