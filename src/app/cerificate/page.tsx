import React from 'react';

const AppreciationCertificate = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Main Certificate Container */}
      <div className="relative w-full max-w-[842px] h-[595px] bg-white shadow-2xl overflow-hidden font-serif border-8 border-white">
        
        {/* Top Left Geometric Shape (Black/Grey) */}
        <div 
          className="absolute top-0 left-0 w-64 h-32 bg-[#2d2d2d]" 
          style={{ clipPath: 'polygon(0 0, 100% 0, 70% 100%, 0% 100%)' }}
        />
        
        {/* Top Left Geometric Shape (Yellow) */}
        <div 
          className="absolute top-0 left-0 w-48 h-40 bg-[#fbc02d]" 
          style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)', opacity: 0.9 }}
        />

        {/* Bottom Right Geometric Shape (Yellow) */}
        <div 
          className="absolute bottom-0 right-0 w-72 h-24 bg-[#fbc02d]" 
          style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
        />

        {/* Gold Badge/Seal */}
        <div className="absolute top-12 left-24 z-10 flex flex-col items-center">
          <div className="relative w-24 h-24">
            {/* Scalloped Gold Circle */}
            <div className="absolute inset-0 bg-[#fbc02d] rounded-full shadow-lg" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
            <div className="absolute inset-2 bg-yellow-500 rounded-full border-2 border-yellow-200 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border border-yellow-100 opacity-50"></div>
            </div>
          </div>
          {/* Ribbons */}
          <div className="flex -mt-2 space-x-1">
            <div className="w-4 h-12 bg-[#fbc02d]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)' }}></div>
            <div className="w-4 h-12 bg-[#fbc02d]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)' }}></div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="relative z-20 flex flex-col items-center pt-24 px-16 text-center">
          <h1 className="text-6xl font-bold tracking-[0.2em] text-[#2d2d2d] uppercase mb-2">
            Certificate
          </h1>
          <p className="text-sm font-sans font-semibold tracking-widest text-gray-600 uppercase mb-8">
            of participation
          </p>
          
          <p className="text-xs font-sans font-bold tracking-widest text-gray-500 uppercase mb-12">
            We are proudly present this to
          </p>

          <h2 className="text-5xl font-serif italic text-[#2d2d2d] mb-6">
            Kimberly Thompson
          </h2>

          <div className="w-full max-w-md border-t border-gray-300 mb-6"></div>

          <p className="text-[10px] font-sans text-gray-500 leading-relaxed max-w-lg uppercase tracking-wider mb-20">
            We give this certificate because Kimberly Thompson has participated in a social event that we organize.
          </p>

          {/* Signatures */}
          <div className="w-full flex justify-between px-12">
            <div className="flex flex-col items-center">
              <span className="text-lg font-serif italic text-gray-800 border-b border-gray-400 px-8 pb-1">Isabel Mercado</span>
              <span className="text-[10px] font-sans font-bold text-gray-500 uppercase mt-2">President</span>
            </div>
            
            <div className="flex flex-col items-center">
              <span className="text-lg font-serif italic text-gray-800 border-b border-gray-400 px-8 pb-1">Kimberly Nguyen</span>
              <span className="text-[10px] font-sans font-bold text-gray-500 uppercase mt-2">Vice President</span>
            </div>
          </div>
        </div>

        {/* Certificate Border Line */}
        <div className="absolute inset-4 border border-gray-100 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default AppreciationCertificate;