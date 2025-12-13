"use client";

import { useState } from "react";

type MeowPopup = {
  id: number;
  x: number;
  y: number;
};

export default function Button2() {
  const [meows, setMeows] = useState<MeowPopup[]>([]);

  const handleClick = () => {

    const audio = new Audio("/cat.wav");
    audio.playbackRate = 0.9 + Math.random() * 0.3;
    audio.volume = 0.8;
    audio.play().catch(() => {});

    const id = Date.now();

    const popup: MeowPopup = {
      id,
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
    };

    setMeows((prev) => [...prev, popup]);

    setTimeout(() => {
      setMeows((prev) => prev.filter((m) => m.id !== id));
    }, 1200);
  };

  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden bg-indigo-200">
      <button
        type="button"
        onClick={handleClick}
        className="
          px-8 py-4
          rounded-full
          bg-rose-400
          border-2 border-black
          font-bold text-black
          shadow-[6px_6px_0_0_#000]
          hover:shadow-[3px_3px_0_0_#000]
          hover:translate-x-[3px] hover:translate-y-[3px]
          active:shadow-none active:translate-x-[6px] active:translate-y-[6px]
          transition-all select-none
        "
      >
        say meow
      </button>

      {meows.map((meow) => (
        <span
          key={meow.id}
          className="absolute text-lg font-bold pointer-events-none animate-meow"
          style={{
            left: `${meow.x}%`,
            top: `${meow.y}%`,
          }}
        >
          meow 
        </span>
      ))}
    </div>
  );
}
