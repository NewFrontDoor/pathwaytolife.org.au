import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; //eslint-disable-line

import OtherPageContent from './OtherPageContent';

import AllSermons from './pages/AllSermons';
import Sermons from './pages/Sermons';
import SermonPage from './pages/SermonPage';
import SermonSeriesPage from './pages/SermonSeriesPage';


import OurPeople from './pages/OurPeople';
import About from './pages/About';
import Events from './pages/Events';
import Directory from './pages/Directory';
import SundayMorning from './pages/SundayMorning';
import MinistryPrograms from './pages/MinistryPrograms';
import PathwayKids from './pages/PathwayKids';
import Facilities from './pages/Facilities';


import ContactUs from './pages/ContactUs';
import PathwayHouse from './pages/PathwayHouse';


class OtherPageWrapper extends Component {
  render() {
    return (
      <section>
        <Switch>
          <Route exact path="/AllSermons" component={AllSermons} />
          <Route exact path="/Sermons" component={Sermons} />

          <Route exact path="/sermon/:nid" component={SermonPage} />
          <Route exact path="/sermon/:nid/:title" component={SermonPage} />
          <Route exact path="/series/:nid" component={SermonSeriesPage} />
          <Route exact path="/series/:nid/:title" component={SermonSeriesPage} />

          <Route exact path="/About" component={About} />
          <Route exact path="/OurPeople" component={OurPeople} />
          <Route exact path="/ContactUs" component={ContactUs} />
          <Route exact path="/Events" component={Events} />
          <Route exact path="/PathwayContacts" component={Directory} />
          <Route exact path="/SundayMorning" component={SundayMorning} />
          <Route exact path="/MinistryPrograms" component={MinistryPrograms} />
          <Route exact path="/Facilities" component={Facilities} />
          <Route exact path="/PathwayHouse" component={PathwayHouse} />
          <Route exact path="/PathwayKids" component={PathwayKids} />

          <Route path="/*" component={OtherPageContent} />
        </Switch>
      </section>
    );
  }
}

export default OtherPageWrapper;
