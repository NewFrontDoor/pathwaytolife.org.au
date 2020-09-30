import React, { Component } from 'react';
import pathwayHouseImg from '../../assets/img/pathwayHouseLogo.png';
import communityHubImg from '../../assets/img/The Community HUB.png';

class Facilities extends Component {
    render() {
        return (
            <section>
                <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
                    <div className="container">
                        <div className="row">
                            <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                                <div id="page-title-block" className="page-title block">
                                    <h1>Facilities</h1>
                                </div>
                            </div>

                            <div id="top-content-right-region" className="top-content-right col-xs-12 col-md-6 text-right text-center-sm">
                                <div id="page-breadcrumbs-block" className="page-breadcrumbs block">
                                    <div className="breadcrumbs">
                                        <a href="/">Home</a>
                                        <span className="delimiter">›</span>
                                        <span title="" className="nolink">Facilities</span>
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
                                    <div className="content">
                                        <div className="node node-page clearfix">
                                            <div className="row">
                                                <div className="col-md-12 col-xs-12 padding-top-30">
                                                    <p>Our facilities are available for use when suitable; chapel, hall, kitchen, meeting rooms and Pathway House.</p>

                                                    <h4>PATHWAY HOUSE</h4>
                                                    <div className="row padding-top-15">
                                                        <div className="col-md-3"><img src={pathwayHouseImg} alt="" className="img img-responsive ministryImg" /></div>
                                                        <div className="col-md-9"><p>Pathway House is an associated ministry of Pathway to Life.</p>
                                                            <p>The facility currently hosts psychology, tutoring, allied health professionals and counselling services.</p>
                                                            <p>Pathway House seeks to support people in the community, with a particular focus on people living with an Autism Spectrum Disorder (ASD).</p>
                                                            <p>To find out more about Pathway House and contact details for the people involved please visit <a href="/PathwayHouse">this page</a>.</p>
                                                        </div>
                                                    </div>

                                                    <h4>THE COMMUNITY HUB</h4>
                                                    <div className="row padding-top-15">
                                                        <div className="col-md-3"><img src={communityHubImg} alt="" className="img img-responsive ministryImg" /></div>
                                                        <div className="col-md-9">
                                                            <p>The Community Hub is in association with Pathway House and an initiative of Pathway to Life Church.</p>
                                                            <p>The Hub is a place to come, connect and simply just be. This could mean for you learning a skill, enjoying a craft, playing a game, having coffee with friends or sharing a yummy brunch.</p>
                                                            <p>The Community HUB program for Term 4, 2020 will be coming soon!</p>
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
                </div>
            </section >
        );
    }
}

export default Facilities;