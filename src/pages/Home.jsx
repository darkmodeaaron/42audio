import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';


// component imports
import GlobalContact from '../globalComponents/GlobalContact';


// image imports
import LandingHeroImg from '../assets/HERO-BACKGROUND.png';
import audioRecImg from '../assets/AUDIO-RECORDING-BACKGROUND.png'
import musicVideoSupportImg from '../assets/BTS3.png';


const Home = ({ landingAnimationStateP, landingAnimationF, contactRefP }) => {
  const toTopRef = useRef(null);

  // useEffect(() => {
  //   window.scroll(0, 0);
  // }, []);

  const [imgSrc, setImgSrc] = useState(window.innerWidth > 768 ? LandingHeroImg : LandingHeroImg);

  const [BtsimgSrc, setBtsImgSrc] = useState(window.innerWidth > 768 ? audioRecImg : audioRecImg);

  useEffect(() => {
    // choose which ratio image loads.
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setImgSrc(LandingImg);
        setBtsImgSrc(audioRecImg)
      } else {
        setImgSrc(LandingImg768px);
        setBtsImgSrc(audioRecImg768px)
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

  }, []);


  return (
    <main>
      <section className={`main-container bg-black ${landingAnimationStateP ? 'landingHold' : ''}`}>
        <div className="landing-hero h-lvh relative">
          <img className={`hero-img h-screen object-cover w-screen ${landingAnimationStateP ? 'landingAnim' : ''}`} onLoad={landingAnimationF()} src={imgSrc} alt="" />
        </div>
        <div className="landing-sub h-screen relative" style={{backgroundImage: `url(${BtsimgSrc})`}}>
          <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center gap-8 px-4">
            <h1 className="custom-title text-4xl text-center font-extrabold text-heroBlue overflow-visible">AUDIO RECORDING</h1>
            <h2 className="custom-sub text-white text-center overflow-visible font-medium text-base">You play, we record. In either live or studio environment.</h2>
            <Link to="/audio-recording"><button className="custom bg-heroBlue2 text-white text-lg rounded-md px-4 font-semibold overflow-visible">LEARN MORE</button></Link>
          </div>
        </div>
        <div className="landing-sub h-screen relative" style={{backgroundImage: `url(${musicVideoSupportImg})`}}>
          <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center gap-8 px-4">
            <h1 className="custom-title text-4xl text-center font-extrabold text-heroBlue overflow-visible">MUSIC VIDEO SUPPORT</h1>
            <h2 className="custom-sub text-white text-center overflow-visible font-medium text-base">From pre-vis and design, to filming it on the day. Bring your idea to life.</h2>
            <Link to="/music-video-support"><button className="custom bg-heroBlue2 text-white text-lg rounded-md px-4 font-semibold overflow-visible">LEARN MORE</button></Link>
          </div>
        </div>
        <GlobalContact contactRefPP={contactRefP}/>
      </section>
    </main>
  );
};

export default Home;
