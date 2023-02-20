import React, { useState } from 'react';
import Modal from '../utils/Modal';

import HeroImage from '../../assets/images/hero-image.png';

function HeroHome() {

  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div
      className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none" 
    
      aria-hidden="true"
      >
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
        <div className="pt-16 pb-12 md:pt-40 md:pb-20 ">

          {/* Section header */}
          <div className="text-center pt-16 pb-12 md:pb-16 bg-black bg-opacity-75 ">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 text-gray-200 " data-aos="zoom-y-out">Experience Local Artists </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-200 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Bringing Detroit's artwork to the forefront of the digital space.   </p>
              <p className="text-md text-gray-200 mb-8" data-aos="zoom-y-out" data-aos-delay="150">   Metaverse galleries ⟠ Digital biographies ⟠ Videography </p>
             
         
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center hidden" data-aos="zoom-y-out" data-aos-delay="300" style={{display:'none'}}>
                <div>
                  <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Start free trial</a>
                </div>
                <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Learn more</a>
                </div>
              </div>
             
            </div>
          </div>

          {/* Hero image */}
          <div>
            <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
              
              <a className="absolute top-full flex items-center transform -translate-y-1/2 bg-white font-medium group p-4 shadow-lg" href="http://oncyber.io/detroitcube">
                
                <span className="text-2xl">✨ The Art Gallery ✨</span>
              </a>
            </div>

            {/* Modal */}
            <Modal id="modal" ariaLabel="modal-headline" show={videoModalOpen} handleClose={() => setVideoModalOpen(false)}>
              <div className="relative pb-9/16">
                <iframe className="absolute w-full h-full" src="https://player.vimeo.com/video/174002812" title="Video" allowFullScreen></iframe>
              </div>
            </Modal>

          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroHome;