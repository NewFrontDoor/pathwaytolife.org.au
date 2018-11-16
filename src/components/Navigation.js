/* eslint-disable */
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
                          <li><a href="#" title="">Visit us @ 9:30am Sundays</a></li>
                          <li><a href="/Sermons" title="">Sermons</a></li>
                          <li><a href="/ContactUs" title="">Contact Us</a></li>
                          <li><a href="#" title="">Find Out What&#039;s On</a></li>
                        </ul>
                      </div> {/* /navbar-collapse */}
                    </nav>
                  </div>
                </div>

                <div className="block block-tb-megamenu">


                  <div className="content">
                    <div className="tb-megamenu tb-megamenu-main-menu">
                      <button data-target=".nav-collapse" data-toggle="collapse" className="btn btn-navbar tb-megamenu-button" type="button">
                        <i className="fa fa-reorder"></i>
                      </button>
                      <div className="nav-collapse  always-show">
                        <ul className="tb-megamenu-nav nav level-0 items-5">
                          <li className="tb-megamenu-item level-1 mega dropdown">
                            <a href="javascript:void(0);" className="dropdown-toggle" title="Visit Us">

                              Visit Us         <span className="caret"></span>
                            </a>
                            <div style={{ width: "750px" }} className="tb-megamenu-submenu dropdown-menu mega-dropdown-menu nav-child">
                              <div className="mega-dropdown-inner">
                                <div className="tb-megamenu-row row-fluid">
                                  <div className="tb-megamenu-column span3  mega-col-nav">
                                    <div className="tb-megamenu-column-inner mega-inner clearfix">
                                      <div className="tb-megamenu-block tb-block tb-megamenu-block">
                                        <div className="block-inner">

                                          <div className="block block-block">


                                            <div className="content">
                                              <h3>Welcome to Pathway to Life...</h3>  </div>
                                          </div>  </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="tb-megamenu-column span3  mega-col-nav">
                                    <div className="tb-megamenu-column-inner mega-inner clearfix">
                                      <ul className="tb-megamenu-subnav mega-nav level-1 items-4">
                                        <li className="tb-megamenu-item level-2 mega">
                                          <a href="#" title="Sundays">Sundays</a>
                                        </li>

                                        <li className="tb-megamenu-item level-2 mega">
                                          <a href="/SundayMorning" >Morning Service</a>
                                        </li>

                                        <li className="tb-megamenu-item level-2 mega">
                                          <a href="/Sermons" >Sermons</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>

                                  <div className="tb-megamenu-column span3  mega-col-nav">
                                    <div className="tb-megamenu-column-inner mega-inner clearfix">
                                      <ul className="tb-megamenu-subnav mega-nav level-1 items-4">
                                        <li className="tb-megamenu-item level-2 mega">
                                          <a href="#" title="Community Life">Community Life</a>
                                        </li>

                                        <li className="tb-megamenu-item level-2 mega">
                                          <a href="/MinistryPrograms" >Ministries and Programs</a>
                                        </li>

                                        <li className="tb-megamenu-item level-2 mega">
                                          <a href="/PathwayContacts" >Pathway Contacts & Information</a>
                                        </li>

                                      </ul>
                                    </div>
                                  </div>

                                  <div className="tb-megamenu-column span3  mega-col-nav">
                                    <div className="tb-megamenu-column-inner mega-inner clearfix">
                                      <ul className="tb-megamenu-subnav mega-nav level-1 items-4">
                                        <li className="tb-megamenu-item level-2 mega">
                                          <a href="#" title="About">About</a>
                                        </li>

                                        <li className="tb-megamenu-item level-2 mega">
                                          <a href="/About" title="About">About Us</a>
                                        </li>

                                        <li className="tb-megamenu-item level-2 mega">
                                          <a href="/WhatWeBelieve" >What We Believe</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>

                          <li className="tb-megamenu-item level-1 mega">
                            <a href="/Events" title="Contact Us">Events</a>
                          </li>

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
