'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoClose, IoMenu } from 'react-icons/io5';

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showExplore, setShowExplore] = useState(false);
  const [showPricing, setShowPricing] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const dropDownRef = useRef<HTMLDivElement>(null);
  const pricingdropDownRef = useRef<HTMLDivElement>(null);
  const exploredropDownRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const exploreRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  const handleCloseMenu = () => {
    setShowLinks(false);
    setShowServices(false);
    setShowExplore(false);
    setShowPricing(false);
  };

  useEffect(() => {
    if (showLinks) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setShowServices(false);
      }
      if (
        exploreRef.current &&
        !exploreRef.current.contains(event.target as Node)
      ) {
        setShowExplore(false);
      }
      if (
        pricingRef.current &&
        !pricingRef.current.contains(event.target as Node)
      ) {
        setShowPricing(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showLinks]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!showLinks) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setShowLinks(false);
      }
    };

    if (showLinks) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showLinks]);

  return (
    <>
      <div className='w-full  mx-auto  fixed z-50 top-0'>
        <nav
          className={`py-[9.58px] flex flex-row gap-[96.97px] items-center justify-between lg:justify-center px-4 lg:px-0 transition-all duration-300 ${
            isScrolled ? ' backdrop-blur-lg' : ''
          }`}
          ref={navRef}
        >
          <div className='flex flex-row items-center justify-center gap-[16.76px]'>
            <div className='flex items-center justify-center cursor-pointer'>
              <Image
                src='/logo.png'
                width={100.1}
                height={24.67}
                alt='logo'
              />
            </div>
            <div className='hidden lg:flex flex-row items-center justify-center gap-6 '>
              <div
                className='flex flex-row items-center justify-center gap-[4px] cursor-pointer relative '
                onMouseEnter={() => setShowServices(true)}
                ref={servicesRef}
              >
                <Link
                  href='/'
                  className='text-[#F8F7F7] font-actor text-[15.56px] font-regular'
                >
                  Product
                </Link>
                <Image
                  src='/dropDown.png'
                  width={11.97}
                  height={7.38}
                  alt='logo'
                />
                {showServices && (
                  <div
                    className='absolute top-full mt-2 left-0 bg-gray-200 shadow-lg rounded-md w-[120px] p-4 z-50'
                    ref={dropDownRef}
                  >
                    <Link
                      href='/'
                      className='block font-actor font-medium text-black text-[16px] py-2'
                      onClick={() => setShowServices(false)}
                    >
                      About Us
                    </Link>
                    <Link
                      href='/'
                      className='block font-actor font-medium text-black text-[16px] py-2'
                      onClick={() => setShowServices(false)}
                    >
                      Contact Us
                    </Link>
                  </div>
                )}
              </div>
              <div className='flex items-center justify-center gap-4'>
                <Link
                  href='/'
                  className='text-[#F8F7F7] font-actor text-[15.56px] font-regular'
                >
                  Team
                </Link>
              </div>

              <div className='flex items-center justify-center gap-4'>
                <Link
                  href='/'
                  className='text-[#F8F7F7] font-actor text-[15.56px] font-regular'
                >
                  Enterprise
                </Link>
              </div>
              <div
                className='flex flex-row gap-[4px] justify-center items-center relative '
                onMouseEnter={() => setShowExplore(true)}
                ref={exploreRef}
              >
                <Link
                  href='/'
                  className='text-[#F8F7F7] font-actor text-[15.56px] font-regular'
                >
                  Explore
                </Link>
                <Image
                  src='/dropDown.png'
                  width={11.97}
                  height={7.38}
                  alt='logo'
                />
                {showExplore && (
                  <div
                    className='absolute top-full mt-2 left-0 bg-gray-200 shadow-lg rounded-md w-[120px] p-4 z-50'
                    ref={exploredropDownRef}
                  >
                    <Link
                      href='/'
                      className='block font-actor font-medium text-black text-[16px] py-2'
                      onClick={() => setShowExplore(false)}
                    >
                      About Us
                    </Link>
                    <Link
                      href='/'
                      className='block font-actor font-medium text-black text-[16px] py-2'
                      onClick={() => setShowExplore(false)}
                    >
                      Contact Us
                    </Link>
                  </div>
                )}
              </div>

              <div className='flex items-center justify-center gap-4'>
                <Link
                  href='/'
                  className='text-[#F8F7F7] font-actor text-[15.56px] font-regular'
                >
                  Marketplace
                </Link>
              </div>
              <div
                className='flex flex-row gap-[4px] items-center justify-center relative'
                onMouseEnter={() => setShowPricing(true)}
                ref={pricingRef}
              >
                <Link
                  href='/'
                  className='text-[#F8F7F7] font-actor text-[15.56px] font-regular'
                >
                  Pricing
                </Link>
                <Image
                  src='/dropDown.png'
                  width={11.97}
                  height={7.38}
                  alt='logo'
                />
                {showPricing && (
                  <div
                    className='absolute top-full mt-2 left-0 bg-gray-200 shadow-lg rounded-md w-[120px] p-4 z-50'
                    ref={pricingdropDownRef}
                  >
                    <Link
                      href='/'
                      className='block font-actor font-medium text-black text-[16px] py-2'
                      onClick={() => setShowPricing(false)}
                    >
                      About Us
                    </Link>
                    <Link
                      href='/'
                      className='block font-actor font-medium text-black text-[16px] py-2'
                      onClick={() => setShowPricing(false)}
                    >
                      Contact Us
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className='flex lg:hidden py-4 '>
            <button onClick={() => setShowLinks(!showLinks)}>
              {showLinks ? (
                <IoClose className='w-5 h-5 text-white cursor-pointer' />
              ) : (
                <IoMenu className='w-5 h-5 text-white cursor-pointer' />
              )}
            </button>
          </div>
          <div className='hidden lg:flex lg:flex-row lg:gap-[8px] xl:gap-[13.17px] items-center justify-center'>
            <div className='relative'>
              <input
                type='text'
                name='text'
                placeholder='Search DOML'
                className='bg-[#272F43] rounded-[4.79px] border-[#A3A3A3] border-[0.24px] font-actor text-[15.56px] lg:text-[10px] xl:text-[15.56px] font-regular text-[#C0C3C9] py-[7.26px] px-[10.27px] lg:px-2 xl:px-[10.27px] lg:w-[100px] xl:w-full'
              />
              <Image
                src='/inputIcon.png'
                width={16.84}
                height={17.84}
                alt='logo'
                className='absolute top-3 right-2 lg:top-2 xl:top-3'
              />
            </div>
            <Link
              href='/'
              className='text-[#F8F7F7] font-actor text-[15.56px] font-regular'
            >
              Sign in
            </Link>
            <button className='text-[#F8F7F7] font-actor text-[15.56px] font-regular rounded-[7.18px] border-[#9E9C9C] border-[0.6px] py-[5px] px-[9.58px]'>
              Sign up
            </button>
          </div>
        </nav>
      </div>
      {showLinks && (
        <div
          className='flex flex-col items-start justify-start px-6 gap-6 py-6 w-[300px] bg-black fixed top-[6rem] right-5 z-40 p-4 rounded-lg shadow-lg overflow-y-auto max-h-[80vh]'
          ref={navRef}
        >
          {/* Product Dropdown */}
          <div className='w-full'>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowServices((prev) => !prev);
              }}
              className='flex items-center gap-4 w-full font-actor text-[16px] text-white  py-2'
            >
              Product
              <Image
                src='/dropDown.png'
                width={12}
                height={7}
                alt='dropdown'
              />
            </button>
            {showServices && (
              <div className='ml-4 mt-2 border-l-2 border-gray-400 pl-4'>
                <Link
                  href='https://fonts.google.com/'
                  onClick={() => setShowLinks(false)}
                  className='block py-1 text-white'
                >
                  About Us
                </Link>
                <Link
                  href='/'
                  onClick={() => setShowLinks(false)}
                  className='block py-1 text-white'
                >
                  Contact Us
                </Link>
              </div>
            )}
          </div>

          <div className='flex items-start justify-start gap-4'>
            <Link
              href='/'
              className='text-[#F8F7F7] font-actor text-[15.56px] font-regular'
            >
              Team
            </Link>
          </div>

          <div className='flex items-start justify-start gap-4'>
            <Link
              href='/'
              className='text-[#F8F7F7] font-actor text-[15.56px] font-regular'
            >
              Enterprise
            </Link>
          </div>

          <div className='w-full'>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowExplore((prev) => !prev);
              }}
              className='flex items-center gap-4 w-full font-actor text-[16px] text-white py-2'
            >
              Explore
              <Image
                src='/dropDown.png'
                width={12}
                height={7}
                alt='dropdown'
              />
            </button>
            {showExplore && (
              <div className='ml-4 mt-2 border-l-2 border-gray-400 pl-4'>
                <Link
                  href='/'
                  onClick={() => setShowLinks(false)}
                  className='block py-1 text-white'
                >
                  Marketplace
                </Link>
                <Link
                  href='/'
                  onClick={() => setShowLinks(false)}
                  className='block py-1 text-white'
                >
                  Community
                </Link>
              </div>
            )}
          </div>
          <div className='flex items-start justify-start gap-4'>
            <Link
              href='/'
              className='text-[#F8F7F7] font-actor text-[15.56px] font-regular'
            >
              Marketplace
            </Link>
          </div>
          {/* Pricing Dropdown */}
          <div className='w-full'>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowPricing((prev) => !prev);
              }}
              className='flex items-center gap-4 w-full font-actor text-[16px] text-white py-2'
            >
              Pricing
              <Image
                src='/dropDown.png'
                width={12}
                height={7}
                alt='dropdown'
              />
            </button>
            {showPricing && (
              <div className='ml-4 mt-2 border-l-2 border-gray-400 pl-4'>
                <Link
                  href='/'
                  onClick={handleCloseMenu}
                  className='block py-1 text-white'
                >
                  Basic
                </Link>
                <Link
                  href='/'
                  onClick={handleCloseMenu}
                  className='block py-1 text-white'
                >
                  Premium
                </Link>
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className='flex flex-col gap-6 items-start justify-start'>
            <div className='relative'>
              <input
                type='text'
                name='text'
                placeholder='Search DOML'
                className='bg-[#272F43] rounded-[4.79px] border-[#A3A3A3] border-[0.24px] font-actor text-[15.56px] font-regular text-[#C0C3C9] py-[7.26px] px-[10.27px]'
              />
              <Image
                src='/inputIcon.png'
                width={16.84}
                height={17.84}
                alt='logo'
                className='absolute top-3 right-2'
              />
            </div>
            <Link
              href='/'
              className='text-[#F8F7F7] font-actor text-[15.56px] font-regular'
            >
              Sign in
            </Link>
            <button className='text-[#F8F7F7] font-actor text-[15.56px] font-regular rounded-[7.18px] border-[#9E9C9C] border-[0.6px] py-[5px] px-[9.58px]'>
              Sign up
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
