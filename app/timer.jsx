import React, { useState, useEffect } from "react";
//import lana from '../public/Ben.wav';
import YouTube from 'react-youtube';
import {useParams} from 'react-router';

const PomodoroTimer = () => {
  const [workSeconds, setWorkSeconds] = useState(1500); // 1 seconds = 25 minutes
  const [restSeconds, setRestSeconds] = useState(300); // 1 seconds = 25 minutes
  const [isWorking, setIsWorking] = useState(false);
  const [isResting, setIsResting]=useState(false);
  const [sessionCount, setSessionCount] = useState(0);
  const [session, setSession] = useState(null);
  const [player, setPlayer] = useState(null);

  const youtubeID = 'p1IIHbbdekA';
  const onReady = (e) => {
    setPlayer(e.target);
   };
  const onRestart = (e) => {
    setPlayer(e.target);
    player.restartVideo();
   };


  function play() {
    player.playVideo();
    };
  function stop() {
    player.pauseVideo();
    };
    function togglePlay(yes) {
      if (yes) {
        play()
      }
      else {
        stop()
      }
    }
  useEffect(() => {
    let workInterval = null;
    let restInterval = null;
    if (isWorking) {
      setSession('working');
      workInterval = setInterval(() => {
        setWorkSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (!isWorking && workSeconds !== 1500) {
      stop()
      clearInterval(workInterval);
    }

    if (isResting && sessionCount!=0) {
        setSession('resting');
        restInterval = setInterval(() => {
            setRestSeconds(seconds => seconds - 1);
          }, 1000);
    } else if (!isResting && restSeconds !== 300) {
        stop();
        clearInterval(restInterval);
      }

    if (workSeconds === 0 && sessionCount!=4) {
      setSessionCount(sessionCount + 1);
      play();
      setIsWorking(false);
      setSession('resting');
      setIsResting(true);
      setWorkSeconds(1500);
      setRestSeconds(300);
    } else if (workSeconds === 0 && sessionCount==4) {
        setRestSeconds(900);
        setSessionCount(sessionCount + 1);
        play();
        setIsWorking(false);
        setSession('resting');
        setIsResting(true);
        setWorkSeconds(1500);
    } else if (restSeconds===0) {
        setRestSeconds(300);
        stop();
        setIsWorking(true);
        setSession('working');
        setIsResting(false);
        setWorkSeconds(1500);
    }
    return () => {
        clearInterval(workInterval);
        clearInterval(restInterval);
    };
  }, [isWorking, isResting, restSeconds, workSeconds, sessionCount]);

   const toggleTimer = () => {
    if (session=='working'||sessionCount==0) {
        setIsWorking(!isWorking);
        //setIsResting(isResting);
    } else if (session=='resting') {
        togglePlay(!isResting);
        setIsResting(!isResting);
    } 
  };


  const resetTimer = () => {
    setSession('working');
    stop()
    if (isWorking) {
        setIsWorking(false);
        setWorkSeconds(1500);
        setIsResting(false);
        setSessionCount(0);
    } else if (isResting) {
        setIsResting(false);
        setRestSeconds(300);
        setIsWorking(false);
        setSessionCount(0);
    }

  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  };

  return (
    <>

        {session=='working' || sessionCount==0 ? <p style={{position: 'absolute', marginLeft:400, marginTop:-455}}>w0rk</p> :<p style={{position: 'absolute', marginLeft:400, marginTop:-455}}>r3st</p>}

    <div style={{filter:'drop-shadow(2px 2px 1px white)', filter: 'drop-shadow(1.95px 1.95px 2.6px white)',position: 'fixed', fontSize: '16px', top:'495px', left:'500px'}}>
      <p style={{marginBottom: 0, fontWeight: 'bold',fontSize: '14px', transform: 'skew(-0.5deg, -0.2deg)',color:'black', marginLeft:-25}}>︶꒦꒷pomodoro timer♡꒷꒦︶</p>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <YouTube videoId={youtubeID} onEnd={onRestart} onReady={onReady} opts={{height: '20px', width: '20px', playerVars: { controls: 1, },}}/>
        {session=='working' || sessionCount==0 ? <div style={{marginBottom: 0, fontWeight: 'bold', fontFamily: 'sans-serif',color:'black', marginLeft:10}}>{formatTime(workSeconds)}✰</div> : <div style={{marginBottom: 0, color:'black', fontWeight: 'bold', fontFamily: 'sans-serif', marginLeft:10}}>★⋆{formatTime(restSeconds)}⋆★</div>}

      </div>
      
      {session=='working' ? <button onClick={toggleTimer}>{isWorking ? "⏸ pause" : "👩🏻‍💻 start"}</button> : <button onClick={toggleTimer}>{isResting ? "⏸ pause" : "👩🏻‍💻 start"}</button>}
      <button onClick={resetTimer}>💎reset</button>
      <div style={{fontSize: '11px', fontWeight: 'bold', marginTop: 2, color: '#D75F5D', transform: 'skew(-0.5deg, -1deg)'}}>❥ 🅞🅜🅖 ❤ 🌹 session_count: {sessionCount}</div>
    </div>
    <footer>aesthetic pomodoro timer for lana del rey stans. plays unreleased lana during rest periods. used with create-react-app and embedded youtube video. lana stan volυмe : ▁▂▃▄▅▆▇▉</footer>
    </>
    
  );
};

export default PomodoroTimer;