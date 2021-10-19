import React, { Component } from 'react';
import pathwayHouseImg from '../../assets/img/pathwayHouseLogo.png';
import pathwayHouseBuilding from '../../assets/img/pathway-house.png';

class PathwayHouse extends Component {
    render() {
        return (
            <section>
                <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
                    <div className="container">
                        <div className="row">
                            <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                                <div id="page-title-block" className="page-title block">
                                    <h1>Pathway House</h1>
                                </div>
                            </div>

                            <div id="top-content-right-region" className="top-content-right col-xs-12 col-md-6 text-right text-center-sm">
                                <div id="page-breadcrumbs-block" className="page-breadcrumbs block">
                                    <div className="breadcrumbs">
                                        <a href="/">Home</a>
                                        <span className="delimiter">›</span>
                                        <a href="/Facilities">Facilities</a>
                                        <span className="delimiter">›</span>
                                        <span title="" className="nolink">Pathway House</span>
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
                                                    <div className="col-md-3"><img src={pathwayHouseImg} alt="" className="img img-responsive ministryImg" /></div>
                                                    <div className="col-md-9"><p>Pathway House is an associated ministry of Pathway to Life.</p>
                                                        <p>The facility currently hosts psychology, tutoring, allied health professionals and counselling services.</p>
                                                        <p>Pathway House seeks to support people in the community, with a particular focus on people living with an Autism Spectrum Disorder (ASD).</p>
                                                    </div>
                                                </div>


                                                <div className="row margin-top-50">
                                                    <h4>Pathway House Facilitators & Contacts</h4>
                                                    <div className="padding-top-15 col-md-12 pathwayHouseContact">
                                                        <h5><strong>Kristine Bull</strong></h5>
                                                        <h6>Psychologist</h6>
                                                        <h6>Pathway House Administrator</h6>
                                                        <h6><strong>Mobile:</strong> 0437 225 767</h6>
                                                        <h6><strong>Email:</strong> <a href="mailto:Kristine_tas@yahoo.com.au">Kristine_tas@yahoo.com.au</a></h6>


                                                        <p className="margin-top-10">
                                                            <strong>Providing</strong> individual therapy for children, adolescents and adults. Cognitive, Academic, ASD and ADHD assessments.
                                                        </p>

                                                        <p className="margin-top-10"><strong>Facilitating</strong> - Group Therapy Programs</p>
                                                        <p>The Secret Agent Society (SAS): a social skills small group program aimed at kids around the ages of 8-12 years. This program is designed to improve the emotional regulation and social skills of children with high-functioning Autism/Aspergers Syndrome, Anxiety Disorders, ADHD, anger management difficulties and other general challenges with friendship, team work, conversations or staying calm. For more information visit <a href="https://www.sst-institute.net/" target="_blank" rel="noreferrer noopener">www.sst-institute.net</a>.</p>
                                                        <p>The PEERS program: a social skills intervention program for motivated teens and young adults who are interested in further developing their social skills, relating to the additional challenges posed at a High School level.</p>
                                                        <p>The Lego Socal Club: an after school socal and communication skills program for primary and high school aged children. This program is facilitated by Therapy Assistant - <strong>Kylie Grave</strong>.</p>
                                                    </div>

                                                    <div className="padding-top-30 col-md-12 pathwayHouseContact">
                                                        <h5><strong>Janine Brown</strong></h5>
                                                        <h6>BSW and BA Professional Honours (Human Services)</h6>
                                                        <h6>Mental Health Social Worker</h6>
                                                        <h6><strong>Mobile:</strong> 0487 770 216</h6>
                                                        <h6><strong>Email: </strong> <a href="mailto:jbsolutionscounselling@gmail.com">jbsolutionscounselling@gmail.com</a></h6>

                                                        <p className="margin-top-10"><strong>Providing</strong> individual counselling for adults and adolescents, for those with Mental Health Care Plans (MHCP), NDIS participants, MAIB or workers compensation claims or through self-referral.</p>
                                                    </div>

                                                    <div className="padding-top-30 col-md-12 pathwayHouseContact">
                                                        <h5><strong>Deanie de Boer</strong></h5>
                                                        <h6><em>Resilience Counselling</em></h6>
                                                        <h6>Bachelor Degree in Behavioral Studies (Psych), Masters in Counselling</h6>
                                                        <h6>Counsellor and Mental Health Recovery Coach</h6>
                                                        <h6><strong>Mobile: 0480 307 584</strong> </h6>
                                                        <h6><strong>Email: </strong> <a href="mailto:resilience.counselling@outlook.com">resilience.counselling@outlook.com</a></h6>

                                                        <p className="margin-top-10"><strong>Providing</strong> services for children over the age of 12, adolescents and adults.</p>
                                                    </div>

                                                    <div className="padding-top-30 col-md-12 pathwayHouseContact">
                                                        <h5><strong>Janine Richards</strong></h5>
                                                        <h6>Diploma in Counselling</h6>
                                                        <h6>Lifeline’s Crisis Counselling</h6>
                                                        <h6><strong>Mobile:</strong> 0417 400 982</h6>
                                                        <h6><strong>Email: </strong> <a href="mailto:pjgrichards@bigpond.com">pjgrichards@bigpond.com</a></h6>

                                                        <p className="margin-top-10"><strong>Providing</strong> relationship and individual counselling.</p>
                                                    </div>

                                                    <div className="padding-top-30 col-md-12 pathwayHouseContact">
                                                        <h5><strong>Dean Folks</strong></h5>
                                                        <h6>Master of Education (Counselling)</h6>
                                                        <h6><strong>Mobile:</strong> 0439 622 967</h6>
                                                        <h6><strong>Email: </strong> <a href="mailto:dean.folks00@gmail.com"> dean.folks00@gmail.com</a></h6>

                                                        <p className="margin-top-10"><strong>Providing</strong> counselling for individual adults and couples.</p>
                                                    </div>

                                                    <div className="padding-top-30 col-md-12 pathwayHouseContact">
                                                        <h5><strong>Regina Docking</strong></h5>
                                                        <h6>BSW, BA (Psych), AASW</h6>
                                                        <h6>Mental Health Social Worker</h6>
                                                        <h6><strong>Mobile:</strong> 0458 744 763</h6>
                                                        <h6><strong>Email: </strong> <a href="mailto:reginadocking2@gmail.com">reginadocking2@gmail.com</a></h6>

                                                        <p className="margin-top-10"><strong>Providing</strong> counselling and assessment to adults and adolescents, with mild to severe and complex mental health issues.</p>
                                                    </div>

                                                    <div className="padding-top-30 col-md-12 pathwayHouseContact">
                                                        <h5><strong>Rupert Penrith</strong></h5>
                                                        <h6><em>Three Point Health</em></h6>
                                                        <h6>Diploma of Counselling</h6>
                                                        <h6><strong>Mobile:</strong> 0422 020 556</h6>
                                                        <h6><strong>Email: </strong> <a href="mailto:roos1@live.com.au">roos1@live.com.au</a></h6>

                                                        <p className="margin-top-10"><strong>Providing</strong> counselling for individuals, couples and students.</p>
                                                    </div>

                                                    <div className="padding-top-30 col-md-12 pathwayHouseContact">
                                                        <h5><strong>Cindy Clingeleffer</strong></h5>
                                                        <h6><em>Compass Counselling Services</em></h6>
                                                        <h6>Masters in Counselling</h6>
                                                        <h6><strong>Mobile:</strong> 0478 607 213</h6>
                                                        <h6><strong>Email: </strong> <a href="mailto:compass.counsellor@gmail.com">compass.counsellor@gmail.com</a></h6>

                                                        <p className="margin-top-10"><strong>Providing</strong> personal counselling, grief and trauma therapy to all ages in challenging situations.</p>
                                                    </div>

                                                    <div className="padding-top-30 col-md-12 pathwayHouseContact">
                                                        <h5><strong>Melody Downs</strong></h5>
                                                        <h6>Diploma of Counselling</h6>
                                                        <h6><strong>Mobile:</strong> 0477 033 577</h6>
                                                        <h6><strong>Email: </strong> <a href="mailto:melodydowns@outlook.com">melodydowns@outlook.com</a></h6>

                                                        <p className="margin-top-10"><strong>Providing</strong> children, adolescents, adults and relationship counselling.</p>
                                                    </div>

                                                    <div className="padding-top-30 col-md-12 pathwayHouseContact">
                                                        <h5><strong>Anne Barker</strong></h5>
                                                        <h6>BA (Hons) Dip.Ed.</h6>
                                                        <h6><strong>Email: </strong> <a href="mailto:annepgeale65@gmail.com">annepgeale65@gmail.com</a></h6>

                                                        <p className="margin-top-10"><strong>Providing</strong> tutoring for students with learning issues including dyslexia.</p>
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

export default PathwayHouse;