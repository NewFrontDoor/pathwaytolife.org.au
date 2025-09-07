import React, { Component } from 'react';
import logo from '../assets/img/logo.png';

class Navigation extends Component {
  render() {
    return (
      <header className="header-1 region-0 block-0">
        <div className="container">
          <div className="row">

            <div id="logo-region" className="logo col-xs-12 col-md-3 text-center-sm">
              <a href="/"><img src={logo} alt="Home" className="logo" /></a>
            </div> {/* /logo-region */}

            <div id="menu-region" className="col-xs-12 col-md-9">
              <div className="region region-header">

                <div className="block block-menu hidden-md hidden-lg">


                  <div className="content">

                    <nav className="navbar nestor-main-menu" role="navigation">
                      {/* Menu button for mobile display */}
                      <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">MENU</button>
                      </div>

                      {/* Navigation links */}
                      <div className="collapse navbar-collapse navbar-ex1-collapse">
                        <ul className="nav navbar-nav navbar-right">
                          <li className="active"><a href="/" title="" className="active">Home</a></li>
                          <li><a href="/SundayMorning" title="">Visit us @9:30am Sundays</a></li>
                          <li><a href="/About" title="">About</a></li>
                          <li><a href="/Facilities" title="">Facilities</a></li>
                          <li><a href="/Sermons" title="">Sermons</a></li>
                          <li><a href="/MinistryPrograms" title="">Ministries</a></li>
                          <li><a href="/ContactUs" title="">Contact Us</a></li>
                        </ul>
                      </div> {/* /navbar-collapse */}
                    </nav>
                  </div>
                </div>

                <div className="block block-tb-megamenu">


                  <div className="content">
                    <div className="tb-megamenu tb-megamenu-main-menu">
                      <div className="nav-collapse  always-show">
                        <ul className="tb-megamenu-nav nav level-0 items-5">
                          <li className="tb-megamenu-item level-1 mega">
                            <a href="/SundayMorning" title="Visit Us">Sunday Morning</a>
                          </li>
                          <li className="tb-megamenu-item level-1 mega">
                            <a href="/About" title="About">About</a>
                          </li>
                          <li className="tb-megamenu-item level-1 mega">
                            <a href="/Facilities" title="Facilities">Facilities</a>
                          </li>

                          <li className="tb-megamenu-item level-1 mega">
                            <a href="/Sermons" title="Sermons">Sermons</a>
                          </li>

                          <li className="tb-megamenu-item level-1 mega">
                            <a href="/MinistryPrograms" title="Ministries">Ministries</a>
                          </li>

                          {/*<li className="tb-megamenu-item level-1 mega">
                            <a href="/Events" title="Events">Events</a>
                          </li>*/}

                          <li className="tb-megamenu-item level-1 mega">
                            <a href="/ContactUs" title="Contact Us">Contact Us</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>  </div>
            </div> {/* /menu-region */}

          </div> {/* /row */}
        </div> {/* /container */}
      </header>
    );
  }
}

export default Navigation;
