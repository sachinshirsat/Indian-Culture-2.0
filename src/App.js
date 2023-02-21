import { React, useEffect, useState } from 'react';
import './App.css';
import TopNavbar from './components/TopNavbar';
import Crossfade from './components/Crossfade';
import DidYouKnow from './components/DidYouKnow';
import Footer from './components/Footer';
import FreedomArc from './components/FreedomArc';
import HomeGallery from './components/HomeGallery';
// import HomeGalleryList from './components/HomeGalleryList';
import Jewell from './components/Jewell';
import Menubar from './components/Menubar';
import Partners from './components/Partners';
import Storypage from './components/Storypage';
import TodayinHistory from './components/TodayinHistory';
import VirtualWalk from './components/VirtualWalk';
import ExternalLinks from './components/ExternalLinks';
import Rarebook from './components/Rarebook';
import Moc from './components/Moc';
import ChildrenSec from './components/ChildrenSec';
import Catagories from './components/Catagories';
import CategoriesOpt from './components/CategoriesOpt';
// import $ from 'jquery';
/*import BacktoTop from '../src/image/arrow-up.svg'; */


import { ArrowUp } from 'react-feather';

function App() {
  // back to top btn
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button onClick={scrollToTop} className="back-to-top-button">
          <ArrowUp style={{marginLeft:'-1px'}}/>
        </button>
      )}

      <TopNavbar />
      <Menubar />
      <Crossfade />
      <CategoriesOpt />
      {/* <Catagories/> */}
      <FreedomArc />
      <DidYouKnow />
      <TodayinHistory />
      <Storypage />
      <VirtualWalk />
      <Jewell />
      <HomeGallery />
      {/* <HomeGalleryList/> */}
      <ChildrenSec />
      <Rarebook />
      <ExternalLinks />
      <Moc />
      <Partners />
      <Footer />

    </>
  );
}

export default App;
