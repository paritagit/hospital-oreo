import { Link } from "react-router-dom";
import Header from "./Header";
import Side_bar from "./Side_bar";

function Dashbord(){
    return(
        <>
        
       <div className="theme-cyan">
  {/* Page Loader */}
 
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
          <li className="m-r-15"><h2>Dr. Team</h2></li>
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
  {/* Main Content */}
  <section className="content home">
    <div className="block-header">
      <div className="row">
        <div className="col-lg-5 col-md-5 col-sm-12">
          <h2>Dashboard
            <small>Welcome to Oreo</small>
          </h2>
        </div>            
        <div className="col-lg-7 col-md-7 col-sm-12 text-right">
          <div className="inlineblock text-center m-r-15 m-l-15 d-none d-lg-inline-block">
            <div className="sparkline" data-type="bar" data-width="97%" data-height="25px" data-bar-width={2} data-bar-spacing={5} data-bar-color="#fff">3,2,6,5,9,8,7,9,5,1,3,5,7,4,6</div>
            <small className="col-white">Visitors</small>
          </div>
          <div className="inlineblock text-center m-r-15 m-l-15 d-none d-lg-inline-block">
            <div className="sparkline" data-type="bar" data-width="97%" data-height="25px" data-bar-width={2} data-bar-spacing={5} data-bar-color="#fff">1,3,5,7,4,6,3,2,6,5,9,8,7,9,5</div>
            <small className="col-white">Operations</small>
          </div>
          <button className="btn btn-white btn-icon btn-round d-none d-md-inline-block float-right m-l-10" type="button">
            <i className="zmdi zmdi-plus" />
          </button>
          <ul className="breadcrumb float-md-right">
            <li className="breadcrumb-item"><Link to="/index"><i className="zmdi zmdi-home" /> Oreo</Link></li>
            <li className="breadcrumb-item active">Dashboard</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row clearfix">
        <div className="col-lg-4 col-md-6">
          <div className="card">
            <div className="body">
              <h3 className="number count-to m-b-0" data-from={0} data-to={1600} data-speed={2500} data-fresh-interval={700}>1600 <i className="zmdi zmdi-trending-up float-right" /></h3>
              <p className="text-muted">New Feedbacks</p>
              <div className="progress">
                <div className="progress-bar l-blush" role="progressbar" aria-valuenow={68} aria-valuemin={0} aria-valuemax={100} style={{width: '68%'}} />
              </div>
              <small>Change 15%</small>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card">
            <div className="body">
              <h3 className="number count-to m-b-0" data-from={0} data-to={3218} data-speed={2500} data-fresh-interval={1000}>3218 <i className="zmdi zmdi-trending-up float-right" /></h3>
              <p className="text-muted">Happy Clients</p>
              <div className="progress">
                <div className="progress-bar l-green" role="progressbar" aria-valuenow={68} aria-valuemin={0} aria-valuemax={100} style={{width: '68%'}} />
              </div>
              <small>Change 23%</small>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="card">
            <div className="body">
              <h3 className="number count-to m-b-0" data-from={0} data-to={284} data-speed={2500} data-fresh-interval={1000}>284 <i className="zmdi zmdi-trending-up float-right" /></h3>
              <p className="text-muted">Well Smiley Faces <i className="zmdi zmdi-mood" /></p>
              <div className="progress">
                <div className="progress-bar l-parpl" role="progressbar" aria-valuenow={68} aria-valuemin={0} aria-valuemax={100} style={{width: '68%'}} />
              </div>
              <small>Change 50%</small>
            </div>
          </div>
        </div>
      </div>
      <div className="row clearfix">
        <div className="col-lg-8 col-md-12">
          <div className="card">
            <div className="header">
              <h2><strong>Hospital</strong> Survey</h2>
              <ul className="header-dropdown">
                <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more" /> </a>
                  <ul className="dropdown-menu dropdown-menu-right slideUp float-right">
                    <li><a href="javascript:void(0);">Edit</a></li>
                    <li><a href="javascript:void(0);">Delete</a></li>
                    <li><a href="javascript:void(0);">Report</a></li>
                  </ul>
                </li>
                <li className="remove">
                  <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                </li>
              </ul>
            </div>                    
            <div className="body">
              {/* Nav tabs */}
              <ul className="nav nav-tabs padding-0">
                <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#chart-view">Chart View</a></li>
                <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#table-view">Table View</a></li>
              </ul>
              {/* Tab panes */}
              <div className="tab-content m-t-10">
                <div className="tab-pane active" id="chart-view">
                  <div id="area_chart" className="graph" />
                  <div className="xl-slategray">
                    <div className="body">
                      <div className="row text-center">
                        <div className="col-sm-3 col-6">
                          <h4 className="margin-0">$106</h4>
                          <p className="text-muted margin-0"> Today's</p>
                        </div>
                        <div className="col-sm-3 col-6">
                          <h4 className="margin-0">$907</h4>
                          <p className="text-muted margin-0">This Week's</p>
                        </div>
                        <div className="col-sm-3 col-6">
                          <h4 className="margin-0">$4210</h4>
                          <p className="text-muted margin-0">This Month's</p>
                        </div>
                        <div className="col-sm-3 col-6">
                          <h4 className="margin-0">$7,000</h4>
                          <p className="text-muted margin-0">This Year's</p>
                        </div>
                      </div>
                    </div>
                  </div>                                
                </div>
                <div className="tab-pane" id="table-view">
                  <div className="table-responsive">
                    <table className="table m-b-0 table-hover">
                      <thead>
                        <tr>                                                
                          <th>Name</th>
                          <th>Address</th>
                          <th>Earning</th>
                          <th>Reviews</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>                                                
                          <td>Hospital Name</td>
                          <td>Porterfield 508 Virginia Street Chicago, IL 60653</td>
                          <td>$2,325</td>
                          <td>
                            <i className="zmdi zmdi-star col-amber" />
                            <i className="zmdi zmdi-star col-amber" />
                            <i className="zmdi zmdi-star col-amber" />
                            <i className="zmdi zmdi-star col-amber" />
                            <i className="zmdi zmdi-star col-amber" />
                          </td>
                          <td>
                            <button className="btn btn-sm btn-neutral"><i className="zmdi zmdi-chart" /></button>
                          </td>
                        </tr>
                        <tr>                                                
                          <td>Hospital Name</td>
                          <td>2595 Pearlman Avenue Sudbury, MA 01776 </td>
                          <td>$3,325</td>
                          <td>
                            <i className="zmdi zmdi-star col-amber" />
                            <i className="zmdi zmdi-star col-amber" />
                            <i className="zmdi zmdi-star col-amber" />
                            <i className="zmdi zmdi-star col-amber" />
                            <i className="zmdi zmdi-star col-amber" />
                          </td>
                          <td>
                            <button className="btn btn-sm btn-neutral"><i className="zmdi zmdi-chart" /></button>
                          </td>
                        </tr>
                        <tr>                                                
                          <td>Hospital Name</td>
                          <td>Porterfield 508 Virginia Street Chicago, IL 60653</td>
                          <td>$5,021</td>
                          <td>
                            <i className="zmdi zmdi-star col-amber" />
                            <i className="zmdi zmdi-star col-amber" />
                            <i className="zmdi zmdi-star col-amber" />
                            <i className="zmdi zmdi-star col-amber" />
                            <i className="zmdi zmdi-star col-amber" />
                          </td>
                          <td>
                            <button className="btn btn-sm btn-neutral"><i className="zmdi zmdi-chart" /></button>
                          </td>
                        </tr>
                        <tr>                                                
                          <td>Hospital Name</td>
                          <td>508 Virginia Street Chicago, IL 60653</td>
                          <td>$1,325</td>
                          <td>
                            <i className="zmdi zmdi-star col-amber" />
                            <i className="zmdi zmdi-star col-amber" />
                            <i className="zmdi zmdi-star col-amber" />
                            <i className="zmdi zmdi-star col-amber" />
                            <i className="zmdi zmdi-star-outline" />
                          </td>
                          <td>
                            <button className="btn btn-sm btn-neutral"><i className="zmdi zmdi-chart" /></button>
                          </td>
                        </tr>
                        <tr>                                                
                          <td>Hospital Name</td>
                          <td>1516 Holt Street West Palm Beach, FL 33401</td>
                          <td>$2,325</td>
                          <td>
                            <i className="zmdi zmdi-star col-amber" />
                            <i className="zmdi zmdi-star col-amber" />
                            <i className="zmdi zmdi-star col-amber" />
                            <i className="zmdi zmdi-star col-amber" />
                            <i className="zmdi zmdi-star-outline" />
                          </td>
                          <td>
                            <button className="btn btn-sm btn-neutral"><i className="zmdi zmdi-chart" /></button>
                          </td>
                        </tr>
                        <tr>                                                
                          <td>Hospital Name</td>
                          <td>508 Virginia Street Chicago, IL 60653</td>
                          <td>$2,325</td>
                          <td>
                            <i className="zmdi zmdi-star col-amber" />
                            <i className="zmdi zmdi-star col-amber" />
                            <i className="zmdi zmdi-star col-amber" />
                            <i className="zmdi zmdi-star col-amber" />
                            <i className="zmdi zmdi-star-outline" />
                          </td>
                          <td>
                            <button className="btn btn-sm btn-neutral"><i className="zmdi zmdi-chart" /></button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>                    
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="card">
            <div className="body">
              <div className="sparkline m-b-10" data-type="bar" data-width="97%" data-height="38px" data-bar-width={2} data-bar-spacing={6} data-bar-color="#555555">2,8,5,3,1,7,9,5,6,4,2,3,1,2,8,5,3,1,7,9,5,6,4,2,3,1</div>
              <h6 className="text-center m-b-15">Total New Patient</h6>
              <div id="world-map-markers2" style={{height: 125}} />
              <div className="table-responsive m-t-20">
                <table className="table table-striped m-b-0">
                  <thead>
                    <tr>
                      <th>City</th>                                        
                      <th>Count</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>New York</td>
                      <td>215<i className="zmdi zmdi-trending-up m-l-10" /></td>
                    </tr>
                    <tr>
                      <td>Los Angeles</td>
                      <td>189<i className="zmdi zmdi-trending-up m-l-10" /></td>
                    </tr>
                    <tr>
                      <td>Chicago</td>
                      <td>408<i className="zmdi zmdi-trending-down m-l-10" /></td>
                    </tr>
                    <tr>
                      <td>Houston</td>
                      <td>78<i className="zmdi zmdi-trending-down m-l-10" /></td>
                    </tr>
                    <tr>
                      <td>Phoenix</td>
                      <td>148<i className="zmdi zmdi-trending-up m-l-10" /></td>
                    </tr>
                    <tr>
                      <td>San Diego</td>
                      <td>102<i className="zmdi zmdi-trending-down m-l-10" /></td>
                    </tr>                                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>         
      <div className="row clearfix">
        <div className="col-lg-4 col-md-12">
          <div className="card">
            <div className="header">
              <h2><strong>Dr.</strong> Timeline</h2>
              <ul className="header-dropdown">                            
                <li className="remove">
                  <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                </li>
              </ul>
            </div>
            <div className="body">
              <div className="new_timeline">
                <div className="header">
                  <div className="color-overlay">
                    <div className="day-number">8</div>
                    <div className="date-right">
                      <div className="day-name">Monday</div>
                      <div className="month">February 2018</div>
                    </div>
                  </div>                                
                </div>
                <ul>
                  <li>
                    <div className="bullet pink" />
                    <div className="time">5pm</div>
                    <div className="desc">
                      <h3>New Icon</h3>
                      <h4>Mobile App</h4>
                    </div>
                  </li>
                  <li>
                    <div className="bullet green" />
                    <div className="time">3 - 4pm</div>
                    <div className="desc">
                      <h3>Design Stand Up</h3>
                      <h4>Hangouts</h4>
                      <ul className="list-unstyled team-info margin-0 p-t-5">                                            
                        <li><img src="http://via.placeholder.com/35x35" alt="Avatar" /></li>
                        <li><img src="http://via.placeholder.com/35x35" alt="Avatar" /></li>                                            
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="bullet orange" />
                    <div className="time">12pm</div>
                    <div className="desc">
                      <h3>Lunch Break</h3>
                    </div>
                  </li>
                  <li>
                    <div className="bullet green" />
                    <div className="time">9 - 11am</div>
                    <div className="desc">
                      <h3>Finish Home Screen</h3>
                      <h4>Web App</h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-12">
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6">
              <div className="card top_counter">
                <div className="body">
                  <div className="icon xl-slategray"><i className="zmdi zmdi-account" /> </div>
                  <div className="content">
                    <div className="text">New Patient</div>
                    <h5 className="number">27</h5>
                  </div>
                </div>                    
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card top_counter">
                <div className="body">
                  <div className="icon xl-slategray"><i className="zmdi zmdi-account" /> </div>
                  <div className="content">
                    <div className="text">OPD Patient</div>
                    <h5 className="number">19</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card top_counter">
                <div className="body">
                  <div className="icon xl-slategray"><i className="zmdi zmdi-bug" /> </div>
                  <div className="content">
                    <div className="text">Operations</div>
                    <h5 className="number">08</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card visitors-map">
            <div className="header">
              <h2><strong>Our</strong> Location <small>Contrary to popular belief, Lorem Ipsum is not simply random text</small></h2>
              <ul className="header-dropdown">
                <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more" /> </a>
                  <ul className="dropdown-menu dropdown-menu-right slideUp">
                    <li><a href="javascript:void(0);">Action</a></li>
                    <li><a href="javascript:void(0);">Another action</a></li>
                    <li><a href="javascript:void(0);">Something else</a></li>
                  </ul>
                </li>
                <li className="remove">
                  <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                </li>
              </ul>
            </div>
            <div className="body">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div id="world-map-markers" style={{height: 280}} />
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="body">
                    <ul className="row location_list list-unstyled">
                      <li className="col-lg-4 col-md-4 col-6">
                        <div className="body xl-turquoise">
                          <i className="zmdi zmdi-pin" />
                          <h4 className="number count-to" data-from={0} data-to={453} data-speed={2500} data-fresh-interval={700}>453</h4>
                          <span>America</span>
                        </div>
                      </li>
                      <li className="col-lg-4 col-md-4 col-6">
                        <div className="body xl-khaki">
                          <i className="zmdi zmdi-pin" />
                          <h4 className="number count-to" data-from={0} data-to={124} data-speed={2500} data-fresh-interval={700}>124</h4>
                          <span>Australia</span>
                        </div>
                      </li>
                      <li className="col-lg-4 col-md-4 col-6">
                        <div className="body xl-parpl">
                          <i className="zmdi zmdi-pin" />
                          <h4 className="number count-to" data-from={0} data-to={215} data-speed={2500} data-fresh-interval={700}>215</h4>
                          <span>Canada</span>
                        </div>
                      </li>
                      <li className="col-lg-4 col-md-4 col-6">
                        <div className="body xl-salmon">
                          <i className="zmdi zmdi-pin" />
                          <h4 className="number count-to" data-from={0} data-to={155} data-speed={2500} data-fresh-interval={700}>155</h4>
                          <span>India</span>
                        </div>
                      </li>
                      <li className="col-lg-4 col-md-4 col-6">
                        <div className="body xl-blue">
                          <i className="zmdi zmdi-pin" />
                          <h4 className="number count-to" data-from={0} data-to={78} data-speed={2500} data-fresh-interval={700}>78</h4>
                          <span>UK</span>
                        </div>
                      </li>
                      <li className="col-lg-4 col-md-4 col-6">
                        <div className="body xl-slategray">
                          <i className="zmdi zmdi-pin" />
                          <h4 className="number count-to" data-from={0} data-to={55} data-speed={2500} data-fresh-interval={700}>55</h4>
                          <span>Other</span>
                        </div>
                      </li>                      
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>                
        </div>           
      </div>        
      <div className="row clearfix">
        <div className="col-lg-4 col-md-12">
          <div className="card">
            <div className="header">
              <h2><strong>Heart</strong> Surgeries <small>18% High then last month</small></h2>
            </div>
            <div className="body">
              <div className="sparkline" data-type="line" data-spot-radius={1} data-highlight-spot-color="rgb(233, 30, 99)" data-highlight-line-color="#222" data-min-spot-color="rgb(233, 30, 99)" data-max-spot-color="rgb(96, 125, 139)" data-spot-color="rgb(96, 125, 139, 0.7)" data-offset={90} data-width="100%" data-height="50px" data-line-width={1} data-line-color="rgb(96, 125, 139, 0.7)" data-fill-color="rgba(96, 125, 139, 0.3)"> 6,4,7,8,4,3,2,2,5,6,7,4,1,5,7,9,9,8,7,6 </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="card">
            <div className="header">
              <h2><strong>Medical</strong> Treatment <small>18% High then last month</small></h2>
            </div>
            <div className="body">
              <div className="sparkline" data-type="line" data-spot-radius={1} data-highlight-spot-color="rgb(233, 30, 99)" data-highlight-line-color="#222" data-min-spot-color="rgb(233, 30, 99)" data-max-spot-color="rgb(120, 184, 62)" data-spot-color="rgb(120, 184, 62, 0.7)" data-offset={90} data-width="100%" data-height="50px" data-line-width={1} data-line-color="rgb(120, 184, 62, 0.7)" data-fill-color="rgba(120, 184, 62, 0.3)"> 6,4,7,6,9,3,3,5,7,4,2,3,7,6 </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="card">
            <div className="header">
              <h2><strong>New</strong> Patient <small>18% High then last month</small></h2>                        
            </div>
            <div className="body">                        
              <div className="sparkline" data-type="bar" data-width="97%" data-height="50px" data-bar-width={4} data-bar-spacing={10} data-bar-color="#00ced1">2,8,5,3,1,7,9,5,6,4,2,3,1</div>
            </div>
          </div>
        </div>
      </div>
      <div className="row clearfix">
        <div className="col-lg-4 col-md-12">
          <div className="card tasks_report">
            <div className="header">
              <h2><strong>Total</strong> Revenue</h2>                        
              <ul className="header-dropdown">
                <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more" /> </a>
                  <ul className="dropdown-menu dropdown-menu-right slideUp">
                    <li><a href="javascript:void(0);">2017 Year</a></li>
                    <li><a href="javascript:void(0);">2016 Year</a></li>
                    <li><a href="javascript:void(0);">2015 Year</a></li>
                  </ul>
                </li>
                <li className="remove">
                  <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                </li>
              </ul>
            </div>
            <div className="body text-center">
              <h4 className="margin-0">Total Sale</h4>
              <h6 className="m-b-20">2,45,124</h6>
              <input type="text" className="knob dial1" defaultValue={66} data-width={100} data-height={100} data-thickness="0.1" data-fgcolor="#212121" readOnly />
              <h6 className="m-t-20">Satisfaction Rate</h6>
              <small className="displayblock">47% Average <i className="zmdi zmdi-trending-up" /></small>
              <div className="sparkline m-t-20" data-type="bar" data-width="97%" data-height="28px" data-bar-width={2} data-bar-spacing={8} data-bar-color="#212121">3,2,6,5,9,8,7,8,4,5,1,2,9,5,1,3,5,7,4,6</div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-12">
          <div className="card patient_list">
            <div className="header">
              <h2><strong>New</strong> Patient List</h2>                        
              <ul className="header-dropdown">
                <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more" /> </a>
                  <ul className="dropdown-menu dropdown-menu-right slideUp">
                    <li><a href="javascript:void(0);">2017 Year</a></li>
                    <li><a href="javascript:void(0);">2016 Year</a></li>
                    <li><a href="javascript:void(0);">2015 Year</a></li>
                  </ul>
                </li>
                <li className="remove">
                  <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                </li>
              </ul>
            </div>
            <div className="body">
              <div className="table-responsive">
                <table className="table table-striped m-b-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th />
                      <th>Name</th>
                      <th>Address</th>
                      <th>Diseases</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td><img src="http://via.placeholder.com/35x35" alt="Avatar" className="rounded-circle" /></td>
                      <td>Virginia</td>
                      <td>123 6th St. Melbourne, FL 32904</td>
                      <td><span className="badge badge-danger">Fever</span> </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td><img src="http://via.placeholder.com/35x35" alt="Avatar" className="rounded-circle" /></td>
                      <td>Julie </td>
                      <td>71 Pilgrim Avenue Chevy Chase, MD 20815</td>
                      <td><span className="badge badge-info">Cancer</span> </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td><img src="http://via.placeholder.com/35x35" alt="Avatar" className="rounded-circle" /></td>
                      <td>Woods</td>
                      <td>70 Bowman St. South Windsor, CT 06074</td>
                      <td><span className="badge badge-warning">Lakva</span> </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td><img src="http://via.placeholder.com/35x35" alt="Avatar" className="rounded-circle" /></td>
                      <td>Lewis</td>
                      <td>4 Goldfield Rd.Honolulu, HI 96815</td>
                      <td><span className="badge badge-success">Dental</span> </td>
                    </tr>
                  </tbody>
                </table>
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
export default Dashbord;