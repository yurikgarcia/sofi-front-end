import React, {useState} from 'react';
import Sound from 'react-sound';
import song from '../song.mp3';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const PlaySound =(
  handleSongLoading,
  handleSongPlaying,
  handleSongFinishedPlaying
) => {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
<main>

      <div>
                  <img src="https://www.medievalists.net/wp-content/uploads/2013/06/westeros.jpg" alt="Logo" />
      </div>


    <div>
  
      <Button variant="contained" onClick ={() => setIsPlaying(!isPlaying)}>
        {!isPlaying ? 'Play' : 'Stop'}
      </Button>
      <Sound
        url= {song}
        playStatus={
          isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED
        }
        playFromPosition={300}
        onLoading={handleSongLoading}
        onPlaying={handleSongPlaying}
        onFinishedPlaying={handleSongFinishedPlaying}
        />
         
    </div>
    </main>
  );
}

export default PlaySound;





  








  
 