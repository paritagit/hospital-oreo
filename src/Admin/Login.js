// import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Login(){

  const [name, setname] = useState('');
  const [password, setpassword] = useState('');

  
  const login =()=>{
    axios.post('http://localhost/hospital/admin/login.php',{
      name:name,
      password:password
    })
    .then(function(fetch){
      if(fetch.data.name == name && password == fetch.data.password)
      {
        window.localStorage.setItem('id',fetch.data.id)
        window.localStorage.setItem('name',fetch.data.name)
        window.location.href="/Dashbord"
      }
      else
      {
        alert("please.....Enter valid user_name & password....!");
      }
    })
  }


    return(
        <>
         <div className="theme-cyan authentication sidebar-collapse">
  <nav className="navbar navbar-expand-lg fixed-top navbar-transparent">
    <div className="container">        
      <div className="navbar-translate n_logo">
        <a className="navbar-brand" href="javascript:void(0);" title target="_blank">Oreo</a>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-bar bar1" />
          <span className="navbar-toggler-bar bar2" />
          <span className="navbar-toggler-bar bar3" />
        </button>
      </div>
      <div className="navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="index.html">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="javascript:void(0);">Search Result</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" title="Follow us on Twitter" href="javascript:void(0);" target="_blank">
              <i className="zmdi zmdi-twitter" />
              <p className="d-lg-none d-xl-none">Twitter</p>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" title="Like us on Facebook" href="javascript:void(0);" target="_blank">
              <i className="zmdi zmdi-facebook" />
              <p className="d-lg-none d-xl-none">Facebook</p>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" title="Follow us on Instagram" href="javascript:void(0);" target="_blank">                        
              <i className="zmdi zmdi-instagram" />
              <p className="d-lg-none d-xl-none">Instagram</p>
            </a>
          </li>                

          <li className="nav-item">
            <Link className="nav-link btn btn-white btn-round" to="/Register">SIGN UP</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div className="page-header">
    <div className="page-header-image" style={{backgroundImage:'url(../assets1/images/login.jpg)'}} />
    <div className="container">
      <div className="col-md-12 content-center">
        <div className="card-plain">
          <form className="form" method action="#">
            <div className="header">
              <div className="logo-container">
                <img src="https://thememakker.com/templates/oreo/hospital/html/assets/images/logo.svg" alt />
              </div>
              <h5>Log in</h5>
            </div>
            <div className="content">                                                
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Enter User Name" id="name" value={name} onChange={(e) => {setname((e.target.value))}}/>
                <span className="input-group-addon">
                  <i className="zmdi zmdi-account-circle" />
                </span>
              </div>
              <div className="input-group">
                <input type="password" placeholder="Password" className="form-control" id="password" value={password} onChange={(e) => {setpassword((e.target.value))}}/>
                <span className="input-group-addon">
                  <i className="zmdi zmdi-lock" />
                </span>
              </div>
            </div>
            <div className="footer text-center">
              <Link href="" className="btn btn-primary btn-round btn-block" onClick={login}>SIGN IN</Link>
              <h5><a href="forgot-password.html" className="link">Forgot Password?</a></h5>
            </div>
          </form>
        </div>
      </div>
    </div>
    <footer className="footer">
      <div className="container">
        <nav>
          <ul>
            <li><a href="http://thememakker.com/contact/" target="_blank">Contact Us</a></li>
            <li><a href="http://thememakker.com/about/" target="_blank">About Us</a></li>
            <li><a href="javascript:void(0);">FAQ</a></li>
          </ul>
        </nav>
        <div className="copyright">
          ©
          ,
          <span>Designed by <a href="http://thememakker.com/" target="_blank">ThemeMakker</a></span>
        </div>
      </div>
    </footer>
  </div>
</div>
  
        </>
    )
}
export default Login;