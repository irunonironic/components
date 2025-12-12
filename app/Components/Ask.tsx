import { Search } from "lucide-react";

const SearchInput = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-stone-50">
      <div className="relative w-[350px] overflow-visible">
        <div className="relative z-20 w-full max-w-[350px]">
          {/* Shadow */}
          <div
            className="
              absolute
              top-[24px]
              left-[-10px]
              w-[350px]
              h-[75px]
              bg-black/22
              blur-[2.5px]
              skew-x-[-20deg]
              rounded-[40px]
              -z-10
            "
          />

          {/* Glow Layer 1 */}
          <div
            className="
              absolute z-0
              left-1/2 bottom-0 -translate-x-1/2
              w-[190px] h-[110px]
              rounded-full blur-[25px] opacity-80
              pointer-events-none
              bg-[radial-gradient(ellipse_at_center,white_50%,#FFE38A_10%,#FFAC4A_70%,#DDAB8C_100%,transparent_100%)]
            "
          />

          {/* Glow Layer 2 */}
          <div
            className="
              absolute z-0
              left-1/2 bottom-0 -translate-x-1/2 translate-y-4
              w-[130px] h-[70px]
              rounded-full blur-[14px] opacity-90
              pointer-events-none
              bg-[radial-gradient(ellipse_at_center,white_0%,#FFE38A_40%,#FFAC4A_80%,#DDAB8C_90%,transparent_100%)]
            "
          />

          {/* Input */}
          <div
            className="
              relative z-20
              flex items-center justify-between
              bg-slate-50 px-6 py-4
              rounded-full shadow-none
              border border-slate-100
            "
          >
            <input
              className="bg-transparent outline-none w-full text-lg"
              placeholder="Search"
            />
            <Search className="w-6 h-6 text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInput; 