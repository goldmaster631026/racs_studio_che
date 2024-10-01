/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

import {
  Services, Portfolios, Advantages, Testimonials,
} from 'json/landingPageData.js';
import Header from 'parts/Header.js';
import Hero from 'parts/Hero.js';
import Service from 'parts/Service.js';
import Portfolio from 'parts/Portfolio.js';
import Advantage from 'parts/Advantage.js';
import Testimonial from 'parts/Testimonial.js';
import Discuss from 'parts/Discuss.js';
import Footer from 'parts/Footer.js';

export default class LandingPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header />
        <Hero />
        <Service data={Services} />
        <Portfolio data={Portfolios} />
        <Advantage data={Advantages} />
        <Testimonial data={Testimonials} />
        <Discuss />
        <Footer />
      </>
    );
  }
}
