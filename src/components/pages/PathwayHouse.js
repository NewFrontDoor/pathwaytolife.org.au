import React, { Component } from "react";
import pathwayHouseImg from "../../assets/img/pathwayHouseLogo.png";
import pathwayHouseBuilding from "../../assets/img/pathway-house.png";

const PathwayContact = ({ name, organisation, qualifications, mobile, email, blurbs }) => {
	return (
		<div className="padding-top-30 col-md-12 pathwayHouseContact">
			<h5>
				<strong>{name}</strong>
			</h5>
			{!!organisation && (
				<h6>
					<em>{organisation}</em>
				</h6>
			)}
			{!!qualifications && qualifications.map((role) => <h6>{role}</h6>)}
			{!!mobile && (
				<h6>
					<strong>Mobile:</strong> {mobile}
				</h6>
			)}
			{!!email && (
				<h6>
					<strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
				</h6>
			)}
			{!!blurbs && blurbs.map((blurb) => <p className="margin-top-10" dangerouslySetInnerHTML={{ __html: blurb }} />)}
		</div>
	);
};

const contacts = [
	{
		name: "Kristine Bull",
		organisation: "",
		qualifications: ["Psychologist", "Pathway House Administrator"],
		mobile: "0437 225 767",
		email: "Kristine_tas@yahoo.com.au",
		blurbs: [
			"<strong>Providing</strong> individual therapy for children, adolescents and adults. Cognitive, Academic, ASD and ADHD assessments.",
			"<strong>Facilitating</strong> - Group Therapy Programs",
			`The Secret Agent Society (SAS): a social skills small group program aimed at kids around the ages of 8-12 years. This program is designed to improve the emotional regulation and social skills of children with high-functioning Autism/Aspergers Syndrome, Anxiety Disorders, ADHD, anger management difficulties and other general challenges with friendship, team work, conversations or staying calm. For more information visit <a href="https://www.sst-institute.net/" target="_blank" rel="noreferrer noopener">www.sst-institute.net</a>.`,
			"The PEERS program: a social skills intervention program for motivated teens and young adults who are interested in further developing their social skills, relating to the additional challenges posed at a High School level.",
			"The Lego Socal Club: an after school socal and communication skills program for primary and high school aged children. This program is facilitated by Therapy Assistant - <strong>Kim Klug</strong>."
		]
	},
	{
		name: "Janine Brown",
		organisation: "",
		qualifications: ["BSW and BA Professional Honours (Human Services)", "Mental Health Social Worker"],
		mobile: "0487 770 216",
		email: "jbsolutionscounselling@gmail.com",
		blurbs: [
			"<Strong>Providing</strong> individual counselling for adults and adolescents, for those with Mental Health Care Plans (MHCP), NDIS participants, MAIB or workers compensation claims or through self-referral."
		]
	},
	{
		name: "Deanie de Boer",
		organisation: "Resilience Counselling",
		qualifications: [
			"Bachelor Degree in Behavioral Studies (Psych), Masters in Counselling",
			"Counsellor and Mental Health Recovery Coach"
		],
		mobile: "0480 307 584",
		email: "resilience.counselling@outlook.com",
		blurbs: ["<strong>Providing</strong> services for children over the age of 12, adolescents and adults."]
	},
	{
		name: "Janine Richards",
		organisation: "",
		qualifications: ["Diploma in Counselling", "Lifeline’s Crisis Counselling"],
		mobile: "0417 400 982",
		email: "pjgrichards@bigpond.com",
		blurbs: ["<strong>Providing</strong> relationship and individual counselling."]
	},
	{
		name: "Dean Folks",
		organisation: "",
		qualifications: ["Master of Education (Counselling)"],
		mobile: "0439 622 967",
		email: "dean.folks00@gmail.com",
		blurbs: ["<strong>Providing</strong> counselling for individual adults and couples."]
	},
	{
		name: "Regina Docking",
		organisation: "",
		qualifications: ["BSW, BA (Psych), AASW", "Mental Health Social Worker"],
		mobile: "0458 744 763",
		email: "reginadocking2@gmail.com",
		blurbs: [
			"<strong>Providing</strong> counselling and assessment to adults and adolescents, with mild to severe and complex mental health issues."
		]
	},
	{
		name: "Rupert Penrith",
		organisation: "Three Point Health",
		qualifications: ["Diploma of Counselling"],
		mobile: "0422 020 556",
		email: "roos1@live.com.au",
		blurbs: ["<strong>Providing</strong> counselling for individuals, couples and students."]
	},
	{
		name: "Cindy Clingeleffer",
		organisation: "Compass Counselling Services",
		qualifications: ["Masters in Counselling"],
		mobile: "0478 607 213",
		email: "compass.counsellor@gmail.com",
		blurbs: [
			"<strong>Providing</strong> personal counselling, grief and trauma therapy to all ages in challenging situations."
		]
	},
	{
		name: "Celine Aufray Hayes",
		organisation: "",
		qualifications: ["Diploma of Counselling", "ACA Registered Counsellor - Level 2"],
		mobile: "0499 556 517",
		email: "celineahayes@outlook.com",
		blurbs: ["<strong>Providing</strong> individuals, children, and family counselling"]
	},
	{
		name: "Daniel West",
		organisation: "",
		qualifications: ["Diploma of Counselling"],
		mobile: "0437 503 771",
		email: "dwestcounselling@gmail.com",
		blurbs: [
			"<strong>Providing</strong> individual counselling for a variety of needs, with a particular passion for supporting young people."
		]
	}
];

class PathwayHouse extends Component {
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
									<h1>Pathway House</h1>
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
										<a href="/Facilities">Facilities</a>
										<span className="delimiter">›</span>
										<span title="" className="nolink">
											Pathway House
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
									<div id="block-system-main" className="block block-system">
										<div className="content">
											<img src={pathwayHouseBuilding} alt="" className="img img-responsive padding-bottom-20" />
											<div className="content">
												<div className="row">
													<div className="col-md-3">
														<img src={pathwayHouseImg} alt="" className="img img-responsive ministryImg" />
													</div>
													<div className="col-md-9">
														<p>Pathway House is an associated ministry of Pathway to Life.</p>
														<p>
															The facility currently hosts psychology, tutoring, allied health professionals and
															counselling services.
														</p>
														<p>
															Pathway House seeks to support people in the community, with a particular focus on people
															living with an Autism Spectrum Disorder (ASD).
														</p>
													</div>
												</div>

												<div className="row margin-top-50">
													<h4>Pathway House Facilitators & Contacts</h4>
													{contacts.map((contact) => (
														<PathwayContact {...contact} />
													))}
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
		);
	}
}

export default PathwayHouse;
