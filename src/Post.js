import React, { forwardRef } from "react";
import "./Post.css"


const Post = forwardRef(
  ({ displayName,dailyLog,dailyHow,dailyLearn,dailyIntern,date,dailyHourstamp,avatar }, ref) => {
    return (
      <div ref={ref} className="post">
        <div>
          <img src={avatar} alt={displayName} className="avat"  />
        </div>
        <div className="badge date align-self-center">{date}</div>
        <h5 style={{float:"right"}}> {displayName}</h5>


        <div class="row row-content align-items-center mt-3">
        <div class="col-12 col-sm-4 order-sm-last col-md-3">
          <h6 className="two">Why</h6>
        </div>
        <div class="col col-sm order-sm-first col-md">
          <div class="media">
           
            <div class="media-body">
             
              <p class="one">
              {dailyHow}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="row row-content align-items-center ">
        <div class="col-12 col-sm-4 order-sm-first col-md-3">
          <h6 className="one">Today's Learning</h6>
        </div>
        <div class="col col-sm order-sm-last col-md">
          <div class="media">
            <div class="media-body">
              
              <p class="two">
              {dailyLearn}
              </p>
            </div>
            
          </div>
        </div>
      </div>

      <div class="row row-content align-items-center">
        <div class="col-12 col-sm-4 order-sm-last col-md-3 ">
          <h6 className="two">Today's Log</h6>
        </div>
        <div class="col col-sm order-sm-first col-md">
          <div class="media">
           
            <div class="media-body">
             
              <p class="one">
              {dailyLog}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="row row-content align-items-center">
        <div class="col-12 col-sm-4 order-sm-first col-md-3">
          <h6 className="one">Today's Internship work</h6>
        </div>
        <div class="col col-sm order-sm-last col-md">
          <div class="media">
            <div class="media-body">
              
              <p class="two">
              {dailyIntern}
              </p>
            </div>
            
          </div>
        </div>
      </div>


        
   
    <div className="badge hour">{dailyHourstamp}</div>
  
      
          
         
        </div>
   
    );
  }
);

export default Post;