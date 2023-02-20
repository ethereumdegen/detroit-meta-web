import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

 

import logoUrl from "@/assets/images/d_meta_logo.png";

import ethLogoSolid from "@/assets/images/eth-logo-solid.png";

import ethLogoWireframe from "@/assets/images/eth-logo-wireframe.png";



import { observer } from "mobx-react" 

function Header( {sidebarStore} ) {

  const [top, setTop] = useState(true);


  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <header className={` w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white backdrop-blur-sm shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="intro-x flex items-center">
              <img
                style={{ height:'40px' }}
                className="side-nav__header__logo"
                src={logoUrl}
              />
              <span className="side-nav__header__text text-black pt-0.5 text-lg ml-2.5">
                Detroit Meta
              </span>
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>


                 {/*@click="showSidenav()"*/}
              <img 
                
                  className="ml-4  px-2 text-gray-700 hover:text-black cursor-pointer border-l-2 border-gray-100"
                    onClick={()=>{

 

                      sidebarStore.setOpen(true)


                      console.log('open sidebar', sidebarStore)

                    }}
                    src={ ethLogoSolid }
                    height="32px"
                    width="32px"
                    
                    />  
              </li>
               
            </ul>

          </nav>

        </div>
      </div>
    </header>
  );
}

export default observer(Header);
