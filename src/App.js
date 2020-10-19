import React from 'react';
import DailyFeed from "./DailyFeed";
import Main from "./Main";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="app container">
     <div className="row">
       <div className="col-lg-6 col-12">
   <Main/></div>
       <div className="col-lg-6 col-12">  <DailyFeed/></div>
     </div>
    
      
    </div>
    
  );
}

export default App;
