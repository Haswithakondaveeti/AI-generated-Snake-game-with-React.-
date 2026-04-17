import { useState } from 'react';
import { Play, Pause, SkipForward, Music } from 'lucide-react';
import SnakeGame from './SnakeGame';

const songs = [
  { id: 1, title: 'Synthwave Night', artist: 'Neon AI' },
  { id: 2, title: 'Cybernetic Flow', artist: 'Digital Drift' },
  { id: 3, title: 'Bitstream Pulse', artist: 'Chrome Pulse' },
];

export default function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);

  const currentSong = songs[currentSongIndex];

  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center font-mono glitch-border">
      <h1 className="text-4xl font-bold text-cyan-400 mb-8 tracking-widest uppercase glitch-text">Neon Snake Beats</h1>

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl">
        {/* Game Area */}
        <div className="flex-grow bg-slate-950 border-2 border-cyan-500 rounded-none p-4 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)] glitch-border">
          <SnakeGame setScore={setScore} />
        </div>

        {/* Music Player */}
        <div className="w-80 bg-slate-950 border-2 border-purple-500 rounded-none p-6 shadow-[0_0_20px_rgba(168,85,247,0.3)] glitch-border">
          <h2 className="text-xl text-purple-400 mb-4 flex items-center gap-2 uppercase">
            <Music size={20} /> [SYS_DATA]
          </h2>
          <div className="mb-6 border-b border-purple-800 pb-4">
            <div className="text-lg font-bold text-white glitch-text">{currentSong.title}</div>
            <div className="text-sm text-gray-500">{currentSong.artist}</div>
          </div>
          <div className="flex justify-center gap-4">
            <button 
              className="p-3 bg-purple-900 border border-purple-500 hover:bg-purple-700 transition-colors"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause size={24} className="text-white"/> : <Play size={24} className="text-white"/>}
            </button>
            <button 
              className="p-3 bg-purple-900 border border-purple-500 hover:bg-purple-700 transition-colors"
                onClick={() => setCurrentSongIndex((prev) => (prev + 1) % songs.length)}
            >
              <SkipForward size={24} className="text-white"/>
            </button>
          </div>
          <div className="mt-8 text-center text-xl font-bold text-gray-200">
            [SCORE]: <span className="text-cyan-400 font-bold text-2xl">{score}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
