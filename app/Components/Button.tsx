import React from "react";
import { ChevronRight, ArrowRight } from "lucide-react";

const Button = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#f3f8fa]">
      <button
        className="group relative flex items-center gap-2 pr-6
        rounded-full font-semibold uppercase 
        transition-all duration-500 overflow-hidden text-black text-sm tracking-normal cursor-pointer"
      >
        <span
          className="absolute inset-0 z-0 bg-black origin-left
          scale-x-0 transition-transform duration-700 ease-[cubic-bezier(0.65,0,.076,1)]
          group-hover:scale-x-100"
        ></span>

        <span
          className="relative z-10 flex items-center justify-center
          w-10 h-10 rounded-full bg-black text-white
          transition-colors duration-500 "
        >
          <ChevronRight
            className="absolute opacity-100 translate-x-0
            transition-all duration-500
            group-hover:opacity-0 group-hover:translate-x-2"
            size={20}
            strokeWidth={2}
          />
          <ArrowRight
            className="absolute opacity-0 -translate-x-2
  transition-all duration-500 ease-[cubic-bezier(0.65,0,.076,1)] group-hover:opacity-100 group-hover:translate-x-0 "
            size={20}
            strokeWidth={2}
          />
        </span>

        <span
          className="relative z-20 transition-colors duration-500 
          group-hover:text-white"
        >
          Learn More
        </span>
      </button>
    </div>
  );
};

export default Button;