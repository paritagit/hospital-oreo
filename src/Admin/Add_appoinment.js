import Header from "./Header";
import Side_bar from "./Side_bar";
import axios from 'axios';
import { useEffect, useState } from "react";
import Loader from "./Loader";


function Add_appoinment(){


    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const [BOD, setBOD] = useState('');
    const [gender, setgender] = useState('');
    const [services, setservices] = useState('');
    const [doctor, setdoctor] = useState('');
    const [e_date, sete_date] = useState('');
    const [email, setemail] = useState('');
  const [contact, setcontact] = useState('');
  const [some_text, setsome_text] = useState('');

  const [getname, setgetname] = useState([]);
  const [select, setselect] = useState(false);

  const status = 0;

  useEffect(() =>{
    axios.post('http://localhost/hospital/admin/Add_appoinment.php')
    .then(function(res){
    
      console.log(res);
    })
    .catch(function (error) {

      console.log(error);
    })
  },[])


  useEffect(() => {
    axios.get('http://localhost/hospital/admin/Add_doctor.php')
      .then(function (response) {
        console.log(response.data);
        setgetname(response.data);
        setselect(true);
      })
      .catch(function (error) {
        console.log(error);

      });
  }, [])

   const register_pationt=()=>{
    
      if(document.getElementById("fname").value == "" || document.getElementById("lname").value == "" || document.getElementById("BOD").value == "" || document.getElementById("gender").value == "" || document.getElementById("services").value == ""  || document.getElementById("doctor").value == "" || document.getElementById("e_date").value == "" || document.getElementById("email").value == "" || document.getElementById("contact").value == "" || document.getElementById("some_text").value == ""){
        alert("field are empty.");
        return
      }
          axios.post('http://localhost/hospital/admin/Add_appoinment.php',{
            'fname': fname,
            'lname': lname,
            'BOD': BOD,
            'gender': gender,
            'services': services,
            'doctor':doctor,
            'e_date': e_date,
            'email': email,
            'contact': contact,
            'some_text':some_text,
            'status':status
          })
        .then(function (res) {
      
          console.log(res);
          
          alert('Add appoinment sucessfully.......!');
          
          document.getElementById("fname").value = ""
          document.getElementById("lname").value = ""
          document.getElementById("BOD").value = ""
          document.getElementById("gender").value = ""
          document.getElementById("services").value = ""
          document.getElementById("doctor").value = ""
          document.getElementById("e_date").value = ""
          document.getElementById("email").value = ""
          document.getElementById("contact").value = ""
          document.getElementById("some_text").value = ""
        })
        .catch(function (error) {
      
          console.log(error);
        })
          
        }

        function Cancel(){
          return(
            window.location.reload()
            
          )
        }
    
if(select){
  return(
    <>
<div className="theme-cyan">
    <Header/>
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
              <label htmlFor="checkbox4">Auto Upe_dates</label>
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
            <span className="e_datetime">6:12</span>                            
            <span className="message">Hello, John </span>
          </div>
        </li>
        <li className="right">
          <div className="chat-info"><span className="e_datetime">6:15</span> <span className="message">Hi, Alexander<br /> How are you!</span> </div>
        </li>
        <li className="right">
          <div className="chat-info"><span className="e_datetime">6:16</span> <span className="message">There are many variations of passages of Lorem Ipsum available</span> </div>
        </li>
        <li className="left float-left"> <img src="../assets/images/xs/avatar2.jpg" className="rounded-circle" alt />
          <div className="chat-info"> <a className="name" href="#">Elizabeth</a> <span className="e_datetime">6:25</span> <span className="message">Hi, Alexander,<br /> John <br /> What are you doing?</span> </div>
        </li>
        <li className="left float-left"> <img src="../assets/images/xs/avatar1.jpg" className="rounded-circle" alt />
          <div className="chat-info"> <a className="name" href="#">Michael</a> <span className="e_datetime">6:28</span> <span className="message">I would love to join the team.</span> </div>
        </li>
        <li className="right">
          <div className="chat-info"><span className="e_datetime">7:02</span> <span className="message">Hello, <br />Michael</span> </div>
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
      <h2>Book Appointment
        <small>Welcome to Oreo</small>
      </h2>
    </div>
    <div className="col-lg-5 col-md-7 col-sm-12">
      <ul className="breadcrumb float-md-right">
        <li className="breadcrumb-item"><a href="index.html"><i className="zmdi zmdi-home" /> Oreo</a></li>
        <li className="breadcrumb-item"><a href="javascript:void(0);">Appointment</a></li>
        <li className="breadcrumb-item active">Book Appointment</li>
      </ul>
    </div>
  </div>
</div>    
<div className="container-fluid">        
  <div className="row clearfix">
    <div className="col-lg-12 col-md-12 col-sm-12">
      <div className="card">
        <div className="header">
          <h2><strong>Book</strong> Appointment<small>Description text here...</small> </h2>
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
                <input type="text" className="form-control" placeholder="First Name" id="fname" value={fname} onChange={(e)=> {setfname(e.target.value)}}/>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Last Name" id="lname" value={lname} onChange={(e)=> {setlname(e.target.value)}}/>
              </div>
            </div>
          </div>
          <div className="row clearfix">
            <div className="col-sm-3">
              <div className="form-group">
                <input type="date" className="form-control" placeholder="date of Birth" id="BOD" value={BOD} onChange={(e)=> {setBOD(e.target.value)}}/>
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
              <select className="form-control show-tick" id="services" value={services} onChange={(e) => {setservices((e.target.value))}}>
                <option value>- services -</option>
                <option>Select services</option>
                <option name="services">Dental Checkup</option>
                <option name="services">Full Body Checkup</option>
                <option name="services">ENT Checkup</option>
                <option name="services">Heart Checkup</option>
              </select>                                
            </div>
             {/* <div className="col-lg-4 col-md-6 col-6">
      <select className="form-control m-b-15">
        <option selected="selected">Select Doctor</option>
        <option>Marc Parcival</option>
        <option>Alen Bailey</option>
        <option>Basil Andrew</option>
        <option>Giles Franklin</option>
        <option>Edgar Denzil</option>
        <option>Garfield Feris</option>
      </select>
    </div> */}
     <div className="col-lg-4 col-md-6 col-6">
      <select className="form-control m-b-15" id="doctor" value={doctor} onChange={(e)=> {setdoctor(e.target.value)}}>
        <option selected="selected" >Select Doctor</option>
        {
      getname.map((n)=>{
        return(
         
          <>
            <option>{n.fname}</option>
            </>
      
        )
      })
    }
      </select>
    </div> 

            <div className="col-sm-3">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="zmdi zmdi-calendar" />
                </span>
                <input type="date" className="form-control"  placeholder="Please choose date & time..." id="e_date" value={e_date} onChange={(e) => {sete_date((e.target.value))}}/>
              </div>
            </div>
          </div>
          <div className="row clearfix">
            <div className="col-sm-12">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Enter Your Email" id="email" value={email} onChange={(e) => {setemail((e.target.value))}}/>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Phone" id="contact" value={contact} onChange={(e) => {setcontact((e.target.value))}}/>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="form-group">
                <textarea rows={4} className="form-control no-resize" placeholder="Please type what you want..." defaultValue={""} id="some_text" value={some_text} onChange={(e) => {setsome_text((e.target.value))}}/>
              </div>
            </div>
            <div className="col-sm-12">
              <button type="submit" className="btn btn-primary btn-round" onClick={register_pationt}>Submit</button>
              <button type="submit" className="btn btn-default btn-round btn-simple" onClick={Cancel}>Cancel</button>
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
else
{
  (<></>)
  // (<Loader/>)
}
   
}
export default Add_appoinment;