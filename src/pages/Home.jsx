import React from 'react';
import { Nav } from '../components/Nav';

export const Home = ({ open, onOpen } ) => {
  return (
    <>
    <section className='header' id='home'>
      <Nav open={ open } onOpen={ onOpen } />
        
        <div className="text-box">
            <h1>World's Biggest University</h1>
            <p>Making website is now one of the easiest thing in the world.
                You just need to learn <br /> HTML, CSS, Javascript and you are good to go.
            </p>
            <a href="#" className='hero-btn'>Visit Us To Know More</a>
        </div>
    </section>


    </>
  )
}
