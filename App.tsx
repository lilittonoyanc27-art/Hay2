import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, 
  RotateCcw, 
  ChevronRight, 
  Play, 
  BookOpen,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Lightbulb,
  ArrowRight
} from 'lucide-react';
import { 
  OBLIGATION_QUESTIONS, 
  OBLIGATION_THEORY,
  OBLIGATION_BG 
} from './constants';

type GameState = 'start' | 'theory' | 'playing' | 'end';

export default function App() {
  const [gameState, setGameState] = useState<GameState>('start');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const shuffledQuestions = useMemo(() => {
    return [...OBLIGATION_QUESTIONS].sort(() => Math.random() - 0.5).slice(0, 10);
  }, [gameState === 'playing' && currentIndex === 0]);

  const currentQuestion = shuffledQuestions[currentIndex];

  const handleAnswer = (idx: number) => {
    if (feedback) return;

    const isCorrect = idx === currentQuestion.correctIndex;
    if (isCorrect) {
      setScore(s => s + 1);
      setFeedback('correct');
    } else {
      setFeedback('incorrect');
    }
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    setFeedback(null);
    setShowExplanation(false);
    if (currentIndex < shuffledQuestions.length - 1) {
      setCurrentIndex(i => i + 1);
    } else {
      setGameState('end');
    }
  };

  const restart = () => {
    setGameState('start');
    setCurrentIndex(0);
    setScore(0);
    setFeedback(null);
    setShowExplanation(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-indigo-500/30 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <img src={OBLIGATION_BG} className="w-full h-full object-cover opacity-10 grayscale" alt="Background" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/20 to-slate-950" />
      </div>

      <AnimatePresence mode="wait">
        {/* --- START SCREEN --- */}
        {gameState === 'start' && (
          <motion.div 
            key="start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6 text-center"
          >
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity }}
               className="mb-8"
             >
                <div className="w-24 h-24 md:w-32 md:h-32 bg-indigo-600 rounded-3xl flex items-center justify-center shadow-[0_0_50px_rgba(79,70,229,0.4)] mx-auto">
                   <HelpCircle className="w-12 h-12 md:w-16 md:h-16 text-white" />
                </div>
             </motion.div>

             <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase italic text-transparent bg-clip-text bg-gradient-to-b from-white to-indigo-400">
                OBLIGACIÓN <br/> <span className="text-2xl md:text-4xl tracking-normal not-italic font-medium opacity-60">Hay que vs Tener que</span>
             </h1>

             <p className="max-w-xl text-lg md:text-xl text-slate-400 mb-12">
                Իմացիր տարբերությունը <span className="text-indigo-400 font-bold">Hay que</span> և <span className="text-indigo-400 font-bold">Tener que</span> կառույցների միջև:
             </p>

             <div className="flex flex-col md:flex-row gap-4 w-full max-w-md">
                <button 
                  onClick={() => setGameState('theory')}
                  className="flex-1 px-8 py-5 bg-indigo-600 text-white rounded-2xl font-black text-xl hover:bg-indigo-50 transition-all hover:text-indigo-600 shadow-xl flex items-center justify-center gap-3 group"
                >
                  <BookOpen className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  ՏԵՍՈՒԹՅՈՒՆ
                </button>
                <button 
                  onClick={() => setGameState('playing')}
                  className="flex-1 px-8 py-5 bg-white text-slate-950 rounded-2xl font-black text-xl hover:bg-indigo-400 hover:text-white transition-all shadow-xl flex items-center justify-center gap-3 group"
                >
                  <Play className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" />
                  ԽԱՂԱԼ
                </button>
             </div>
          </motion.div>
        )}

        {/* --- THEORY SCREEN --- */}
        {gameState === 'theory' && (
          <motion.div 
            key="theory"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6"
          >
             <div className="max-w-4xl w-full bg-slate-900/80 backdrop-blur-2xl p-8 md:p-16 rounded-[3rem] border border-white/10 shadow-3xl">
                <div className="flex items-center gap-4 mb-10">
                   <Lightbulb className="w-10 h-10 text-yellow-400 border-2 border-yellow-400/20 p-2 rounded-xl" />
                   <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter">Կանոններ</h2>
                </div>

                <div className="grid grid-cols-1 gap-6 mb-12">
                   {OBLIGATION_THEORY.map((point, i) => (
                     <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        key={i} 
                        className="bg-white/5 p-6 rounded-2xl border border-white/5"
                     >
                        <h3 className="text-indigo-400 font-black text-lg mb-2 uppercase tracking-widest">{point.title}</h3>
                        <p className="text-slate-300 mb-4">{point.description}</p>
                        <div className="bg-slate-950/50 p-4 rounded-xl border border-white/5 font-mono text-sm text-indigo-300">
                           {point.example}
                        </div>
                     </motion.div>
                   ))}
                </div>

                <button 
                  onClick={() => setGameState('playing')}
                  className="w-full py-6 bg-indigo-600 text-white rounded-2xl font-black text-2xl hover:bg-indigo-500 transition-all flex items-center justify-center gap-4 group"
                >
                  ԱՆՑՆԵԼ ՎԱՐԺՈՒԹՅՈՒՆՆԵՐԻՆ <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                </button>
             </div>
          </motion.div>
        )}

        {/* --- GAMEPLAY --- */}
        {gameState === 'playing' && (
          <motion.div 
             key="playing"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             className="relative z-10 min-h-screen flex flex-col p-4 md:p-8"
          >
             {/* Progress Header */}
             <div className="max-w-4xl w-full mx-auto flex items-center justify-between mb-12 bg-white/5 p-6 rounded-3xl border border-white/10">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center font-black text-xl">
                      {currentIndex + 1}
                   </div>
                   <div>
                      <div className="text-[10px] font-black uppercase opacity-40 tracking-widest leading-none mb-1">Հարց</div>
                      <div className="font-bold text-lg md:text-xl">{shuffledQuestions.length}-ից</div>
                   </div>
                </div>

                <div className="flex flex-col items-end">
                   <div className="text-[10px] font-black uppercase text-indigo-400 tracking-widest leading-none mb-1">Միավորներ</div>
                   <div className="text-2xl md:text-4xl font-black italic">{score}</div>
                </div>
             </div>

             {/* Main Area */}
             <div className="flex-1 flex flex-col items-center justify-center max-w-4xl w-full mx-auto relative px-4">
                <motion.div 
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full"
                >
                   <div className="bg-slate-900/60 backdrop-blur-xl p-8 md:p-16 rounded-[3rem] border border-white/10 shadow-3xl text-center">
                      <h2 className="text-3xl md:text-6xl font-black tracking-tighter leading-tight mb-8">
                         "{currentQuestion.sentence}"
                      </h2>
                      <p className="text-indigo-400 font-bold text-lg md:text-2xl mb-12 opacity-80">
                         {currentQuestion.translation}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                         {currentQuestion.options.map((option, idx) => (
                           <button
                             key={idx}
                             disabled={!!feedback}
                             onClick={() => handleAnswer(idx)}
                             className={`py-6 px-4 rounded-2xl font-black text-xl transition-all border-b-4 transform active:scale-95 ${
                                feedback === null 
                                ? 'bg-slate-800 border-b-slate-700 hover:border-indigo-500 hover:bg-slate-700'
                                : idx === currentQuestion.correctIndex 
                                   ? 'bg-green-500 border-b-green-700 text-white scale-105'
                                   : 'bg-red-500/20 border-red-500/50 text-red-500 opacity-50'
                             }`}
                           >
                              {option}
                           </button>
                         ))}
                      </div>

                      {/* Feedback & Explanation */}
                      <AnimatePresence>
                         {showExplanation && (
                           <motion.div 
                             initial={{ opacity: 0, height: 0 }}
                             animate={{ opacity: 1, height: 'auto' }}
                             className="overflow-hidden"
                           >
                              <div className={`mt-8 p-6 rounded-2xl border ${feedback === 'correct' ? 'bg-green-500/10 border-green-500/20' : 'bg-red-500/10 border-red-500/20 text-red-400'}`}>
                                 <div className="flex items-center gap-3 mb-2 font-black uppercase text-xs tracking-widest">
                                    {feedback === 'correct' ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <XCircle className="w-5 h-5 text-red-500" />}
                                    {feedback === 'correct' ? 'Ճիշտ է!' : 'Սխալ է...'}
                                 </div>
                                 <p className="text-slate-300">{currentQuestion.explanation}</p>
                                 
                                 <button 
                                   onClick={nextQuestion}
                                   className="mt-6 px-10 py-4 bg-white text-slate-950 rounded-xl font-black hover:bg-indigo-400 hover:text-white transition-all flex items-center justify-center gap-2 mx-auto"
                                 >
                                    ՀԱՋՈՐԴԸ <ChevronRight className="w-5 h-5" />
                                 </button>
                              </div>
                           </motion.div>
                         )}
                      </AnimatePresence>
                   </div>
                </motion.div>
             </div>
          </motion.div>
        )}

        {/* --- END SCREEN --- */}
        {gameState === 'end' && (
          <motion.div 
            key="end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6 text-center"
          >
             <div className="max-w-2xl w-full bg-slate-900 border-2 border-white/10 rounded-[4rem] p-12 md:p-20 shadow-3xl">
                <Trophy className="w-32 h-32 text-yellow-400 mx-auto mb-10 drop-shadow-[0_0_30px_rgba(250,204,21,0.3)] animate-bounce" />
                
                <h2 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase italic italic">
                   ԱՎԱՐՏ!
                </h2>

                <div className="mb-12">
                   <div className="text-slate-400 font-black uppercase tracking-[0.3em] mb-2 text-sm">Քո արդյունքը</div>
                   <div className="text-8xl md:text-9xl font-black text-indigo-400 italic">
                      {score}<span className="text-2xl md:text-4xl text-white/20 not-italic">/{shuffledQuestions.length}</span>
                   </div>
                </div>

                <div className="mb-12 p-6 bg-white/5 rounded-2xl border border-white/5">
                   <p className="text-xl font-bold text-slate-300">
                      {score === 10 ? "Կատարյալ! Դու պարտավորությունների վարպետ ես:" : score >= 7 ? "Շատ լավ է! Մի փոքր էլ և կհասնես կատարելության:" : "Լավ փորձ էր, բայց տեսությունը նորից նայելը չէր խանգարի:"}
                   </p>
                </div>

                <button 
                  onClick={restart}
                  className="w-full py-6 bg-white text-slate-950 rounded-2xl font-black text-2xl hover:bg-indigo-400 hover:text-white transition-all flex items-center justify-center gap-4 group"
                >
                  <RotateCcw className="w-8 h-8 group-hover:rotate-180 transition-transform duration-500" />
                  ՓՈՐՁԵԼ ՆՈՐԻՑ
                </button>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
