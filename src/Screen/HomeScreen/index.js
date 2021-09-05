import React, { useMemo } from 'react';
import About from './component/About';
import Album from './component/Album';

import SlideShow from './component/SlideShow';


function HomeScreen(props) {
    return <>
        
        <SlideShow />
        <About />
        <Album />
     
    </>
}

export default HomeScreen;