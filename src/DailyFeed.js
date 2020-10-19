import React, { useState, useEffect } from "react";
import Post from "./Post";
import "./DailyFeed.css";
import FlipMove from 'react-flip-move';
import data from "./firebase";


function DailyFeed() {
  const [logs, setLog] = useState([]);

  useEffect(() => {
    data.collection('logs').onSnapshot((snapshot) =>
      setLog(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    
  
     
    <div className="feed">
    <FlipMove>
        {logs.map((post) => (
          <Post
            key={post.date}
            displayName={post.displayName}
            dailyLog={post.dailyLog}
            dailyHow={post.dailyHow}
            dailyLearn={post.dailyLearn}
            dailyIntern={post.dailyIntern}
            date={post.date}
            dailyHourstamp={post.dailyHourstamp}
            avatar={post.avatar}
            
          />
        ))}
        </FlipMove>
    </div>
  
  );
}

export default DailyFeed;