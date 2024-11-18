import React, { useEffect, useState, useRef } from "react";
import Link from 'next/link';
import useOnclickOutside from "react-cool-onclickoutside";
import Image from 'next/image';

import logoImg from '../../public/img/logo-mobile.png';
import logoImgmbl from '../../public/img/logo-mobile.png';



const Navbar= function() {

  const useDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    const closeDropdown = () => {
      setIsOpen(false);
    };

    const ref = useRef(null);
    useOnclickOutside(() => {
      closeDropdown();
    }, ref);

    return {
      isOpen,
      toggleDropdown,
      closeDropdown,
      ref,
    };
  };

const { isOpen: openMenu, toggleDropdown: handleBtnClick, closeDropdown: closeMenu, ref } = useDropdown();
const { isOpen: openMenu1, toggleDropdown: handleBtnClick1, closeDropdown: closeMenu1, ref: ref1 } = useDropdown();
const { isOpen: openMenu2, toggleDropdown: handleBtnClick2, closeDropdown: closeMenu2, ref: ref2 } = useDropdown();
const { isOpen: openMenu3, toggleDropdown: handleBtnClick3, closeDropdown: closeMenu3, ref: ref3 } = useDropdown();
const { isOpen: openMenu4, toggleDropdown: handleBtnClick4, closeDropdown: closeMenu4, ref: ref4 } = useDropdown();

  const [showmenu, setBtnIcon] = useState(false);

  useEffect(() => {
    const header = document.getElementById("header-wrap");
    const totop = document.getElementById("scroll-to-top");
    const sticky = header.offsetTop;

    const scrollCallBack = () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        totop.classList.add("show");
      } else {
        header.classList.remove("sticky");
        totop.classList.remove("show");
      }
    };

    window.addEventListener("scroll", scrollCallBack);

    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

    return(
         <nav className="navbar transition">
        <div className="container">

          {/********* Logo *********/}
          <Link  className="navbar-brand" href="/">
            <Image src={logoImg} className="img-fluid d-md-block d-none imginit" alt="logo" height={45}/>
            <Image src={logoImgmbl} className="img-fluid d-md-none d-sms-none imginit" alt="logo" height={45}/>
          </Link>
          {/********* Logo *********/}

              {/********* Mobile Menu *********/}
              <div className="mobile">
                {showmenu && 
              <div className='menu'>
                
                <div className='navbar-item counter'>
                      <Link href="/" onClick={() => setBtnIcon(!showmenu)}>
                      ACCUEIL
                      </Link>
                    </div>

                  <div className='navbar-item counter'>
                    <div ref={ref}>
                      <div className="dropdown-custom dropdown-toggle btn" 
                        onClick={() => {
                                        handleBtnClick();
                                        closeMenu1();
                                        closeMenu2();
                                        closeMenu3();
                                        closeMenu4();
                                      }}>
                        LA BOUTIQUE
                      </div>
                      {openMenu && (
                        <div className='item-dropdown'>
                          <div className="dropdown" onClick={closeMenu}>
                            <Link href="/" onClick={() => setBtnIcon(!showmenu)}>Achat de code</Link>
                            <Link href="/" onClick={() => setBtnIcon(!showmenu)}>Achat de Console</Link>
                           
                          </div>
                        </div>
                      )}
                    </div>
                </div>
                
                <div className='navbar-item counter'>
                      <Link href="/" onClick={() => setBtnIcon(!showmenu)}>
                      TOURNOIS
                      </Link>
                    </div>

                  <div className='navbar-item counter'>
                    <div ref={ref1}>
                      <div className="dropdown-custom dropdown-toggle btn" 
                        onClick={() => {
                                        handleBtnClick1();
                                        closeMenu();
                                        closeMenu2();
                                        closeMenu3();
                                        closeMenu4();
                                      }}>
                        WEB TV
                      </div>
                      {openMenu1 && (
                        <div className='item-dropdown'>
                          <div className="dropdown" onClick={closeMenu1}>
                            <Link href="/" onClick={() => setBtnIcon(!showmenu)}>Live Streaming</Link>
                            <Link href="/" onClick={() => setBtnIcon(!showmenu)}>Chaîne TV</Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                   <div className='navbar-item counter'>
                      <Link href="/location" onClick={() => setBtnIcon(!showmenu)}>
                      TÉLÉREALITÉ
                      </Link>
                </div>
                
                <div className='navbar-item counter'>
                      <Link href="/location" onClick={() => setBtnIcon(!showmenu)}>
                      UNIVERS VAS
                      </Link>
                </div>
                <div className='navbar-item counter'>
                      <Link href="/location" onClick={() => setBtnIcon(!showmenu)}>
                      SMART VOTING
                      </Link>
                    </div>

                    

                </div>
                }
          </div>
          {/********* Mobile Menu *********/}

          {/********* Dekstop Menu *********/}
          <div className="dekstop">
            <div className='menu'>
              
              <div className='navbar-item counter'>
                <Link href="/">
                ACCUEIL
                </Link>
              </div>

              <div className='navbar-item counter'>
                <div ref={ref1}>
                  <div className="dropdown-custom dropdown-toggle btn" 
                     onMouseEnter={handleBtnClick1} onMouseLeave={closeMenu1}>
                    LA BOUTIQUE
                    {openMenu1 && (
                    <div className='item-dropdown'>
                      <div className="dropdown" onClick={closeMenu1}>
                        <Link href="/games">Achat de code</Link>
                        <Link href="/pricing">Achat de Console</Link>
                      </div>
                    </div>
                  )}
                  </div>
                  
                </div>
            </div>

              <div className='navbar-item counter'>
                <Link href="/location">
                TOURNOIS
                </Link>
              </div>

              <div className='navbar-item counter'>
                <div ref={ref2}>
                  <div className="dropdown-custom dropdown-toggle btn" 
                     onMouseEnter={handleBtnClick2} onMouseLeave={closeMenu2}>
                    WEB TV
                    {openMenu2 && (
                    <div className='item-dropdown'>
                      <div className="dropdown" onClick={closeMenu2}>
                        <Link href="/">Live Streaming</Link>
                        <Link href="/">Chaîne TV</Link>
                      </div>
                    </div>
                  )}
                  </div>
                  
                </div>
            </div>

              {/* <div className='navbar-item counter'>
                <Link href="/location">
                COMMUNAUTÉ
                </Link>
              </div> */}

              <div className='navbar-item counter'>
                <Link href="/location">
                TÉLÉREALITÉ
                </Link>
              </div>

              <div className='navbar-item counter'>
                <Link href="/location">
                UNIVERS VAS
                </Link>
              </div>

              <div className='navbar-item counter'>
                <Link href="/location">
                SMART VOTING
                </Link>
              </div>

            {/* <div className='navbar-item counter'>
                <div ref={ref1}>
                  <div className="dropdown-custom dropdown-toggle btn" 
                     onMouseEnter={handleBtnClick1} onMouseLeave={closeMenu1}>
                    Game Servers
                    {openMenu1 && (
                    <div className='item-dropdown'>
                      <div className="dropdown" onClick={closeMenu1}>
                        <Link href="/games">Games Server List</Link>
                        <Link href="/pricing">Pricing Table One</Link>
                        <Link href="/pricing2">Pricing Table Two</Link>
                        <Link href="/pricing3">Pricing Table Three</Link>
                      </div>
                    </div>
                  )}
                  </div>
                  
                </div>
            </div>

            <div className='navbar-item counter'>
              <Link href="/location">
              Locations
              </Link>
            </div>

            <div className='navbar-item counter'>
                <div ref={ref2}>
                  <div className="dropdown-custom dropdown-toggle btn" 
                     onMouseEnter={handleBtnClick2} onMouseLeave={closeMenu2}>
                    Support
                    {openMenu2 && (
                    <div className='item-dropdown'>
                      <div className="dropdown" onClick={closeMenu2}>
                        <Link href="/knowledgebase">Knowledgebase</Link>
                        <Link href="/faq">FAQ</Link>
                        <Link href="/contact">Contact</Link>
                      </div>
                    </div>
                  )}
                  </div>
                  
                </div>
            </div>

            <div className='navbar-item counter'>
              <Link href="/news">
              News
              </Link>
            </div>

            <div className='navbar-item counter'>
                <div ref={ref3}>
                  <div className="dropdown-custom dropdown-toggle btn" 
                     onMouseEnter={handleBtnClick3} onMouseLeave={closeMenu3}>
                    Company
                    {openMenu3 && (
                    <div className='item-dropdown'>
                      <div className="dropdown" onClick={closeMenu3}>
                        <Link href="/about">About Us</Link>
                        <Link href="/affliate">Affliates</Link>
                      </div>
                    </div>
                  )}
                  </div>
                  
                </div>
            </div>

              <div className='navbar-item counter'>
                  <div ref={ref4}>
                    <div className="dropdown-custom dropdown-toggle btn" 
                       onMouseEnter={handleBtnClick4} onMouseLeave={closeMenu4}>
                      More Pages
                      {openMenu4 && (
                      <div className='item-dropdown'>
                        <div className="dropdown" onClick={closeMenu4}>
                          <Link href="/login">Login</Link>
                          <Link href="/register">Register</Link>
                        </div>
                      </div>
                    )}
                    </div>
                    
                  </div>
              </div> */}

            </div>
          </div>
          {/********* Dekstop Menu *********/}

          {/********* Side Button *********/}
          <div className="menu_side_area">
              <Link href="/login" className="btn-line" id="btn-line">Mon compte</Link>
              {/********* Burger Button *********/}
              <button className="burgermenu" type="button" 
                onClick={() => {
                  setBtnIcon(!showmenu);
                  closeMenu1();
                  closeMenu2();
                  closeMenu3();
                  closeMenu4();
                }}>
                <i className="fa fa-bars" aria-hidden="true"></i>
              </button>
              {/********* Burger Button *********/}
          </div>
          {/********* Side Button *********/}

          

        </div>
      </nav>
    )
}

export default Navbar;