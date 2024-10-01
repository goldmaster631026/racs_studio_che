/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

import Header from 'parts/Header.js';
import HeroPortfolio from 'parts/HeroPortfolio.js';
import Discuss from 'parts/Discuss.js';
import Footer from 'parts/Footer.js';
import AllPortfolio from 'parts/AllPortfolio.js';

import { Portfolios } from 'json/landingPageData.js';

export default class ProjectPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header />
        <HeroPortfolio />
        <AllPortfolio data={Portfolios} />
        <Discuss />
        <Footer />
      </>
    );
  }
}
