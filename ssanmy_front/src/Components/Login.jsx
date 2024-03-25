import React from "react";
import "../styleCss/Login.css"
function Login() {
    return (
<div class="wrapper">
    <div class="container">
      <div class="sign-up-container">
      <img src="https://projectmanager4.s3.ap-northeast-2.amazonaws.com/logo_fix.svg" alt="로고" class="image"/>
        <form method = 'GET'>
          <h1>Create Account</h1>
          <span>use your email for registration</span>
          <input type="text" placeholder="Name" name="Name"/>
          <input type="email" placeholder="Email" name="Email"/>
          <input type="password" placeholder="Password" name="Password"/>
          <button class="form_btn">Sign Up</button>
        </form>
      </div>
      <div class="sign-in-container">
        <form>
          <h1>Sign In</h1>
          <span>or use your account</span>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Password"/>
          <button class="form_btn">Sign In</button>
        </form>
      </div>
      <div class="overlay-container">
        <div class="social-links">
          <button class="social_btn">
            <img calss="social_img" src="https://projectmanager4.s3.ap-northeast-2.amazonaws.com/Google_icon-Sep15.svg" alt="logos" width={25}height={25}></img>
            Login for google
            </button>
          </div>
      </div>
    </div>
  </div>
    )
}

export default Login;