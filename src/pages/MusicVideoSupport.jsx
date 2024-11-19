import React from 'react';

import SubPageTitling from '../globalComponents/SubPageTitling';
import GlobalContact from '../globalComponents/GlobalContact';

import locationIcon from '../assets/icons/LOCATION-ICON.png';
import planningIcon from '../assets/icons/PLANNING-ICON.png';
import filmingIcon from '../assets/icons/FILMING-ICON.png';
import audioRecordingLandingImg from '../assets/MVS-LAND.png';

import exitIcon from '../assets/icons/EXIT-ICON.png';

const MusicVideoSupport = ({ contactRefP, mobileNavFuncP, mobileNavStateP }) => {
  return (
<main>
      <section className={`subPage hidee`}>
      <div className="landing-sub h-screen relative" style={{backgroundImage: `url(${audioRecordingLandingImg})`}}>
          <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center gap-8 px-4 max-w-2xl mx-auto my-0">
            <div>
              <h1 className="custom-title text-4xl text-left font-extrabold text-heroBlue overflow-visible">MUSIC VIDEO SUPPORT</h1>
            </div>
            <div>
              <h2 className="custom-sub text-white text-right overflow-visible font-medium text-base">LETS WORK TOGETHER ON YOUR NEXT VIDEO.</h2>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center flex-col p-16 bg-white subPage'>

            <h1 className='custom-title font-extrabold text-4xl text-heroBlue overflow-visible text-center'>OUR PROCESS</h1>
            <div className='flex flex-col gap-8 p-12 md:flex-row'>
                {
                    threeSteps.map((step, idx) => {
                        return <MusicVideoSupportStep key={idx} title={step.title} icon={step.icon} text={step.text}/> 
                    })
                }
            </div>
            <button className="custom bg-heroBlue2 text-white text-lg rounded-md px-4 font-semibold overflow-visible" onClick={() => mobileNavFuncP()}>CONTACT US</button>
        </div>
        <div className={`sub-email z-40 ${mobileNavStateP ? 'show' : ''}`}>
          <div className='w-6 absolute top-7 right-4 z-50' onClick={() => mobileNavFuncP()}>
            <img src={exitIcon} alt="" />
          </div>
          <GlobalContact contactRefPP={contactRefP}/>
        </div>
      </section>
    </main>
  )
};

const MusicVideoSupportStep = ({ title, icon, text }) => {
  return (
    <div className="flex flex-col justify-center items-center w-56 gap-2 overflow-visible">
      <div className="w-20">
        <img className="w-full" src={icon} alt="" />
      </div>
      <h1 className="custom-sub-sub text-xl text-black font-semibold overflow-visible text-center">{title}</h1>
      <p className="custom-sub-sub text-center text-black text-xs">{text}</p>
    </div>
  );
};

const threeSteps = [
  {
    title: 'Site Visit',
    icon: locationIcon,
    text: 'Actually going to the venue to see if it can facilitate your ideas is the first thing we do. In this process we can assess rigging, power arrangements and communicate anything else with the venue that may be important for them to know about the production.',
  },
  {
    title: 'Pre-vis + Planning',
    icon: planningIcon,
    text: 'Information obtained from the site visit now allows us to plan in greater detail. Here we can pre-programme any lights, playback or video that you choose to incorporate, identify if any equipment needs to be hired, and determine a schedule for the day to get everything done.',
  },
  {
    title: 'Filming',
    icon: filmingIcon,
    text: 'Time to make it happen. All the hardwork has been done in the previous steps to ensure all you need to do now is PERFORM. Leave the build and everything needed to ensure you are camera ready to us.',
  },
];

export default MusicVideoSupport;
