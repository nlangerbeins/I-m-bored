import { useEffect, useState } from 'react';
import './App.css';
import iconOne from './222.png';
import iconTwo from './333.png';
import iconThree from './444.png'

function App() {

  const [advice, setAdvice] = useState('');

  const getAdvice = async () => {
    const response = await fetch(`http://www.boredapi.com/api/activity/`);
    const data = await response.json();
    console.log(data.activity);
    setAdvice(data.activity);
  }

  useEffect( () => {
    getAdvice();
  }, [])

  return (
    <div className='wrapper'>
      <div className='container'>
        <h1>I'm bored</h1>
        <div className='img_container'>
          <img className='icon' src={iconOne} width="300px" alt='girl'/>
        </div>
        <div className='description'>
          <p>This website is designed to help you to find some activities.</p>
          <p>The goal is to make sure that once you click on the button you won't stay bored anymore.</p>
        </div>
        <div className='btn_container'>
          <button onClick={getAdvice}>click here</button>
        </div>
        <div className='advice_wrapper'>
          <div className='advice_container'>
            <p>Here is our advice for you:</p>
            <p className='advice'>{advice}</p>
          </div>
          <div className='icon_two'>
            <img src={iconTwo}  alt='girl'/>
          </div>
          <div className='icon_three'>
            <img src={iconThree} alt='girl'/>
          </div>
        </div>
      </div>
      <div className='footer'>
          <p>by <span>nlangerbeins</span></p>
        </div>
    </div>
  );
}

export default App;
