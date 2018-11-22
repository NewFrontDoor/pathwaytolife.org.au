import React, { Component } from 'react';
import crcaLogo from '../../assets/img/CRCA-logo.png';
import childSafeImg from '../../assets/img/childsafe.jpg';

class About extends Component {
  render() {
    return (
      <section>
        <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
          <div className="container">
            <div className="row">
              <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                <div id="page-title-block" className="page-title block">
                  <h1>About</h1>
                </div>
              </div>

              <div id="top-content-right-region" className="top-content-right col-xs-12 col-md-6 text-right text-center-sm">
                <div id="page-breadcrumbs-block" className="page-breadcrumbs block">
                  <div className="breadcrumbs">
                    <a href="/">Home</a>
                    <span className="delimiter">›</span>
                    <span title="" className="nolink">About</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="content-region">
          <div className="container">
            <div className="row">
              <div id="main-content-region" className="main-content col-xs-12">
                <div className="region region-content">
                  <div id="block-system-main" className="block block-system">
                    <div className="content">
                      <div className="node node-page clearfix">
                        <div className="content">

                          <p>Pathway to Life is passionate about <b>ENCOURAGING</b> people to stay connected in Christ through <b>worship, prayer</b> and participation in <b>fellowship.</b></p>
                          <p>At Pathway we believe in <b>EMPOWERING</b> people with knowledge through <b>sound biblical teaching</b> with a focus on <b>discipleship</b> and <b>service</b> so that individuals can discover, grow and lead with the gifts God has given them.</p>
                          <p>Above all, Pathway to Life is about sharing the gospel message through purposeful <b>evangelism</b> and <b>IGNITING</b> people for Christ with a passion to search out the way to life.</p>
                          <p>Pathway is committed to be consistent in reviewing and regenerating our church to meet the needs of our community with the vision of continually winning others for Christ.</p>
                        </div>

                        <div className="row">
                          <div className="col-md-12 col-xs-12 padding-top-30">
                            We are a Christian Reformed Church, part of the <em><a href="https://crca.org.au/" target="_blank" rel="noreferrer noopener">Christian Reformed Churches of Australia</a></em> <img style={{ paddingLeft: "15px", paddingTop: "15px" }} src={crcaLogo} alt="" />
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-12 col-xs-12 padding-top-30">
                            We value the safety of all children so we have implemented the <a href="https://www.childsafe.org.au/" target="_blank" rel="noopener noreferrer">ChildSafe</a> system for ensuring our kids activities are safe for everyone.

                            <a href="https://www.childsafe.org.au/" target="_blank" rel="noopener noreferrer"><img style={{ paddingLeft: "15px", paddingTop: "15px", maxWidth: "210px" }} src={childSafeImg} alt="" /> </a>
                          </div>
                        </div>

                        <div className="row padding-top-30">
                          <div className="col-xs-12">
                            <h4>SUPPORTING PATHWAY</h4>
                            To make a donation to Pathway ministries and missions you can direct deposit it to: <br /><br />
                            <ul className="no-list-style">
                              <li><strong>Account:</strong> Pathway to Life</li>
                              <li><strong>BSB:</strong> 037 604</li>
                              <li><strong>Account Number:</strong> 293165</li>
                            </ul>
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
      </section >
    );
  }
}

export default About;