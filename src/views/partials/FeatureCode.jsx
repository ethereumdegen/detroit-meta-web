import React from 'react';

function FeatureCode() {
  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Sample code for <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Web3 Projects</span></h1>
            <div className="max-w-3xl mx-auto">
               
         
            
             
            </div>
          </div>

          {/* Hero image */}
          <div>
            <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
              <div className="flex flex-col justify-center">

                <div> Hardhat Development Template Repo</div>
                <div> ERC20 Token Template </div>
                <div> ERC721 Token Template </div>
                <div> Vibegraph Event Indexer </div>
                <div> Alchemy API </div>

              
              </div>
              
            </div>

             

          </div>

        </div>

      </div>
    </section>
  );
}

export default FeatureCode;
