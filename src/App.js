import logo from './logo.svg';
import './App.css';
import Navbar2 from './components/Navbar';
import Stats from './components/Stats';
import FooterC from './components/FooterC';
import Faq from './components/Faq';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Study from './components/Study';
import Teach from './components/Teach';

function App() {
  return (
    <div>
      <Navbar2/>
      <Hero/>
      <Study/>
      <Stats/>
      <Teach/>
      <Testimonials/>
      <Faq/>
      <FooterC/>
    </div>
  );
}

export default App;
