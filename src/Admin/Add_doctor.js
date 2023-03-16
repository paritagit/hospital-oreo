import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Side_bar from "./Side_bar";
import axios from 'axios';

function Add_doctor(){

    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const [bod, setbod] = useState('');
    const [gender, setgender] = useState('');
    const [contact, setcontact] = useState('');
    const [email, setemail] = useState('');
    const [website, setwebsite] = useState('');
  const [image, setimage] = useState('');
  const [some_text, setsome_text] = useState('');

  const [u_name, setu_name] = useState('');
  const [u_password, setu_password] = useState('');
  const [c_password, setc_password] = useState('');
  // const image=useRef();

  useEffect(() =>{
    axios.post('http://localhost/hospital/admin/Add_doctor.php')
    .then(function(res){
    
      console.log(res);
    })
    .catch(function (error) {

      console.log(error);
    })
  },[])


   const register_doctor=(e)=>{

    e.preventDefault();
    const data = new FormData();

    data.append('image',image);

    data.append('fname',fname);
    data.append('lname',lname);
    data.append('bod',bod);
    data.append('gender',gender);
    data.append('contact',contact);
    data.append('email',email);
    data.append('website',website);
    data.append('some_text',some_text);
    if(document.getElementById("fname").value == "" || document.getElementById("lname").value == "" || document.getElementById("bod").value == "" || document.getElementById("gender").value == "" || document.getElementById("contact").value == "" || document.getElementById("email").value == "" || document.getElementById("website").value == "" || document.getElementById("image").value == "" || document.getElementById("some_text").value == ""){
      alert("field are empty.");
      return
    }
    axios.post('http://localhost/hospital/admin/Add_doctor.php',data)

            // 'fname': fname,
            // 'lname': lname,
            // 'bod': bod,
            // 'gender': gender,
            // 'contact': contact,
            // 'email': email,
            // 'website': website,
            // 'image':image,
            // 'some_text':some_text
            
          
        .then(function (res) {
      
          console.log(res);
          
          alert('Add Doctor sucessfully........!');
          
          document.getElementById("fname").value = ""
          document.getElementById("lname").value = ""
          document.getElementById("bod").value = ""
          document.getElementById("gender").value = ""
          document.getElementById("contact").value = ""
          document.getElementById("email").value = ""
          document.getElementById("website").value = ""
          document.getElementById("image").value = ""
          document.getElementById("some_text").value = ""
        })
        .catch(function (error) {
      
          console.log(error);
        })
          
        }


        useEffect(() =>{
          axios.post('http://localhost/hospital/admin/doctor_account.php')
          .then(function(res){
          
            console.log(res);
          })
          .catch(function (error) {
      
            console.log(error);
          })
        },[])
      
        const doctor_account=(e)=>{

          e.preventDefault();
          
          if(document.getElementById("u_name").value == "" || document.getElementById("u_password").value == "" || document.getElementById("c_password").value == ""){
            alert("field are empty.");
            return
          }
          if(u_password!=c_password)
          {
            alert("password are not match....!");
            return
          }
          axios.post('http://localhost/hospital/admin/doctor_account.php',{
            "u_name":u_name,
            "u_password":u_password,
            "c_password":c_password
          })

              .then(function (res) {
            
                console.log(res);
                
                alert('Add Doctor Account information sucessfully........!');
                
                document.getElementById("u_name").value = ""
                document.getElementById("u_password").value = ""
                document.getElementById("c_password").value = ""
              })
              .catch(function (error) {
            
                console.log(error);
              })
                
              }
    



    return(
        <>
        
     <div class="theme-cyan">
  {/* Overlay For Sidebars */}
  <div className="overlay" />
  {/* Top Bar */}
 <Header/>
  {/* Left Sidebar */}
 <Side_bar/>
  {/* Right Sidebar */}
  <aside id="rightsidebar" className="right-sidebar">
    <ul className="nav nav-tabs">
      <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#setting"><i className="zmdi zmdi-settings zmdi-hc-spin" /></a></li>
      <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#chat"><i className="zmdi zmdi-comments" /></a></li>
      <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#activity">Activity</a></li>
    </ul>
    <div className="tab-content">
      <div className="tab-pane slideRight active" id="setting">
        <div className="slim_scroll">
          <div className="card">
            <h6>General Settings</h6>
            <ul className="setting-list list-unstyled">
              <li>
                <div className="checkbox">
                  <input id="checkbox1" type="checkbox" />
                  <label htmlFor="checkbox1">Report Panel Usage</label>
                </div>
              </li>
              <li>
                <div className="checkbox">
                  <input id="checkbox2" type="checkbox" defaultChecked />
                  <label htmlFor="checkbox2">Email Redirect</label>
                </div>
              </li>
              <li>
                <div className="checkbox">
                  <input id="checkbox3" type="checkbox" defaultChecked />
                  <label htmlFor="checkbox3">Notifications</label>
                </div>                        
              </li>
              <li>
                <div className="checkbox">
                  <input id="checkbox4" type="checkbox" defaultChecked />
                  <label htmlFor="checkbox4">Auto Updates</label>
                </div>
              </li>
            </ul>
          </div>                
          <div className="card">
            <h6>Skins</h6>
            <ul className="choose-skin list-unstyled">
              <li data-theme="purple">
                <div className="purple" />
              </li>                   
              <li data-theme="blue">
                <div className="blue" />
              </li>
              <li data-theme="cyan" className="active">
                <div className="cyan" />                    
              </li>
              <li data-theme="green">
                <div className="green" />
              </li>
              <li data-theme="orange">
                <div className="orange" />
              </li>
              <li data-theme="blush">
                <div className="blush" />                    
              </li>
            </ul>                    
          </div>
          <div className="card">
            <h6>Account Settings</h6>
            <ul className="setting-list list-unstyled">
              <li>
                <div className="checkbox">
                  <input id="checkbox5" type="checkbox" defaultChecked />
                  <label htmlFor="checkbox5">Offline</label>
                </div>
              </li>
              <li>
                <div className="checkbox">
                  <input id="checkbox6" type="checkbox" defaultChecked />
                  <label htmlFor="checkbox6">Location Permission</label>
                </div>
              </li>
            </ul>
          </div>
          <div className="card theme-light-dark">
            <h6>Left Menu</h6>
            <button className="t-light btn btn-default btn-simple btn-round btn-block">Light</button>
            <button className="t-dark btn btn-default btn-round btn-block">Dark</button>
            <button className="m_img_btn btn btn-primary btn-round btn-block">Sidebar Image</button>                    
          </div>                
          <div className="card">
            <h6>Information Summary</h6>
            <div className="row m-b-20">
              <div className="col-7">                            
                <small className="displayblock">MEMORY USAGE</small>
                <h5 className="m-b-0 h6">512</h5>
              </div>
              <div className="col-5">
                <div className="sparkline" data-type="bar" data-width="97%" data-height="25px" data-bar-width={5} data-bar-spacing={3} data-bar-color="#00ced1">8,7,9,5,6,4,6,8</div>
              </div>
            </div>
            <div className="row m-b-20">
              <div className="col-7">                            
                <small className="displayblock">CPU USAGE</small>
                <h5 className="m-b-0 h6">90%</h5>
              </div>
              <div className="col-5">
                <div className="sparkline" data-type="bar" data-width="97%" data-height="25px" data-bar-width={5} data-bar-spacing={3} data-bar-color="#F15F79">6,5,8,2,6,4,6,4</div>
              </div>
            </div>
            <div className="row m-b-20">
              <div className="col-7">                            
                <small className="displayblock">DAILY TRAFFIC</small>
                <h5 className="m-b-0 h6">25 142</h5>
              </div>
              <div className="col-5">
                <div className="sparkline" data-type="bar" data-width="97%" data-height="25px" data-bar-width={5} data-bar-spacing={3} data-bar-color="#78b83e">7,5,8,7,4,2,6,5</div>
              </div>
            </div>
            <div className="row">
              <div className="col-7">                            
                <small className="displayblock">DISK USAGE</small>
                <h5 className="m-b-0 h6">60.10%</h5>
              </div>
              <div className="col-5">
                <div className="sparkline" data-type="bar" data-width="97%" data-height="25px" data-bar-width={5} data-bar-spacing={3} data-bar-color="#457fca">7,5,2,5,6,7,6,4</div>
              </div>
            </div>
          </div>
        </div>                
      </div>       
      <div className="tab-pane right_chat stretchLeft" id="chat">
        <div className="slim_scroll">
          <div className="card">
            <div className="search">                        
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search..." />
                <span className="input-group-addon">
                  <i className="zmdi zmdi-search" />
                </span>
              </div>
            </div>
          </div>
          <div className="card">
            <h6>Recent</h6>
            <ul className="list-unstyled">
              <li className="online">
                <a href="javascript:void(0);">
                  <div className="media">
                    <img className="media-object " src="../assets/images/xs/avatar4.jpg" alt />
                    <div className="media-body">
                      <span className="name">Sophia</span>
                      <span className="message">There are many variations of passages of Lorem Ipsum available</span>
                      <span className="badge badge-outline status" />
                    </div>
                  </div>
                </a>                            
              </li>
              <li className="online">
                <a href="javascript:void(0);">
                  <div className="media">
                    <img className="media-object " src="../assets/images/xs/avatar5.jpg" alt />
                    <div className="media-body">
                      <span className="name">Grayson</span>
                      <span className="message">All the Lorem Ipsum generators on the</span>
                      <span className="badge badge-outline status" />
                    </div>
                  </div>
                </a>                            
              </li>
              <li className="offline">
                <a href="javascript:void(0);">
                  <div className="media">
                    <img className="media-object " src="../assets/images/xs/avatar2.jpg" alt />
                    <div className="media-body">
                      <span className="name">Isabella</span>
                      <span className="message">Contrary to popular belief, Lorem Ipsum</span>
                      <span className="badge badge-outline status" />
                    </div>
                  </div>
                </a>                            
              </li>
              <li className="me">
                <a href="javascript:void(0);">
                  <div className="media">
                    <img className="media-object " src="../assets/images/xs/avatar1.jpg" alt />
                    <div className="media-body">
                      <span className="name">John</span>
                      <span className="message">It is a long established fact that a reader</span>
                      <span className="badge badge-outline status" />
                    </div>
                  </div>
                </a>                            
              </li>
              <li className="online">
                <a href="javascript:void(0);">
                  <div className="media">
                    <img className="media-object " src="../assets/images/xs/avatar3.jpg" alt />
                    <div className="media-body">
                      <span className="name">Alexander</span>
                      <span className="message">Richard McClintock, a Latin professor</span>
                      <span className="badge badge-outline status" />
                    </div>
                  </div>
                </a>                            
              </li>                        
            </ul>
          </div>
          <div className="card">
            <h6>Contacts</h6>
            <ul className="list-unstyled">
              <li className="offline inlineblock">
                <a href="javascript:void(0);">
                  <div className="media">
                    <img className="media-object " src="../assets/images/xs/avatar10.jpg" alt />
                    <div className="media-body">
                      <span className="badge badge-outline status" />
                    </div>
                  </div>
                </a>
              </li>
              <li className="offline inlineblock">
                <a href="javascript:void(0);">
                  <div className="media">
                    <img className="media-object " src="../assets/images/xs/avatar6.jpg" alt />
                    <div className="media-body">
                      <span className="badge badge-outline status" />
                    </div>
                  </div>
                </a>
              </li>
              <li className="offline inlineblock">
                <a href="javascript:void(0);">
                  <div className="media">
                    <img className="media-object " src="../assets/images/xs/avatar7.jpg" alt />
                    <div className="media-body">
                      <span className="badge badge-outline status" />
                    </div>
                  </div>
                </a>
              </li>
              <li className="offline inlineblock">
                <a href="javascript:void(0);">
                  <div className="media">
                    <img className="media-object " src="../assets/images/xs/avatar8.jpg" alt />
                    <div className="media-body">
                      <span className="badge badge-outline status" />
                    </div>
                  </div>
                </a>
              </li>
              <li className="offline inlineblock">
                <a href="javascript:void(0);">
                  <div className="media">
                    <img className="media-object " src="../assets/images/xs/avatar9.jpg" alt />
                    <div className="media-body">
                      <span className="badge badge-outline status" />
                    </div>
                  </div>
                </a>
              </li>
              <li className="online inlineblock">
                <a href="javascript:void(0);">
                  <div className="media">
                    <img className="media-object " src="../assets/images/xs/avatar5.jpg" alt />
                    <div className="media-body">
                      <span className="badge badge-outline status" />
                    </div>
                  </div>
                </a>
              </li>
              <li className="offline inlineblock">
                <a href="javascript:void(0);">
                  <div className="media">
                    <img className="media-object " src="../assets/images/xs/avatar4.jpg" alt />
                    <div className="media-body">
                      <span className="badge badge-outline status" />
                    </div>
                  </div>
                </a>
              </li>
              <li className="offline inlineblock">
                <a href="javascript:void(0);">
                  <div className="media">
                    <img className="media-object " src="../assets/images/xs/avatar3.jpg" alt />
                    <div className="media-body">
                      <span className="badge badge-outline status" />
                    </div>
                  </div>
                </a>
              </li>
              <li className="online inlineblock">
                <a href="javascript:void(0);">
                  <div className="media">
                    <img className="media-object " src="../assets/images/xs/avatar2.jpg" alt />
                    <div className="media-body">
                      <span className="badge badge-outline status" />
                    </div>
                  </div>
                </a>
              </li>
              <li className="offline inlineblock">
                <a href="javascript:void(0);">
                  <div className="media">
                    <img className="media-object " src="../assets/images/xs/avatar1.jpg" alt />
                    <div className="media-body">
                      <span className="badge badge-outline status" />
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tab-pane slideLeft" id="activity">
        <div className="slim_scroll">
          <div className="card user_activity">
            <h6>Recent Activity</h6>
            <div className="streamline b-accent">
              <div className="sl-item">
                <img className="user rounded-circle" src="../assets/images/xs/avatar4.jpg" alt />
                <div className="sl-content">
                  <h5 className="m-b-0">Admin Birthday</h5>
                  <small>Jan 21 <a href="javascript:void(0);" className="text-info">Sophia</a>.</small>
                </div>
              </div>
              <div className="sl-item">
                <img className="user rounded-circle" src="../assets/images/xs/avatar5.jpg" alt />
                <div className="sl-content">
                  <h5 className="m-b-0">Add New Contact</h5>
                  <small>30min ago <a href="javascript:void(0);">Alexander</a>.</small>
                  <small><strong>P:</strong> +264-625-2323</small>
                  <small><strong>E:</strong> maryamamiri@gmail.com</small>
                </div>
              </div>
              <div className="sl-item">
                <img className="user rounded-circle" src="../assets/images/xs/avatar6.jpg" alt />
                <div className="sl-content">
                  <h5 className="m-b-0">Code Change</h5>
                  <small>Today <a href="javascript:void(0);">Grayson</a>.</small>
                  <small>The standard chunk of Lorem Ipsum used since the 1500s is reproduced</small>
                </div>
              </div>
              <div className="sl-item">
                <img className="user rounded-circle" src="../assets/images/xs/avatar7.jpg" alt />
                <div className="sl-content">
                  <h5 className="m-b-0">New Email</h5>
                  <small>45min ago <a href="javascript:void(0);" className="text-info">Fidel Tonn</a>.</small>
                </div>
              </div>                        
            </div>
          </div>
          <div className="card">
            <h6>Recent Attachments</h6>
            <ul className="list-unstyled activity">
              <li>
                <a href="javascript:void(0)">
                  <i className="zmdi zmdi-collection-pdf l-blush" />                    
                  <div className="info">
                    <h4>info_258.pdf</h4>                    
                    <small>2MB</small>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <i className="zmdi zmdi-collection-text l-amber" />                    
                  <div className="info">
                    <h4>newdoc_214.doc</h4>                    
                    <small>900KB</small>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <i className="zmdi zmdi-image l-parpl" />                    
                  <div className="info">
                    <h4>MG_4145.jpg</h4>                    
                    <small>5.6MB</small>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <i className="zmdi zmdi-image l-parpl" />                    
                  <div className="info">
                    <h4>MG_4100.jpg</h4>                    
                    <small>5MB</small>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <i className="zmdi zmdi-collection-text l-amber" />                    
                  <div className="info">
                    <h4>Reports_end.doc</h4>                    
                    <small>780KB</small>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <i className="zmdi zmdi-videocam l-turquoise" />                    
                  <div className="info">
                    <h4>movie2018.MKV</h4>                    
                    <small>750MB</small>
                  </div>
                </a>
              </li>                        
            </ul>
          </div>
        </div>
      </div>
    </div>
  </aside>
  {/* Chat-launcher */}
  <div className="chat-launcher" />
  <div className="chat-wrapper">
    <div className="card">
      <div className="header">
        <ul className="list-unstyled team-info margin-0">
          <li className="m-r-15"><h2>Doctor Team</h2></li>
          <li>
            <img src="../assets/images/xs/avatar2.jpg" alt="Avatar" />
          </li>
          <li>
            <img src="../assets/images/xs/avatar3.jpg" alt="Avatar" />
          </li>
          <li>
            <img src="../assets/images/xs/avatar4.jpg" alt="Avatar" />
          </li>
          <li>
            <img src="../assets/images/xs/avatar6.jpg" alt="Avatar" />
          </li>
          <li>
            <a href="javascript:void(0);" title="Add Member"><i className="zmdi zmdi-plus-circle" /></a>
          </li>
        </ul>                       
      </div>
      <div className="body">
        <div className="chat-widget">
          <ul className="chat-scroll-list clearfix">
            <li className="left float-left">
              <img src="../assets/images/xs/avatar3.jpg" className="rounded-circle" alt />
              <div className="chat-info">
                <a className="name" href="#">Alexander</a>
                <span className="datetime">6:12</span>                            
                <span className="message">Hello, John </span>
              </div>
            </li>
            <li className="right">
              <div className="chat-info"><span className="datetime">6:15</span> <span className="message">Hi, Alexander<br /> How are you!</span> </div>
            </li>
            <li className="right">
              <div className="chat-info"><span className="datetime">6:16</span> <span className="message">There are many variations of passages of Lorem Ipsum available</span> </div>
            </li>
            <li className="left float-left"> <img src="../assets/images/xs/avatar2.jpg" className="rounded-circle" alt />
              <div className="chat-info"> <a className="name" href="#">Elizabeth</a> <span className="datetime">6:25</span> <span className="message">Hi, Alexander,<br /> John <br /> What are you doing?</span> </div>
            </li>
            <li className="left float-left"> <img src="../assets/images/xs/avatar1.jpg" className="rounded-circle" alt />
              <div className="chat-info"> <a className="name" href="#">Michael</a> <span className="datetime">6:28</span> <span className="message">I would love to join the team.</span> </div>
            </li>
            <li className="right">
              <div className="chat-info"><span className="datetime">7:02</span> <span className="message">Hello, <br />Michael</span> </div>
            </li>
          </ul>
        </div>
        <div className="input-group p-t-15">
          <input type="text" className="form-control" placeholder="Enter text here..." />
          <span className="input-group-addon">
            <i className="zmdi zmdi-mail-send" />
          </span>
        </div>
      </div>
    </div>
  </div>
  <section className="content">
    <div className="block-header">
      <div className="row">
        <div className="col-lg-7 col-md-5 col-sm-12">
          <h2>Add Doctors
            <small className="text-muted">Welcome to Oreo</small>
          </h2>
        </div>
        <div className="col-lg-5 col-md-7 col-sm-12">
          <button className="btn btn-white btn-icon btn-round d-none d-md-inline-block float-right m-l-10" type="button">
            <i className="zmdi zmdi-plus" />
          </button>
          <ul className="breadcrumb float-md-right">
            <li className="breadcrumb-item"><a href="index.html"><i className="zmdi zmdi-home" /> Oreo</a></li>
            <li className="breadcrumb-item"><a href="javascript:void(0);">Doctors</a></li>
            <li className="breadcrumb-item active">Add Doctors</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row clearfix">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="card">
            <div className="header">
              <h2><strong>Basic</strong> Information <small>Description text here...</small> </h2>
              <ul className="header-dropdown">
                <li className="remove">
                  <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                </li>
              </ul>
            </div>
            <div className="body">
              <div className="row clearfix">
                <div className="col-sm-6">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="First Name" id="fname" value={fname} onChange={(e) => {setfname((e.target.value))}}/>
                    <input type="text" class="form-control" id="validationDefault01" value="" required/>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Last Name" id="lname" value={lname} onChange={(e) => {setlname((e.target.value))}}/>
                  </div>
                </div>
              </div>
              <div className="row clearfix">
                <div className="col-sm-3">
                  <div className="form-group">
                    <input type="date" className="form-control" placeholder="Date of Birth" id="bod" value={bod} onChange={(e) => {setbod((e.target.value))}}/>
                  </div>
                </div>
                <div className="col-sm-3">
                  <select className="form-control show-tick" id="gender" value={gender} onChange={(e) => {setgender((e.target.value))}}>
                    <option value>- Gender -</option>
                    <option name="gender" value="male" >Male</option>
                    <option name="gender" value="female" >Female</option>
                  </select>
                </div>
                <div className="col-sm-3">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Speciality" />
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Phone" id="contact" value={contact} onChange={(e) => {setcontact((e.target.value))}}/>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter Your Email" id="email" value={email} onChange={(e) => {setemail((e.target.value))}}/>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Website URL" id="website" value={website} onChange={(e) => {setwebsite((e.target.value))}}/>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <form action="https://thememakker.com/" id="frmFileUpload" className="dropzone" method="post" encType="multipart/form-data">
                    <div className="dz-message">
                      <div className="drag-icon-cph"> <i className="material-icons">touch_app</i> </div>
                      <h3>Drop files here or click to upload.</h3>
                      <em>(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</em> </div>
                    <div className="fallback">
                      <input name="file" type="file" multiple id="image" onChange={(e) => {setimage((e.target.files[0]))}}/>
                      {/* <input name="file" type="file" multiple id="image" ref={image}/> */}
                    </div>
                  </form>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <textarea rows={4} className="form-control no-resize" placeholder="Please type what you want..." id="some_text" value={some_text} onChange={(e) => {setsome_text((e.target.value))}}/>
                  </div>
                </div>
                <div className="col-sm-12">
                  <button type="submit" className="btn btn-primary btn-round" onClick={register_doctor}>Submit</button>
                  <button type="submit" className="btn btn-default btn-round btn-simple">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row clearfix">
        <div className="col-md-12">
          <div className="card">
            <div className="header">
              <h2><strong>Doctor's</strong> Account Information <small>Description text here...</small> </h2>
              <ul className="header-dropdown">
                <li className="remove">
                  <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                </li>
              </ul>
            </div>
            <div className="body">
              <div className="row clearfix">
                <div className="col-sm-12">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="User Name" id="u_name" value={u_name} onChange={(e) => {setu_name((e.target.value))}}/>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" id="u_password" value={u_password} onChange={(e) => {setu_password((e.target.value))}}/>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input type="password" className="form-control" placeholder="Confirm Password" id="c_password" value={c_password} onChange={(e) => {setc_password((e.target.value))}}/>
                  </div>
                </div>
                <div className="col-sm-12">
                  <button type="submit" className="btn btn-primary btn-round" onClick={doctor_account}>Submit</button>
                  <button type="submit" className="btn btn-default btn-round btn-simple">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row clearfix">
        <div className="col-md-12">
          <div className="card">
            <div className="header">
              <h2><strong>Doctor</strong> Social Media Info <small>Description text here...</small> </h2>
              <ul className="header-dropdown">
                <li className="remove">
                  <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                </li>
              </ul>
            </div>
            <div className="body">
              <div className="row clearfix">
                <div className="col-sm-6">
                  <div className="input-group">
                    <span className="input-group-addon"><i className="zmdi zmdi-facebook" /></span>
                    <input type="text" className="form-control" placeholder="Facebook" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-group">
                    <span className="input-group-addon"><i className="zmdi zmdi-twitter" /></span>
                    <input type="text" className="form-control" placeholder="Twitter" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-group">
                    <span className="input-group-addon"><i className="zmdi zmdi-google-plus" /></span>
                    <input type="text" className="form-control" placeholder="Google Plus" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-group">
                    <span className="input-group-addon"><i className="zmdi zmdi-linkedin" /></span>
                    <input type="text" className="form-control" placeholder="LinkedIN" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-group">
                    <span className="input-group-addon"><i className="zmdi zmdi-behance" /></span>
                    <input type="text" className="form-control" placeholder="Behance" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-group">
                    <span className="input-group-addon"><i className="zmdi zmdi-dribbble" /></span>
                    <input type="text" className="form-control" placeholder="dribbble" />
                  </div>
                </div>
                <div className="col-sm-12">
                  <p> <b>With Search Bar</b> </p>
                  <select className="form-control z-index show-tick" data-live-search="true">
                    <option>Hot Dog, Fries and a Soda</option>
                    <option>Burger, Shake and a Smile</option>
                    <option>Sugar, Spice and all things nice</option>
                  </select>
                  <button type="submit" className="btn btn-primary btn-round">Submit</button>
                  <button type="submit" className="btn btn-default btn-round btn-simple">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

        
        </>
    )
}
export default Add_doctor;