import React, { useState } from 'react';
import { Sword, Brain, Trophy, Wallet2, Users, Timer, Zap, Crown, Star } from 'lucide-react';

type LiveUpdate = {
  type: 'win' | 'join';
  player: string;
  amount?: number;
  topic?: string;
};

function App() {
  const [isConnected, setIsConnected] = useState(false);
  
  const liveUpdates: LiveUpdate[] = [
    { type: 'win', player: 'CryptoKing', amount: 5.5 },
    { type: 'join', player: 'LogicMaster', topic: 'Should AI have human rights?' },
    { type: 'win', player: 'DebateQueen', amount: 2.8 },
  ];

  const handleConnect = () => {
    setIsConnected(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0b1e] text-gray-100">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-float mb-8">
            <h1 className="arcade-title text-5xl md:text-7xl mb-6">
              DEBATRIX
            </h1>
            <p className="font-press-start text-sm md:text-base text-emerald-400 mt-4">
              Step into the Arena. Argue. Stake. Conquer.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
            <button className="arcade-button w-full md:w-auto">
              <span className="flex items-center justify-center gap-3">
                <Sword className="w-5 h-5" />
                Join a Debate
              </span>
            </button>
            
            <button
              onClick={handleConnect}
              className="arcade-button w-full md:w-auto"
            >
              <span className="flex items-center justify-center gap-3">
                <Wallet2 className="w-5 h-5" />
                Connect Wallet
              </span>
            </button>
          </div>

          {/* Live Feed */}
          <div className="live-feed h-32 max-w-md mx-auto glass-panel p-4">
            <h3 className="font-press-start text-xs text-emerald-400 mb-4">LIVE FEED</h3>
            <div className="scroll-text space-y-3">
              {liveUpdates.map((update, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  {update.type === 'win' ? (
                    <>
                      <Trophy className="w-4 h-4 text-yellow-500" />
                      <span className="text-yellow-500">{update.player}</span>
                      <span>won {update.amount} SOL!</span>
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4 text-purple-500" />
                      <span className="text-purple-500">{update.player}</span>
                      <span>joined debate:</span>
                      <span className="text-emerald-400">{update.topic}</span>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Leaderboard */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <h2 className="arcade-title text-2xl md:text-3xl text-center mb-16">
            TOP DEBATERS
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'CryptoKing', wins: 28, earnings: 155.5, rank: 'Legendary' },
              { name: 'LogicMaster', wins: 24, earnings: 120.8, rank: 'Elite' },
              { name: 'DebateQueen', wins: 22, earnings: 98.2, rank: 'Master' },
            ].map((player, index) => (
              <div key={index} className="neon-border p-6">
                <div className="flex items-center gap-4 mb-4">
                  {index === 0 ? (
                    <Crown className="w-8 h-8 text-yellow-500" />
                  ) : (
                    <Star className="w-8 h-8 text-purple-500" />
                  )}
                  <div>
                    <h3 className="font-press-start text-sm">{player.name}</h3>
                    <p className="text-xs text-emerald-400">{player.rank}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Wins:</span>
                    <span className="text-yellow-500">{player.wins}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Earnings:</span>
                    <span className="text-emerald-400">{player.earnings} SOL</span>
                  </div>
                  <div className="credibility-bar mt-4">
                    <div 
                      className="credibility-bar-fill" 
                      style={{ width: `${(player.wins / 30) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Debates */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="arcade-title text-2xl md:text-3xl text-center mb-16">
            LIVE DEBATES
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                topic: "Should AI systems have rights similar to humans?",
                stake: 2.5,
                timeLeft: "05:23",
                players: 2,
                status: "In Progress"
              },
              {
                topic: "Is cryptocurrency the future of global finance?",
                stake: 3.8,
                timeLeft: "Waiting",
                players: 1,
                status: "Open"
              }
            ].map((debate, index) => (
              <div key={index} className="pixel-border">
                <div className="neon-border p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-purple-500" />
                      <span className="text-sm font-press-start">
                        {debate.players}/2
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Timer className="w-5 h-5 text-emerald-400" />
                      <span className="text-sm font-press-start">
                        {debate.timeLeft}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-press-start mb-4 leading-relaxed">
                    {debate.topic}
                  </h3>

                  <div className="flex justify-between items-center">
                    <div className="text-sm font-press-start text-emerald-400">
                      {debate.stake} SOL
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-press-start ${
                      debate.status === "In Progress" 
                        ? "bg-purple-500/20 text-purple-400"
                        : "bg-emerald-500/20 text-emerald-400"
                    }`}>
                      {debate.status}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;