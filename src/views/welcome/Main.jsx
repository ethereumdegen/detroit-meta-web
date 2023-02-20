import React from 'react';

import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import FeatureCode from '../partials/FeatureCode';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';

import Banner from '../partials/Banner';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
 
      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />

        <FeatureCode />

      </main>
 

     

    </div>
  );
}

export default Home;