import React from 'react'
import './Home.css'
import Bubbles from '../components/Bubbles/Bubbles'


const Home = () => {

  return (
    <div className='home'>
    <div className='hello'>
      <h1>Hi</h1>
      <div className='avatar'>
        <img src='https://res.cloudinary.com/do7bnejaz/image/upload/v1682439893/assets/fotocv_whgnrj.jpg' alt='avatar Virginia Zurita'/>
      </div>
      <div className='animation'>
      <Bubbles/>
      </div>
    </div>
    <div className='subtitle'>
      <h3>My name is Virginia Zurita, </h3>
      <h3>I am a <a href='about' className='linkto'>web developer</a></h3>
    </div>
    </div>
  )
}

export default Home