import React from 'react';
import { Link } from 'react-router-dom';

import GlobalContact from '../globalComponents/GlobalContact';

import exitIcon from '../assets/icons/EXIT-ICON.png';

// image imports
import recordingIcon from '../assets/icons/RECORDING-ICON.png';
import transferIcon from '../assets/icons/TRANSFER-ICON.png';
import mixingIcon from '../assets/icons/MIXING-ICON.png';
import audioRecordingLandingImg from '../assets/MVS-LAND.png';
import { useEffect } from 'react';

const AudioRecording = ({ contactRefP, mobileNavFuncP, mobileNavStateP }) => {

  useEffect(() => {
    if (mobileNavStateP) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }
  }, [mobileNavStateP])

  return (
    <main>
      <section className={`subPage hidee`}>
      <div className="landing-sub h-screen relative" style={{backgroundImage: `url(${audioRecordingLandingImg})`}}>
          <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center gap-8 px-4 max-w-2xl mx-auto my-0">
            <div>
              <h1 className="custom-title text-4xl text-left font-extrabold text-heroBlue overflow-visible">AUDIO RECORDING</h1>
            </div>
            <div>
              <h2 className="custom-sub text-white text-right overflow-visible font-medium text-base">You play, we record.</h2>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center flex-col p-16 bg-white subPage'>

            <h1 className='custom-title font-extrabold text-4xl text-heroBlue overflow-visible text-center'>OUR PROCESS</h1>
            <div className='flex flex-col gap-8 p-12 md:flex-row'>
                {
                    threeSteps.map((step, idx) => {
                        return <AudioRecordingStep key={idx} title={step.title} icon={step.icon} text={step.text}/> 
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
  );
};

const AudioRecordingStep = ({ title, icon, text }) => {
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
  { title: 'We Record', icon: recordingIcon, text: 'Up to 32 channels at a pre-fader level.' },
  { title: 'Transfer Files', icon: transferIcon, text: 'To your hard drive same day or shared via Dropbox for access anytime.' },
  { title: 'You Mix', icon: mixingIcon, text: 'In the DAW of your choice.' },
];

export default AudioRecording;
