import React from 'react'
import Stats from '../components/Stats';
import NavbarC from '../components/NavbarC';
import FooterC from '../components/FooterC';
import Faq from '../components/Faq';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import Study from '../components/Study';
import Teach from '../components/Teach';

const Home = () => {
  return (
    <div>
      <NavbarC/>
      <Hero/>
      <Study/>
      <Stats/>
      <Teach/>
      <Testimonials/>
      <Faq/>
      <FooterC/>
    </div>
  )
}

export default Home