import React, { useState } from 'react'
import "./Main.css";
import AcUnitTwoToneIcon from '@material-ui/icons/AcUnitTwoTone';
import { Button} from "@material-ui/core";
import {Modal} from "react-bootstrap";
import data from "./firebase";

function Main() {
  const [show, setShow] = useState(false);

  
    const [Log, setLog] = useState("");
    const [How, setHow] = useState("");
    const [Learn, setLearn] = useState("");
    const [Date, setDate] = useState("");
    const [Intern, setIntern] = useState("");
    const [HourStamp, setHourStamp] = useState("");
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const sendDailyLog = (e) => {
      e.preventDefault();
  
      data.collection("logs").add({
        displayName: "Harsh Chandravanshi",
       dailyLog:Log,
       dailyHow:How,
       dailyLearn:Learn,
       dailyIntern:Intern,
       date:Date,
       dailyHourstamp:HourStamp,
       avatar:
          "https://lh3.googleusercontent.com/zhVDG9FtGYvotCEDva44YKV-lH1PT9mDznXdgXPtK6o1ZzyAhd3OpCFMIq-dxm4w_eLgD4BqILiH3EFQPYXzc-tx-d2fWL0LKKEHXPVrQ096yZvE14Nb574B7HDrrNpE1ZKhEba22Q=w2400",
      });
  
      setLog("");
      setHow("");
      setLearn("");
      setDate("");
      setIntern("");
      setHourStamp("");
    };
  
    return (
      <div>
        <div className="mainsmall d-md-none">
          
          <div onClick={handleShow} className="mb-sm-6 container-fluid"><AcUnitTwoToneIcon fontSize="small"/>
        Log Your Day<AcUnitTwoToneIcon fontSize="small"/>
      </div>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log Your Day</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form  className="form">
             <input
              onChange={(e) => setDate(e.target.value)}
              value={Date}
              placeholder="Date"
              type="text"
            />
             <br/>
            <input
              onChange={(e) => setLog(e.target.value)}
              value={Log}
              placeholder="What's Today"
              type="text"
            />
           <br/>
          <input
              onChange={(e) => setHow(e.target.value)}
              value={How}
              placeholder="Today's How"
              type="text"
            /> <br/>
            <input
              onChange={(e) => setLearn(e.target.value)}
              value={Learn}
              placeholder="What you learn today"
              type="text"
            /> <br/>
             <input
              onChange={(e) => setIntern(e.target.value)}
              value={Intern}
              placeholder="Today's Internship work"
              type="text"
            />
            <br/>
            <input
              onChange={(e) => setHourStamp(e.target.value)}
              value={HourStamp}
              placeholder="Today's total hustling Hours"
              type="number"
            />
  <br/>
          
        </form></Modal.Body>
        <Modal.Footer>
          <Button  className="logb" onClick={handleClose}>
            Close
          </Button>
          <Button
            onClick={sendDailyLog}
            type="submit"
            className="logb"
          >
           Log
            
          </Button>
        </Modal.Footer>
      </Modal>

</div> 

      
      <div className="main d-none d-sm-block">
       
<h1><AcUnitTwoToneIcon fontSize="small"/>
        Log Your Day<AcUnitTwoToneIcon fontSize="small"/></h1>
        <form >
             <input
              onChange={(e) => setDate(e.target.value)}
              value={Date}
              placeholder="Date"
              type="text"
            />
             <br/>
            <input
              onChange={(e) => setLog(e.target.value)}
              value={Log}
              placeholder="What's Today"
              type="text"
            />
           <br/>
          <input
              onChange={(e) => setHow(e.target.value)}
              value={How}
              placeholder="Today's How"
              type="text"
            /> <br/>
            <input
              onChange={(e) => setLearn(e.target.value)}
              value={Learn}
              placeholder="What you learn today"
              type="text"
            /> <br/>
             <input
              onChange={(e) => setIntern(e.target.value)}
              value={Intern}
              placeholder="Today's Internship work"
              type="text"
            />
            <br/>
            <input
              onChange={(e) => setHourStamp(e.target.value)}
              value={HourStamp}
              placeholder="Today's total hustling Hours"
              type="number"
            />
  <br/>
          <Button
            onClick={sendDailyLog}
            type="submit"
            className="logb"
          >
           Log
            
          </Button>
        </form>
      </div>
      </div>
    );
}

export default Main;
