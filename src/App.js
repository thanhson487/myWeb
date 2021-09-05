import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Footer from "./common/Footer";
import Navigation from "./common/Navigation";
import AboutScreen from "./Screen/AboutScreen";
import DetailAlbumScreen from "./Screen/DetailAlbumScreen";
import HomeScreen from "./Screen/HomeScreen";
import ListAlbumScreen from "./Screen/ListAlbumScreen";
function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Route path="/" exact component={HomeScreen} />
        <Route path="/about" component={AboutScreen} />
        <Route path="/album-phong-su-cuoi" component={ListAlbumScreen} />
        <Route path="/album-detail" component={DetailAlbumScreen} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
