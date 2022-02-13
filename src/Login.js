import React from "react";


function LoginForm () {
    return (
        <form>
            <h3>Sign In</h3>
            <div className="App">
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Please enter your email address"></input>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Please enter your password"></input>
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="rememberMeCbox"></input>
                        <label className="custom-control-label" htmlFor="rememberMeCbox">Remember me</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                <p className="forgot-password text-right">Forgot <a href="#">password?</a></p>
            </div>
        </form>
        
    )
}

export default LoginForm;