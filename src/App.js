import { useEffect, useState } from 'react';
import './App.css';
import iconOne from './222.png';
import iconTwo from './333.png';
import iconThree from './444.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  const [advice, setAdvice] = useState('');

  const [shake, setShake] = useState(false);

  const getAdvice = async () => {
    const response = await fetch(`https://www.boredapi.com/api/activity/`);
    const data = await response.json();
    console.log(data.activity);
    setAdvice(data.activity);
    animate();
  }

  const animate = () => {
    setShake(true);
    setTimeout(() => setShake(false), 1000);
  }

  useEffect(() => {
    getAdvice();
    AOS.init();
  }, [])



  return (
    <div className='wrapper'>
      <div className='container'>
        <h1 data-aos="fade-down" data-aos-duration="1500">I'm bored</h1>
        <div className='img_container' data-aos="fade-down" data-aos-duration="1500" data-aos-delay="500">
          <img className='icon' src={iconOne} alt='girl'/>
        </div>
        <div className='description' data-aos="fade-down" data-aos-duration="1500" data-aos-delay="800">
          <p>This website is designed to help you to find some activities.</p>
          <p>The goal is to make sure that once you click on the button you won't stay bored anymore.</p>
        </div>
        <div className='btn_container' data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="2000">
          <button onClick={getAdvice}>click here</button>
        </div>
        <div className='advice_wrapper'>
          <div className='advice_container'>
            <p data-aos="fade-down" data-aos-duration="1100" data-aos-delay="1100">Here is our advice for you:</p>
            <p className='advice' data-aos="fade-down" data-aos-duration="1500" data-aos-delay="1400" data-aos-once="true">{advice}</p>
          </div>
          <div className='icon_two' data-aos="fade-down" data-aos-duration="1500" data-aos-delay="1400" data-aos-once="true">
            <img src={iconTwo} className={shake ? `shake`: null}  alt='girl'/>
          </div>
          <div className='icon_three' data-aos="fade-down" data-aos-duration="1500" data-aos-delay="1400" data-aos-once="true">
            <img src={iconThree} className={shake ? `shake`: null} alt='girl'/>
          </div>
        </div>
      </div>
      <div className='footer'>
          <p> created by <span>nlangerbeins</span></p>
        </div>
    </div>
  );
}

export default App;
