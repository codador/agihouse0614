import { useState, useRef, useEffect } from 'react';

/**
 * Hook for controlling music playback
 * JavaScript implementation of the TypeScript hook from the original project
 */
export const useMusicPlayer = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', () => setIsPlaying(false));

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, [currentSong]);

  const playSong = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
    
    // In a real app, we would set the audio source here
    // if (audioRef.current) {
    //   audioRef.current.src = song.audioUrl;
    //   audioRef.current.play();
    // }
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    
    // In a real app, we would play/pause the audio here
    // if (audioRef.current) {
    //   if (isPlaying) {
    //     audioRef.current.pause();
    //   } else {
    //     audioRef.current.play();
    //   }
    // }
  };

  const seekTo = (time) => {
    setCurrentTime(time);
    
    // In a real app, we would seek the audio here
    // if (audioRef.current) {
    //   audioRef.current.currentTime = time;
    // }
  };

  return {
    currentSong,
    isPlaying,
    currentTime,
    duration,
    playSong,
    togglePlayPause,
    seekTo,
    audioRef
  };
};
