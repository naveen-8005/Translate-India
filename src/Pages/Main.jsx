import React, { useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const Main = ({contactRef}) => {
  const [slider, setSlider] = useState(1);
  
  function next() {
    if (slider < 3) setSlider(slider + 1);
  }
  
  function prev() {
    if (slider > 1) setSlider(slider - 1);
  }
  
  return (
    <>
      <div className="flex items-center justify-center min-h-[70vh] md:min-h-[85vh] px-2 md:px-0 mt-18">
        
        {/* SLIDE 1 */}
        {slider === 1 && (
          <div className="w-full flex items-center justify-center animate-fadeIn">
            <div className="w-full md:w-[80vw] md:h-[80vh] flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 p-4 md:p-8">
              
              {/* Text Content */}
              <div className="w-full md:w-[53%] space-y-4 md:space-y-6">
                <h1 className="font-bold text-[32px] md:text-5xl leading-tight text-[#154bd7]">
                  Expand Your Business Beyond Borders With{" "}
                  <span className="text-[#00d20e] font-bold">
                    Seamless Website
                  </span>{" "}
                  Translation
                </h1>

                <p className="text-[17px] md:text-xl text-gray-800 font-medium leading-relaxed md:leading-8">
                  We help individuals and businesses translate documents,
                  websites, and content into multiple languages with complete
                  accuracy, cultural understanding, and a professional human
                  touch.
                </p>

                <button 
                  onClick={() => {
                    contactRef.current?.scrollIntoView({ behavior:"smooth" })
                  }} 
                  className="bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-800 transition-all w-full md:w-auto"
                >
                  Translate Now...
                </button>
              </div>

              {/* Image */}
              <div className="w-full md:w-auto">
                <img src="Slider1.jpg" alt="slider" className="w-full h-auto rounded-lg" />
              </div>
            </div>

            {/* Next Button */}
            <button
              className="hidden md:block ml-4 bg-zinc-300 rounded-2xl p-1 cursor-pointer hover:bg-zinc-400 transition"
              onClick={next}
            >
              <MdOutlineNavigateNext size={30} />
            </button>
          </div>
        )}

        {/* SLIDE 2 - Our Promises */}
        {slider === 2 && (
          <div className="w-full flex items-center justify-center animate-fadeIn">
            {/* Prev Button */}
            <button
              className="hidden md:block mr-3 bg-zinc-300 rounded-2xl p-1 cursor-pointer hover:bg-zinc-400 transition"
              onClick={prev}
            >
              <GrFormPrevious size={30} />
            </button>

            <div className="w-[95vw] md:w-[80vw] bg-[#aecdff] rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-12 min-h-[65vh] md:min-h-[80vh] flex flex-col items-center justify-center">
              
              {/* Heading */}
              <div className="text-center mb-8 md:mb-12">
                <h1 className="text-[40px] md:text-6xl text-white font-bold tracking-wide">
                  Our Promises
                </h1>
                <p className="text-white text-base md:text-lg mt-2 opacity-90">
                  What we deliver to ensure flawless translations
                </p>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full md:w-[85%] max-w-5xl">
                
                <div className="bg-[#222a48] p-8 md:p-10 rounded-2xl shadow-lg text-white text-center space-y-3 hover:scale-105 transition-transform">
                  <h2 className="text-2xl md:text-3xl font-semibold">Accuracy</h2>
                  <p className="text-base md:text-lg opacity-90 leading-relaxed">
                    We guarantee highly accurate, context-aware translation.
                  </p>
                </div>

                <div className="bg-[#222a48] p-8 md:p-10 rounded-2xl shadow-lg text-white text-center space-y-3 hover:scale-105 transition-transform">
                  <h2 className="text-2xl md:text-3xl font-semibold">Fast Delivery</h2>
                  <p className="text-base md:text-lg opacity-90 leading-relaxed">
                    Quick turnaround without compromising on quality.
                  </p>
                </div>

                <div className="bg-[#222a48] p-8 md:p-10 rounded-2xl shadow-lg text-white text-center space-y-3 hover:scale-105 transition-transform">
                  <h2 className="text-2xl md:text-3xl font-semibold">Confidentiality</h2>
                  <p className="text-base md:text-lg opacity-90 leading-relaxed">
                    Your documents remain secure & private, always.
                  </p>
                </div>
              </div>
            </div>

            {/* Next Button */}
            <button
              className="hidden md:block ml-3 bg-zinc-300 rounded-2xl p-1 cursor-pointer hover:bg-zinc-400 transition"
              onClick={next}
            >
              <MdOutlineNavigateNext size={30} />
            </button>
          </div>
        )}

        {/* SLIDE 3 - Key Features */}
        {slider === 3 && (
          <div className="w-full flex items-center justify-center animate-fadeIn">
            {/* Prev Button */}
            <button
              className="hidden md:block mr-3 bg-zinc-300 rounded-2xl p-1 cursor-pointer hover:bg-zinc-400 transition"
              onClick={prev}
            >
              <GrFormPrevious size={30} />
            </button>

            <div className="w-[95vw] md:w-[80vw] bg-[#719ecb] rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-12 min-h-[65vh] md:min-h-[80vh] flex flex-col items-center justify-center">
              
              {/* Heading */}
              <div className="text-center mb-8 md:mb-12">
                <h1 className="text-[40px] md:text-6xl text-white font-bold tracking-wide">
                  Key Features
                </h1>
                <p className="text-white text-base md:text-lg mt-2 opacity-90">
                  What makes our translation service stand out
                </p>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full md:w-[85%] max-w-5xl">
                
                <div className="bg-[#6495ed] p-8 md:p-10 rounded-2xl shadow-lg text-white text-center space-y-3 hover:scale-105 transition-transform">
                  <h2 className="text-xl md:text-2xl font-semibold">
                    Multi-Language Support
                  </h2>
                  <p className="text-base md:text-lg opacity-90 leading-relaxed">
                    Translate content into dozens of global and Indian languages.
                  </p>
                </div>

                <div className="bg-[#6495ed] p-8 md:p-10 rounded-2xl shadow-lg text-white text-center space-y-3 hover:scale-105 transition-transform">
                  <h2 className="text-xl md:text-2xl font-semibold">
                    AI + Human Accuracy
                  </h2>
                  <p className="text-base md:text-lg opacity-90 leading-relaxed">
                    Perfect balance of speed and human-level precision.
                  </p>
                </div>

                <div className="bg-[#6495ed] p-8 md:p-10 rounded-2xl shadow-lg text-white text-center space-y-3 hover:scale-105 transition-transform">
                  <h2 className="text-xl md:text-2xl font-semibold">
                    Fast Turnaround
                  </h2>
                  <p className="text-base md:text-lg opacity-90 leading-relaxed">
                    Get high-quality translations delivered quickly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Navigation Buttons */}
      <div className="flex md:hidden justify-center gap-4 mt-4 mb-6">
        <button
          onClick={prev}
          disabled={slider === 1}
          className={`bg-zinc-300 rounded-full p-3 ${slider === 1 ? 'opacity-40' : 'hover:bg-zinc-400'} transition`}
        >
          <GrFormPrevious size={24} />
        </button>
        <button
          onClick={next}
          disabled={slider === 3}
          className={`bg-zinc-300 rounded-full p-3 ${slider === 3 ? 'opacity-40' : 'hover:bg-zinc-400'} transition`}
        >
          <MdOutlineNavigateNext size={24} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center items-center gap-3 mt-6">
        <button
          onClick={() => setSlider(1)}
          className={`rounded-full transition-all ${
            slider === 1 ? "bg-zinc-600 w-4 h-4" : "bg-zinc-400 w-3 h-3"
          }`}
        />
        <button
          onClick={() => setSlider(2)}
          className={`rounded-full transition-all ${
            slider === 2 ? "bg-zinc-600 w-4 h-4" : "bg-zinc-400 w-3 h-3"
          }`}
        />
        <button
          onClick={() => setSlider(3)}
          className={`rounded-full transition-all ${
            slider === 3 ? "bg-zinc-600 w-4 h-4" : "bg-zinc-400 w-3 h-3"
          }`}
        />
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </>
  );
};

export default Main;