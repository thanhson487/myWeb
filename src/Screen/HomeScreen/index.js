import React from 'react';
import About from './component/About';
import Album from './component/Album';
import Blog from './component/Blog';
import ContactUs from './component/ContactUs';
import Quote from './component/Quote';
import SlideShow from './component/SlideShow';


function HomeScreen(props) {
    return <>
        <SlideShow />
        <About />
        <Blog />
        <Quote/>
        <Album />
        <ContactUs/>
    </>
}

export default HomeScreen;