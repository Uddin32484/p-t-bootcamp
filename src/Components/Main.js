import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BtnComponent from './BtnComponent';
import DisplayComponent from './DisplayComponent';
import './Main.css';



// Developd By Yub Uddin 01/25/2021


function Main(props) {
  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  const [number, setNumber] = useState('');
 /*  const [number1, setNumber1] = useState(''); */
  const para = parseInt(number)+5;
 
  
 
 
  // Not started = 0
  // started = 1
  // stopped = 2

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };
 
  var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

   

 
  const run = () => {
    if(updatedM === 60){
      updatedH++;
      updatedM = 0;
    }
    if(updatedS === 60){
      updatedM=updatedM+2; 
      
      updatedS = 0;
    }
    if(updatedMs === 100){
      updatedS=updatedS+2;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
  };

  //stop count
  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };
// reset
  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0, s:0, m:0, h:0})
  };
   // resume count
  const resume = () => start();
  

  return (
    <div className="main-section">
 
     <div className="clock-holder">
          <div className="stopwatch">
               <DisplayComponent time={time}/>
               <BtnComponent status={status} resume={resume} reset={reset} stop={stop} start={start}/>
          </div>
          
     </div>
               <div className="label1">Route Parameters + 5</div>
             <div className="clock-holder"> 
         
           <input    class="form-control"  name="number" id="number" placeholder="Please Enter Your Number"  onChange={(e) => setNumber(e.target.value)} /> 
            {/* <Link to={"/jasonvalue/"+(2+2)}> */}
            <Link to={`/jasonvalue/${ para}`}>
            <button className="button">Click</button><br/>
        </Link>
         
     </div> 
       
        <div className="label2">Developed By: Yub uddin</div>
     </div>
   
  );
}

export default Main;
