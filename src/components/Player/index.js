import { useState, useRef,useEffect } from 'react'
import "./style.css"
import PlayIcon from '../../assets/play-button.svg'
import PauseIcon from '../../assets/pause.svg'
import SoundOnIcon from '../../assets/sound-on.svg'
import SoundOffIcon from '../../assets/speaker-off.svg'






function Player({musics}){
    const [played, setPlayed] = useState(false)
    const [muted, setMuted] = useState(false)

    const audioRef = useRef();

    useEffect(() => {
        played ? audioRef.current.play() : audioRef.current.pause();
    }, [played])


   
    function togglePlayed(){
        setPlayed(!played);
    }

    function toggleMuted(){
        setMuted(!muted);
        audioRef.current.muted = !muted;
    }

    return(
      <div className="player">
          <span>{musics[0].name}</span>
          <img src={musics[0].capa} alt=""/>
          <audio src={musics[0].mp3} ref={audioRef} ></audio>
          <div className="controls">
              <img src={played ? PauseIcon : PlayIcon} alt="" onClick={togglePlayed}/>
              <img src={muted ? SoundOffIcon : SoundOnIcon} alt="" onClick={toggleMuted} />

          </div>

      </div>
        
    )
}
export default Player;