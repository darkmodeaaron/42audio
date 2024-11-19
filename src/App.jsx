import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

// css imports
import './index.css';

// components imports
import Header from './globalComponents/Header';
import Home from './pages/Home';
import AudioRecording from './pages/AudioRecording';
import MusicVideoSupport from './pages/MusicVideoSupport';

function App() {
  const [landingAnimationState, setLandingAnimationState] = useState(true);
  const contactRef = useRef(null);

  const [mobileNavState, setMobileNavState] = useState(false)

  function mobileNavFunc() {
    if (location.pathname != '/') {
      setMobileNavState(!mobileNavState)
    } 
  }

  const scrollToSection = () => {
    // scroll down to contact section.
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  function landingAnimation() {
    // once hero image has loaded, landingAniamtion is triggered.
    setTimeout(() => {
      setLandingAnimationState(false);
    }, 1250);
  }

  const location = useLocation();

  useEffect(() => {
    // sets website back to the top when refreshed.
    window.history.scrollRestoration = 'manual';
    if (location.pathname != '/') {
      setLandingAnimationState(false);
    }
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const [contactState, setContactState] = useState(false);

  function contactToggle() {
    if (location.pathname != '/') {
      setContactState(!contactState);
    }
  }

  return (
    <>
      <Header landingAnimationStateP={landingAnimationState} contactFunc={scrollToSection} contactStateP={contactState} contactToggleP={contactToggle} mobileNavFuncP={mobileNavFunc}/>
      <Routes>
        <Route path="/" element={<Home landingAnimationStateP={landingAnimationState} landingAnimationF={landingAnimation} contactRefP={contactRef} />}></Route>
        <Route path="/audio-recording" element={<AudioRecording contactRefP={contactRef} contactStateP={contactState} contactToggleP={contactToggle} mobileNavFuncP={mobileNavFunc} mobileNavStateP={mobileNavState}/>}></Route>
        <Route path="/music-video-support" element={<MusicVideoSupport contactRefP={contactRef} contactStateP={contactState} contactToggleP={contactToggle} mobileNavFuncP={mobileNavFunc} mobileNavStateP={mobileNavState}/>}></Route>
      </Routes>
    </>
  );
}

export default App;
