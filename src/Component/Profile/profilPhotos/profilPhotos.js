import React from "react"; 
import img from "./../profilPhotos/assouma.jpg"
import "./profilPhotos.css"
const profilPhotos = () => {  
    return (    
      <div className="img">
        <img src={img} width="200" height="200"  alt="myprofilepic"/>    
    </div>
    );
 }; 
 export default profilPhotos;