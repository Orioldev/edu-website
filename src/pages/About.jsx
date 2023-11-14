import React from 'react'
import { Footer } from '../components/Footer';
import London from '../images/london.png'
import NewYork from '../images/newyork.png'
import Washington from '../images/washington.png'
import Library from '../images/library.png'
import Basketball from '../images/basketball.png'
import Cafeteria from '../images/cafeteria.png'
import User1 from '../images/user1.jpg'
import User2 from '../images/user2.jpg'





export const About = () => {
  return (
    <>
    <section className="campus" id='about'>
        <h1>Our Global Campus</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, inventore?</p>

        <div className="row">
            <div className="campus-col">
                <img src={ London } alt="London" />
                <div className="layer">
                    <h3>LONDON</h3>
                </div>
            </div>

            <div className="campus-col">
                <img src={ NewYork } alt="New York" />
                <div className="layer">
                    <h3>NEW YORK</h3>
                </div>
            </div>

            <div className="campus-col">
                <img src={ Washington } alt="whashington" />
                <div className="layer">
                    <h3>WASHINGTON</h3>
                </div>
            </div>
        </div>
    </section>

    {/* Facilities */}

    <section className='facilities'>
        <h1>Our</h1>
        <p>Lorem  elit Aperiam distinctio blanditiis, obcaecati sit enim iste recusandae. Reiciendis laudantium, atque itaque incidunt ea, inventore voluptatem, iusto dicta nihil fugiat nesciunt deserunt!</p>
        <div className="row">
            <div className="facilities-col">
                <img src={ Library } alt="library" />
                <h3>World Class Library</h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque inventore sapiente eius soluta rerum blanditiis,
                    facere expedita praesentium excepturi distinctio.
                </p>
            </div>

            <div className="facilities-col">
                <img src={ Basketball } alt="basketball" />
                <h3>Largest Play Ground</h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque inventore sapiente eius soluta rerum blanditiis,
                    facere expedita praesentium excepturi distinctio.
                </p>
            </div>

            <div className="facilities-col">
                <img src={ Cafeteria } alt="library" />
                <h3>Tasty and Healthy Food</h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Neque inventore sapiente eius soluta rerum blanditiis,
                    facere expedita praesentium excepturi distinctio.
                </p>
            </div>

        </div>
    </section>

    {/* Testimonials */}

    <section className="testimonials">
        <h1>What Our Student Says</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sed, illo aut dicta reiciendis deleniti.
        </p>

        <div className="row">
            <div className="testimonial-col">
                <img src={ User1 } alt="user1" />
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam excepturi 
                        et esse magnam iste architecto atque laboriosam sed repudiandae quidem! 
                        Perferendis tempora magni facere est libero corporis delectus amet sunt.
                    </p>
                    <h3>Christine Berkley</h3>
                    <i className='fa fa-start'></i>
                    <i className='fa fa-start'></i>
                    <i className='fa fa-start'></i>
                    <i className='fa fa-start'></i>
                    <i className='fa fa-half-0'></i>

                </div>
            </div>

            <div className="testimonial-col">
                <img src={ User2 } alt="user1" />
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam excepturi 
                        et esse magnam iste architecto atque laboriosam sed repudiandae quidem! 
                        Perferendis tempora magni facere est libero corporis delectus amet sunt.
                    </p>
                    <h3>Edward Ben</h3>
                    <i className='fa fa-start'></i>
                    <i className='fa fa-start'></i>
                    <i className='fa fa-start'></i>
                    <i className='fa fa-start'></i>
                    <i className='fa fa-half-0'></i>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
