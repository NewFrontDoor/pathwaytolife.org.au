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
		name: "Bianca Niebuur",
		organisation: "",
		qualifications: ["Bachelor of Education (Hons) and Masters of Speech Pathology", "Pathway House Administrator", "Teacher", "Speech and Language Pathologist"],
		mobile: "0408 319 931",
		email: "biancaniebuur@gmail.com",
		blurbs: [
			"<strong>Providing</strong> individual assessment and therapy for children with speech, language, communication, and learning needs. Self-referrals, NDIS participants, and Medicare referrals are all welcome.",
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
		name: "Janine Richards",
		organisation: "",
		qualifications: ["Diploma in Counselling", "Lifeline’s Crisis Counselling"],
		mobile: "0417 400 982",
		email: "pjgrichards@bigpond.com",
		blurbs: ["<strong>Providing</strong> relationship and individual counselling."]
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
		name: "Dean Folks",
		organisation: "",
		qualifications: ["Master of Education (Counselling)"],
		mobile: "0439 622 967",
		email: "dean.folks00@gmail.com",
		blurbs: ["<strong>Providing</strong> counselling for individual adults and couples."]
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
															The facility currently hosts tutoring, allied health professionals, and counselling services.
														</p>
														<p>
															Pathway House seeks to support people in the community through access to affordable allied health services.
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
