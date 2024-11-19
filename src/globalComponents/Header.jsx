import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// image imports
import LOGO from '../assets/42AUDIO-LOGO.png';

const Header = ({ landingAnimationStateP, contactFunc, contactToggleP, mobileNavFuncP }) => {

  const [navState, setNavState] = useState(false);
  const [navState2, setNavState2] = useState(true);
  const [whiteNavState, setWhiteNavState] = useState(false);

  const location = useLocation();



  useEffect(() => {
    if (navState) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }
  }, [navState])

  useEffect(() => {
    // sets whether nav is visible or not.
    if (window.innerWidth > 768) {
      setNavState2(false);
    } else {
      setNavState2(true);
    }

    // choose which ratio size image loads.
    const handleResize = () => {
      setNavState(false);
      if (window.innerWidth > 768) {
        setNavState2(false);
      } else {
        setNavState2(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // slides nav to the right then turns display to 'none'.
  function navShow() {
    if (!navState) {
      setNavState2(false);
      setTimeout(() => {
        setNavState(true);
      }, 100);
    }
    if (navState) {
      setNavState(false);
      setTimeout(() => {
        setNavState2(true);
      }, 500);
    }
  }

  function navHideClick() {
    setNavState(false);
  }

  return (
    <header>
      <section className={`header-container flex justify-between items-center py-6 px-4 fixed top-0 left-0 right-0 z-10 overflow-visible ${whiteNavState ? 'white' : ''}`}>
        <div className="header-left flex-1 md:flex-none ">
          <Link to="/">
            <div className="logo-container w-24 hidden md:block">
              <img className="logo-img w-full" src={LOGO} alt="" />
            </div>
          </Link>
        </div>
        <div className="header-center flex  justify-center z-50">
          <Link to="/">
            <div className="logo-container w-24 block md:hidden" onClick={() => navHideClick()}>
              <img className="logo-img w-full" src={LOGO} alt="" />
            </div>
          </Link>
        </div>
        <div className={`header-right flex items-center overflow-visible justify-end flex-1 ${landingAnimationStateP ? 'landingAnim' : ''}`}>
          <nav className={`nav ${navState ? 'navToggle' : ''} ${navState2 ? 'navShow' : ''} md:flex overflow-visible`}>
            <ul
              className={`nav-ul  text-center flex pb-20 flex-col absolute justify-center overflow-visible items-center bg-white top-0 bottom-0 h-screen -right-full w-screen gap-6 ${landingAnimationStateP ? 'landingAnim' : ''} ${navState ? 'navToggle' : ''} md:flex md:flex-row md:static md:h-auto md:w-auto md:text-xs md:p-0 md:bg-transparent`}
            >
              <Link to="/audio-recording" className="overflow-visible">
                <li className="overflow-visible text-4xl md:text-lg" onClick={() => navHideClick()}>
                  AUDIO RECORDING
                </li>
              </Link>
              <Link to="/music-video-support" className="overflow-visible">
                <li className="overflow-visible text-4xl md:text-lg" onClick={() => navHideClick()}>
                  MUSIC VIDEO SUPPORT
                </li>
              </Link>
              {/* <li className="overflow-visible">ARCHIVES</li> */}
              <li
                className="overflow-visible cursor-pointer text-4xl md:text-lg"
                onClick={() => {
                  navHideClick(), contactFunc(), contactToggleP(), mobileNavFuncP();
                }}
              >
                CONTACT
              </li>
            </ul>
          </nav>
          <div className="hamburger-container md:hidden z-50 cursor-pointer" onClick={() => navShow()}>
            <div className={`hamburger h-4 flex flex-col justify-between ${landingAnimationStateP ? 'landingAnim' : ''}`}>
              <span className={`hamburger-line hamburger-top ${navState ? 'navToggle' : ''}`}></span>
              <span className={`hamburger-line hamburger-middle ${navState ? 'navToggle' : ''}`}></span>
              <span className={`hamburger-line hamburger-bottom ${navState ? 'navToggle' : ''}`}></span>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
