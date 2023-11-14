import React, { useState } from 'react';
import { Home } from './pages/Home';
import { Course } from './pages/Course';
import { Contact } from './pages/Contact';
import { About } from './pages/About';

export const WebSiteApp = () => {

    const [ open, setOpen ] = useState(false);

    const onOpen = () => {
        const updateOpen = !open;
        setOpen(updateOpen );
    }
 

  return (
    <>

        <Home  open={ open } onOpen={ onOpen } />

        <Course />

        <About />

        <Contact />

    </>
  )
}
