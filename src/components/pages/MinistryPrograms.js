import React, { Component } from "react";
import youthImg from "../../assets/img/youth.png";
import kidsImg from "../../assets/img/kids.png";
//import TheBusImg from "../../assets/img/The Bus.png";
import discipleshipGroupImg from "../../assets/img/Discipleship Groups.png";
import prayerImg from "../../assets/img/prayer.png";
import campImg from "../../assets/img/2017 Camp.jpg";
import babysitImg from "../../assets/img/Babysit.png";
import pathwayCare from "../../assets/img/pathwayCareLogo.png";

class MinistryPrograms extends Component {
	render() {
		return (
			<section>
				<div
					id="top-content-region"
					className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1"
				>
					<div className="container">
						<div className="row">
							<div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
								<div id="page-title-block" className="page-title block">
									<h1>Pathway Ministries and Programs</h1>
								</div>
							</div>

							<div
								id="top-content-right-region"
								className="top-content-right col-xs-12 col-md-6 text-right text-center-sm"
							>
								<div id="page-breadcrumbs-block" className="page-breadcrumbs block">
									<div className="breadcrumbs">
										<a href="/">Home</a>
										<span className="delimiter">›</span>
										<span title="" className="nolink">
											Ministries
										</span>
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
										<img src={campImg} alt="" className="img img-responsive padding-bottom-20" />
										<div className="row">
											<div className="col-md-8 col-xs-12">
												<div className="row col-xs-12">
													<img src={pathwayCare} alt="" className="img img-responsive ministryImg padding-top-15 " />
													<br />
													<br />
													Pathway Care is the deed, service and support ministry of this church.
													<br />
													<br />
													Pathway Care <strong>encourages</strong> and <strong>empowers</strong> the people to show
													compassion and to bless others.
													<br />
													<br />
													<em>
														Supporting short term practical care: meals, transport, tasks in and around the home. We
														would love to hear from you, we are here to help.
													</em>
													<br />
													<br />
													<strong>Coordinators</strong>
													<br />
													<div
														style={{
															display: "flex",
															flexWrap: "wrap",
															columnGap: "50px",
															rowGap: "20px",
															padding: "0"
														}}
													>
														<p>
															John de Jonge
															<br />
															0418 501 298
														</p>
														<p>
															Diane de Jonge
															<br />
															0438 366 582
														</p>
													</div>
													<img src={youthImg} alt="" className="img img-responsive ministryImg padding-top-15 " />
													<br />
													Regular Bible studies <strong>encouraging</strong> and <strong>empowering</strong> high
													schoolers and events with a focus on <strong>igniting</strong> people for Christ.
													<br />
													<br />
													<strong>Coordinator</strong>
													<br />
													Chris Kamphuis
													<ul className="no-list-style">
														<li>0499 993 103</li>
													</ul>
													<img src={kidsImg} alt="" className="img img-responsive ministryImg padding-top-15" />
													<br />A Sunday service program <strong>encouraging</strong> and <strong>empowering</strong>{" "}
													our primary aged children three out of four Sundays.

													<br />
													<br />
													<p>
														During the Sunday Service
														<br />
														Age 4 – Grade 6
													</p>
													<p>
														{/* The program is run most Sundays and includes Bible stories, lessons and activities, singing
														and games. When Pathway Kids is not on the Sunday is either a Connect Service or family
														friendly service.
													</p>
													<p>
														Connect Services are run around an intergenerational model. They are designed, through
														mentoring and teaching, to involve children in the routine running of a Sunday service. This
														service is not a children’s service but designed to be child and family friendly. */}
														The program is run most Sundays and includes Bible stories, lessons and activities, singing and games.
													</p>
													<br />
													<strong>Coordinator</strong>
													<br />
													Bianca Niebuur
													<ul className="no-list-style">
														<li>0408 319 931</li>
													</ul>
													{/* <img src={TheBusImg} alt="" className="img img-responsive ministryImg padding-top-15" />
													<br />
													Incorporated into the Pathway Kids' program is The Bus ministry. Children along with their
													parent/s or guardian/s are collected by a free bus on Sunday morning from East Devonport to
													participate in Pathway Kids and appropriate Sunday services. We share in morning tea after the
													service. The goal of The Bus is to provide accessible transport to a safe and encouraging
													space for families, where they can build relationships with positive role models and encounter
													Christ.
													<br />
													<br />
													<strong>Coordinator</strong>
													<br />
													Diane de Jonge
													<ul className="no-list-style">
														<li>0438 366 582</li>
													</ul> */}
										
												</div>
											</div>
											<div className="col-md-4 col-xs-12">
												<img
													src={prayerImg}
													alt=""
													className="img img-responsive ministryImg padding-bottom-15 padding-top-15"
												/>
												<br />
												<strong>Meeting via Zoom</strong>
												<br />
												John de Jonge
												<ul className="no-list-style">
													<li>0418 501 298</li>
												</ul>
												The meeting can be joined via{" "}
												<a
													href="https://us02web.zoom.us/j/84970206821?pwd=QUlWNGN3UmJ1MW9KRHorZldQUGtadz09"
													rel="noreferrer noopener"
													target="_blank"
												>
													this link
												</a>
												.<br />
												<br />
												<strong>Latrobe</strong>
												<br />
												Philip Kamphuis
												<ul className="no-list-style">
													<li>0417 144 480</li>
												</ul>
												<strong>Devonport</strong>
												<br />
												Ettiene de Wilzem
												<ul className="no-list-style">
													<li>0403 720 501</li>
												</ul>
												<strong>East Devonport</strong>
												<br />
												Peter Atkins
												<ul className="no-list-style">
													<li>0417 671 067</li>
												</ul>
												<br />
												<img
													src={discipleshipGroupImg}
													alt=""
													className="img img-responsive ministryImg padding-top-15 padding-bottom-15"
												/>
												<br />
												<strong>Monday Night Growth Group</strong>
												<br />
												Philip Kamphuis
												<ul className="no-list-style">
													<li>0417 144 480</li>
												</ul>
												<strong>Steps Small Group</strong>
												<br />
												John Groenewold
												<ul className="no-list-style">
													<li>0491 139 022</li>
												</ul>
												<strong>The Clapham Sect</strong>
												<br />
												Alice de Kock

												<ul className="no-list-style">
													<li>0401 418 011</li>
												</ul>
												<strong>Ladies' Bible Study</strong>
												<br />
												Ruth Atkins
												<ul className="no-list-style">
													<li>0449 763 207</li>
												</ul>
												<strong>Young Adults' Bible Study</strong>
												<br />
												Jess de Jonge
												<ul className="no-list-style">
													<li>0467 376 767</li>
												</ul>
												<strong>Discipleship Group (DIG)</strong>
												<br />
												Reggie Atkins
												<ul className="no-list-style">
													<li>0407 438 990</li>
												</ul>
												<strong>Men's Bible Walk</strong>
												<br />
												Peter Atkins
												<ul className="no-list-style">
													<li>0417 671 067</li>
												</ul>
												<strong>Wednesday Night Dinner</strong>
												<br />
												Lynda Cameron
												<ul className="no-list-style">
													<li>0419 742 171</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default MinistryPrograms;
