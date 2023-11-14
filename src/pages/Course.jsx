import React from 'react'
import { Footer } from '../components/Footer'

export const Course = () => {
  return (

    <>
<section className="course"  id='course'>
        <h1>Courses We Offer</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, ullam. At,
             tenetur aperiam placeat odit unde necessitatibus minima aliquid consequatur quos modi
            sint corporis dolorum explicabo fugiat, et molestiae earum!</p>

            <div className="row">
                <div className="course-col">
                    <h3>Intermediate</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Architecto necessitatibus, tenetur nemo ut voluptatibus, maiores ab quis adipisci
                        ullam temporibus nam dolorum vel animi. Officiis veniam cum hic eveniet veritatis?
                    </p>
                </div>

                <div className="course-col">
                    <h3>Degree</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Architecto necessitatibus, tenetur nemo ut voluptatibus, maiores ab quis adipisci
                        ullam temporibus nam dolorum vel animi. Officiis veniam cum hic eveniet veritatis?
                    </p>
                </div>

                <div className="course-col">
                    <h3>Post Graduation</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Architecto necessitatibus, tenetur nemo ut voluptatibus, maiores ab quis adipisci
                        ullam temporibus nam dolorum vel animi. Officiis veniam cum hic eveniet veritatis?
                    </p>
                </div>
            </div>
    </section>
    
        <Footer />
    </>
  )
}
