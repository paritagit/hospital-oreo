import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Side_bar from "./Side_bar";
import axios from 'axios';
 
function All_doctors(){

  const [get, setget] = useState([]);
   
  useEffect(() => {
    axios.post('http://localhost/hospital/admin/Add_doctor.php')
      .then(function (response) {
        console.log(response.data);
        setget(response.data);
      })
      .catch(function (error) {
        console.log(error);

      });
  }, [])


    return(
        <>
       <div class="theme-cyan">
  {/* Overlay For Sidebars */}
  <div className="overlay" />
  <Header/>
    <Side_bar/>
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
                        <img className="media-object " src="../assets1/images/xs/avatar4.jpg" alt />
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
                        <img className="media-object " src="../assets1/images/xs/avatar5.jpg" alt />
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
                        <img className="media-object " src="../assets1/images/xs/avatar2.jpg" alt />
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
                        <img className="media-object " src="../assets1/images/xs/avatar1.jpg" alt />
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
                        <img className="media-object " src="../assets1/images/xs/avatar3.jpg" alt />
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
                        <img className="media-object " src="../assets1/images/xs/avatar10.jpg" alt />
                        <div className="media-body">
                          <span className="badge badge-outline status" />
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="offline inlineblock">
                    <a href="javascript:void(0);">
                      <div className="media">
                        <img className="media-object " src="../assets1/images/xs/avatar6.jpg" alt />
                        <div className="media-body">
                          <span className="badge badge-outline status" />
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="offline inlineblock">
                    <a href="javascript:void(0);">
                      <div className="media">
                        <img className="media-object " src="../assets1/images/xs/avatar7.jpg" alt />
                        <div className="media-body">
                          <span className="badge badge-outline status" />
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="offline inlineblock">
                    <a href="javascript:void(0);">
                      <div className="media">
                        <img className="media-object " src="../assets1/images/xs/avatar8.jpg" alt />
                        <div className="media-body">
                          <span className="badge badge-outline status" />
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="offline inlineblock">
                    <a href="javascript:void(0);">
                      <div className="media">
                        <img className="media-object " src="../assets1/images/xs/avatar9.jpg" alt />
                        <div className="media-body">
                          <span className="badge badge-outline status" />
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="online inlineblock">
                    <a href="javascript:void(0);">
                      <div className="media">
                        <img className="media-object " src="../assets1/images/xs/avatar5.jpg" alt />
                        <div className="media-body">
                          <span className="badge badge-outline status" />
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="offline inlineblock">
                    <a href="javascript:void(0);">
                      <div className="media">
                        <img className="media-object " src="../assets1/images/xs/avatar4.jpg" alt />
                        <div className="media-body">
                          <span className="badge badge-outline status" />
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="offline inlineblock">
                    <a href="javascript:void(0);">
                      <div className="media">
                        <img className="media-object " src="../assets1/images/xs/avatar3.jpg" alt />
                        <div className="media-body">
                          <span className="badge badge-outline status" />
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="online inlineblock">
                    <a href="javascript:void(0);">
                      <div className="media">
                        <img className="media-object " src="../assets1/images/xs/avatar2.jpg" alt />
                        <div className="media-body">
                          <span className="badge badge-outline status" />
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="offline inlineblock">
                    <a href="javascript:void(0);">
                      <div className="media">
                        <img className="media-object " src="../assets1/images/xs/avatar1.jpg" alt />
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
                    <img className="user rounded-circle" src="../assets1/images/xs/avatar4.jpg" alt />
                    <div className="sl-content">
                      <h5 className="m-b-0">Admin Birthday</h5>
                      <small>Jan 21 <a href="javascript:void(0);" className="text-info">Sophia</a>.</small>
                    </div>
                  </div>
                  <div className="sl-item">
                    <img className="user rounded-circle" src="../assets1/images/xs/avatar5.jpg" alt />
                    <div className="sl-content">
                      <h5 className="m-b-0">Add New Contact</h5>
                      <small>30min ago <a href="javascript:void(0);">Alexander</a>.</small>
                      <small><strong>P:</strong> +264-625-2323</small>
                      <small><strong>E:</strong> maryamamiri@gmail.com</small>
                    </div>
                  </div>
                  <div className="sl-item">
                    <img className="user rounded-circle" src="../assets1/images/xs/avatar6.jpg" alt />
                    <div className="sl-content">
                      <h5 className="m-b-0">Code Change</h5>
                      <small>Today <a href="javascript:void(0);">Grayson</a>.</small>
                      <small>The standard chunk of Lorem Ipsum used since the 1500s is reproduced</small>
                    </div>
                  </div>
                  <div className="sl-item">
                    <img className="user rounded-circle" src="../assets1/images/xs/avatar7.jpg" alt />
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
                <img src="../assets1/images/xs/avatar2.jpg" alt="Avatar" />
              </li>
              <li>
                <img src="../assets1/images/xs/avatar3.jpg" alt="Avatar" />
              </li>
              <li>
                <img src="../assets1/images/xs/avatar4.jpg" alt="Avatar" />
              </li>
              <li>
                <img src="../assets1/images/xs/avatar6.jpg" alt="Avatar" />
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
                  <img src="../assets1/images/xs/avatar3.jpg" className="rounded-circle" alt />
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
                <li className="left float-left"> <img src="../assets1/images/xs/avatar2.jpg" className="rounded-circle" alt />
                  <div className="chat-info"> <a className="name" href="#">Elizabeth</a> <span className="datetime">6:25</span> <span className="message">Hi, Alexander,<br /> John <br /> What are you doing?</span> </div>
                </li>
                <li className="left float-left"> <img src="../assets1/images/xs/avatar1.jpg" className="rounded-circle" alt />
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
            <div className="col-lg-5 col-md-5 col-sm-12">
              <h2>All Doctors
                <small>Welcome to Oreo</small>
              </h2>
            </div>            
            <div className="col-lg-7 col-md-7 col-sm-12 text-right">
              <button className="btn btn-white btn-icon btn-round d-none d-md-inline-block float-right m-l-10" type="button">
                <i className="zmdi zmdi-plus" />
              </button>
              <ul className="breadcrumb float-md-right">
                <li className="breadcrumb-item"><a href="index.html"><i className="zmdi zmdi-home" /> Oreo</a></li>
                <li className="breadcrumb-item"><a href="javascript:void(0);">Doctors</a></li>
                <li className="breadcrumb-item active">All Doctors</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row clearfix">
            <div className="col-lg-12">
              <div className="card">
                <div className="body">
                  <ul className="nav nav-tabs padding-0">
                    <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#Permanent">Permanent</a></li>
                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#Consultant">Consultant</a></li>
                  </ul>
                </div>
              </div>
              <div className="tab-content m-t-10">
                <div className="tab-pane active" id="Permanent">
                  <div className="row clearfix">
                    {
                      get.map((p)=>{
                        return(
                          <>
                                    <div className="col-lg-3 col-md-4 col-sm-6">
                                        <div className="card xl-blue member-card doctor">
                                          <div className="body">
                                            <div className="member-thumb">
                                              {/* <img src="../assets1/images/doctors/member2.png" className="img-fluid" />                                */}
                                              <img src={"http://localhost/hospital/admin/upload/"+p.image} className="img-fluid" />                               
                                            </div>
                                            <div className="detail">
                                              <h4 className="m-b-0">{p.fname}</h4>
                                              {/* <p className="text-muted">Dentist</p> */}
                                              <p className="text-muted">{p.lname}</p>
                                              <ul className="social-links list-inline m-t-20">
                                                <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook" /></a></li>
                                                <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter" /></a></li>
                                                <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram" /></a></li>
                                              </ul>
                                              <p className="text-muted">{p.some_text}</p>                           
                                              {/* <Link to="/Doctor_detail" className="btn btn-default btn-round btn-simple">View Profile</Link> */}
                                              <Link to={`/Doctor_detail/${p.id}`} className="btn btn-default btn-round btn-simple">View Profile</Link>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                          </>
                        )
                      })
                    }
                    {/* <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="card xl-khaki member-card doctor">
                        <div className="body">
                          <div className="member-thumb">
                            <img src="../assets1/images/doctors/member2.png" className="img-fluid" alt="profile-image" />                               
                          </div>
                          <div className="detail">
                            <h4 className="m-b-0">Dr. Amelia</h4>
                            <p className="text-muted">Gynecologist</p>
                            <ul className="social-links list-inline m-t-20">
                              <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook" /></a></li>
                              <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter" /></a></li>
                              <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram" /></a></li>
                            </ul>
                            <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>                           
                            <a href="profile.html" className="btn btn-default btn-round btn-simple">View Profile</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="card xl-blue member-card doctor">
                        <div className="body">
                          <div className="member-thumb">
                            <img src="../assets1/images/doctors/member3.png" className="img-fluid" alt="profile-image" />                               
                          </div>
                          <div className="detail">
                            <h4 className="m-b-0">Dr. Jack </h4>
                            <p className="text-muted">Dentist</p>
                            <ul className="social-links list-inline m-t-20">
                              <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook" /></a></li>
                              <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter" /></a></li>
                              <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram" /></a></li>
                            </ul>
                            <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>                           
                            <a href="profile.html" className="btn btn-default btn-round btn-simple">View Profile</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="card xl-parpl member-card doctor">
                        <div className="body">
                          <div className="member-thumb">
                            <img src="../assets1/images/doctors/member4.png" className="img-fluid" alt="profile-image" />                               
                          </div>
                          <div className="detail">
                            <h4 className="m-b-0">Dr. Jessica </h4>
                            <p className="text-muted">Nursing</p>
                            <ul className="social-links list-inline m-t-20">
                              <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook" /></a></li>
                              <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter" /></a></li>
                              <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram" /></a></li>
                            </ul>
                            <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>                           
                            <a href="profile.html" className="btn btn-default btn-round btn-simple">View Profile</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="card xl-pink member-card doctor">
                        <div className="body">
                          <div className="member-thumb">
                            <img src="../assets1/images/doctors/member5.png" className="img-fluid" alt="profile-image" />                               
                          </div>
                          <div className="detail">
                            <h4 className="m-b-0">Dr. Joseph </h4>
                            <p className="text-muted">Audiology</p>
                            <ul className="social-links list-inline m-t-20">
                              <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook" /></a></li>
                              <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter" /></a></li>
                              <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram" /></a></li>
                            </ul>
                            <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>                           
                            <a href="profile.html" className="btn btn-default btn-round btn-simple">View Profile</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="card xl-seagreen member-card doctor">
                        <div className="body">
                          <div className="member-thumb">
                            <img src="../assets1/images/doctors/member6.png" className="img-fluid" alt="profile-image" />                               
                          </div>
                          <div className="detail">
                            <h4 className="m-b-0">Dr. Charlie </h4>
                            <p className="text-muted">Physical Therapy</p>
                            <ul className="social-links list-inline m-t-20">
                              <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook" /></a></li>
                              <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter" /></a></li>
                              <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram" /></a></li>
                            </ul>
                            <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>                           
                            <a href="profile.html" className="btn btn-default btn-round btn-simple">View Profile</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="card xl-blue member-card doctor">
                        <div className="body">
                          <div className="member-thumb">
                            <img src="../assets1/images/doctors/member7.png" className="img-fluid" alt="profile-image" />                               
                          </div>
                          <div className="detail">
                            <h4 className="m-b-0">Dr. William </h4>
                            <p className="text-muted">Dentist</p>
                            <ul className="social-links list-inline m-t-20">
                              <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook" /></a></li>
                              <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter" /></a></li>
                              <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram" /></a></li>
                            </ul>
                            <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>                           
                            <a href="profile.html" className="btn btn-default btn-round btn-simple">View Profile</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="card xl-seagreen member-card doctor">
                        <div className="body">
                          <div className="member-thumb">
                            <img src="../assets1/images/doctors/member8.png" className="img-fluid" alt="profile-image" />                               
                          </div>
                          <div className="detail">
                            <h4 className="m-b-0">Dr. Sophie </h4>
                            <p className="text-muted">Physical Therapy</p>
                            <ul className="social-links list-inline m-t-20">
                              <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook" /></a></li>
                              <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter" /></a></li>
                              <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram" /></a></li>
                            </ul>
                            <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>                           
                            <a href="profile.html" className="btn btn-default btn-round btn-simple">View Profile</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="card xl-seagreen member-card doctor">
                        <div className="body">
                          <div className="member-thumb">
                            <img src="../assets1/images/doctors/member8.png" className="img-fluid" alt="profile-image" />                               
                          </div>
                          <div className="detail">
                            <h4 className="m-b-0">Dr. Sophie </h4>
                            <p className="text-muted">Physical Therapy</p>
                            <ul className="social-links list-inline m-t-20">
                              <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook" /></a></li>
                              <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter" /></a></li>
                              <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram" /></a></li>
                            </ul>
                            <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>                           
                            <a href="profile.html" className="btn btn-default btn-round btn-simple">View Profile</a>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div> 
                </div>
                <div className="tab-pane" id="Consultant">
                  <div className="row clearfix">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="card xl-khaki member-card doctor">
                        <div className="body">
                          <div className="member-thumb">
                            <img src="../assets1/images/doctors/member2.png" className="img-fluid" alt="profile-image" />                               
                          </div>
                          <div className="detail">
                            <h4 className="m-b-0">Dr. Amelia</h4>
                            <p className="text-muted">Gynecologist</p>
                            <ul className="social-links list-inline m-t-20">
                              <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook" /></a></li>
                              <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter" /></a></li>
                              <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram" /></a></li>
                            </ul>
                            <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>                           
                            <a href="profile.html" className="btn btn-default btn-round btn-simple">View Profile</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="card xl-blue member-card doctor">
                        <div className="body">
                          <div className="member-thumb">
                            <img src="../assets1/images/doctors/member3.png" className="img-fluid" alt="profile-image" />                               
                          </div>
                          <div className="detail">
                            <h4 className="m-b-0">Dr. Jack </h4>
                            <p className="text-muted">Dentist</p>
                            <ul className="social-links list-inline m-t-20">
                              <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook" /></a></li>
                              <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter" /></a></li>
                              <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram" /></a></li>
                            </ul>
                            <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>                           
                            <a href="profile.html" className="btn btn-default btn-round btn-simple">View Profile</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="card xl-pink member-card doctor">
                        <div className="body">
                          <div className="member-thumb">
                            <img src="../assets1/images/doctors/member5.png" className="img-fluid" alt="profile-image" />                               
                          </div>
                          <div className="detail">
                            <h4 className="m-b-0">Dr. Joseph </h4>
                            <p className="text-muted">Audiology</p>
                            <ul className="social-links list-inline m-t-20">
                              <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook" /></a></li>
                              <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter" /></a></li>
                              <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram" /></a></li>
                            </ul>
                            <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>                           
                            <a href="profile.html" className="btn btn-default btn-round btn-simple">View Profile</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="card xl-seagreen member-card doctor">
                        <div className="body">
                          <div className="member-thumb">
                            <img src="../assets1/images/doctors/member6.png" className="img-fluid" alt="profile-image" />                               
                          </div>
                          <div className="detail">
                            <h4 className="m-b-0">Dr. Charlie </h4>
                            <p className="text-muted">Physical Therapy</p>
                            <ul className="social-links list-inline m-t-20">
                              <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook" /></a></li>
                              <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter" /></a></li>
                              <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram" /></a></li>
                            </ul>
                            <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>                           
                            <a href="profile.html" className="btn btn-default btn-round btn-simple">View Profile</a>
                          </div>
                        </div>
                      </div>
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
export default All_doctors;