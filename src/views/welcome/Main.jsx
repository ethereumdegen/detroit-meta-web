import React from 'react';

import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import FeatureCode from '../partials/FeatureCode';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';

import Banner from '../partials/Banner';
import DegenVilla from '../../assets/images/degen-villa.jpeg';


import Header from '../partials/Header';

function Home() {
  return (
    <div 
    className="flex flex-col min-h-screen overflow-hidden"
    style={{
      backgroundImage: `url(${DegenVilla})` ,
       backgroundRepeat: 'no-repeat'  
    }}
    >

      <Header
           
         />


 
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