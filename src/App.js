import React from 'react';
import './App.css';
import Fullname from './Component/Profile/fullname/fullname';
import Introduction from './Component/Profile/introduction/introduction';
import ProfilPhotos from './Component/Profile/profilPhotos/profilPhotos';
import Adress from './Component/Profile/adress/adress';
import img from './autumn.jpg';
import Footer from './Component/Profile/footer/footer'

const App = () => (
    <div className="container"> 
  
    <div className="pic">

    <img  src={img} alt="autumn" width="500" height="300" />
    </div>
  
    <Fullname />
    <Introduction />
    <ProfilPhotos />
    <Adress />
    <Footer />
   
      </div>
    )
    

export default App;
