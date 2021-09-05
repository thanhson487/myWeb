import React from 'react';
import Album from './conponent/Album';
import Banner from "./conponent/Banner"
import Header from './conponent/Header';
function DetailAlbumScreen(props) {
    return (
        <div>
            <Banner />
            <Header />
            <Album />
        </div>
    );
}

export default DetailAlbumScreen;