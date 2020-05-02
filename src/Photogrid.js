import React from 'react';
import './Photogrid.css'
import portrait1 from './images/portrait1.jpeg';
export default function Photogrid(){
    return(
        <div className = 'container'>
        <div className = 'horizontal'><img src = {require("./images/landscape1.jpeg")}/></div> 
        <div><img src = {require("./images/cake.jpeg")}/></div> 
        <div class = 'horizontal'><h1>HAPPY BIRTHDAY</h1></div>
        <div className = 'horizontal'><img src = {require("./images/landscape2.jpeg")}/></div>
        <div className = 'big'><img src = {require("./images/cake.jpeg")}/></div>
        <div class = 'horizontal'><h1>HAPPY BIRTHDAY</h1></div>
        <div className = "vertical"><img src = {require("./images/portrait1.jpeg")}/></div> 
        <div className = 'vertical'>
        <p>rhfudv ufhdc ujhndcjdncv jfndjcn jncjdsvnc</p>
        <p>iweuhvd jdscn jncdjvcn gdfvcfd sfdx fvdcsSSZ hgfdesx hnbfsdx jhgfsdvx uhmgfwesd uyjhgrsf</p>
        </div>
        <div className = "vertical"><img src = {require("./images/portrait2.jpeg")}/></div>
        <div class = 'horizontal'><h1>HAPPY BIRTHDAY</h1></div>
        <div className = 'horizontal'><img src = {require("./images/landscape3.jpeg")}/></div>
        <div><img src = {require("./images/portrait3.jpeg")}/></div> 
        <div class = 'horizontal'><h1>HAPPY BIRTHDAY</h1></div>
        <div><img src = {require("./images/cake.jpeg")}/></div> 
        <div className = 'vertical'><img src = {require("./images/portrait5.jpeg")}/></div>
        <div class = 'horizontal'><h1>HAPPY BIRTHDAY</h1></div>
        <div className = 'horizontal'><img src = {require("./images/landscape4.jpeg")}/></div>
        <div><img src = {require("./images/cake.jpeg")}/></div> 
        </div>
    );
}

// export default Photogrid;