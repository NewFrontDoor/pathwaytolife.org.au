import React, { Component } from "react";
import sundayServiceImg from "../../assets/img/entrance.jpg";
import covidImg from "../../assets/img/COVID SAFE.png";

class MorningService extends Component {
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
									<h1>Sunday Mornings</h1>
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
											Sunday Morning
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
										{/*<p>Pathway has gone online with a weekly Zoom service.</p>
                                        <p>Information for this is passed onto known contacts and more can be found through <a href="/ContactUs">contacting the church</a> or visiting the <a href="https://www.facebook.com/PathwaytoLifeChurch/">Facebook page</a>.</p>*/}

										<img src={sundayServiceImg} alt="" className="img img-responsive padding-bottom-20" />
										<p>Join us on Sundays at 9:30am for our weekly service.</p>

										<p>
											Pre service <strong>prayer time</strong> starts at 9:10am.
										</p>

										<p>
											During the service our <strong>children's program</strong> Pathway Kids runs most Sundays for
											children aged 4 to Grade 6.
											<br />
											During the service <strong>Babysit</strong> is available for children under 4 years of age.
										</p>

										<p>
											A <strong>hearing loop</strong> system is available.
										</p>

										<p>
											After the service all are welcome to share in <strong>morning tea</strong> and fellowship.
										</p>

										<p>
											If anyone would like to <strong>talk or pray</strong> with a church leader the opportunity is
											available immediately after the service.
										</p>

										<div className="row padding-top-20">
											<div className="col-sm-2 text-center">
												<img src={covidImg} alt="" className="img img-responsive ministryImg" />
											</div>
											<div className="col-sm-10 padding-top-30">
												<p>
													Pathway to Life is following Government restrictions and requirements concerning COVID-19.
													Feel free to contact the church if you would like any further information.
												</p>
											</div>
										</div>
										<div className="row padding-top-20">
											<p>
												Sunday morning services are available to be joined virtually via Zoom using{" "}
												<a
													href="https://us02web.zoom.us/j/84970206821?pwd=QUlWNGN3UmJ1MW9KRHorZldQUGtadz09"
													rel="noreferrer noopener"
													target="_blank"
												>
													this link
												</a>
											</p>
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

export default MorningService;
