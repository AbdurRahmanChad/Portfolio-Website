import React from 'react';
import heroImg from "../Components/image/chad.png";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className='pt-0' id="home">
      <div className=' pt-14'>
        <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
          {/*===================hero left content==================*/}

          <div className='w-full md:basis-1/2'>
            <h5 data-aos="fade-right"
              data-aso-duration="1500"
              className='text-headingTextColor font-[600] text-[16px]'>
              Hello Welcome
            </h5>
            <h1
              data-aos="fade-up"
              data-aso-duration="1500"
              className='text-headingTextColor font-[800] text-[1.8rem]
           sm:text-[400]  leading-[35px] sm:leading-[46px] mt-5'>
              I'M ABDUR RAHMAN < br /> Softwere Developer
            </h1>
            <div data-aos='fade-up'
              data-aos-duration="1800"
              data-aos-delay="200"
              className='flex items-center gap-6 mt-7'>
              <a href='#contact'>
                <button className='bg-primaryColor text-white font-[500] flex items-center gap-2
           hover:bg-smallTextColor hover:text-white ease-in duration-300 py-2 px-4 rounded-[8px]'>
                  <i class="ri-mail-line"></i>Hire Me
                </button>
              </a>
              <a href='#portfolio' className='text-smallTextColor font-[700] text-[16px]
           border-b border-solid border-smallTextColor'>
                See Portfolio
              </a>
            </div>
            <p data-aos="fade-left"
              data-aos-duration="1500"
              className='flex gap-2 text-headingTextColor  mt-10 font-[700] text-[15px]
            leading-7 sm:pl-14 sm:pr-10'>
              <span><i class="ri-apps-2-line"></i></span>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500
            </p>
            <div className='flex items-center gap-9 mt-14'>
              <span className='text-smallTextColor text-[15px] font-[600]'>
                Follw Me
              </span>

              <span>
                <a href='#youtube' className='text-smallTextColor text-[18] font-[600]'>

                  <i class="ri-youtube-line"></i>
                </a>
              </span>

              <span>
                <a href='#youtube' className='text-smallTextColor text-[18] font-[600]'>

                  <i class="ri-facebook-line"></i>
                </a>
              </span>

              <span>
                <a href='#youtube' className='text-smallTextColor text-[18] font-[600]'>

                  <i class="ri-github-line"></i>
                </a>
              </span>

              <span>
                <a href='#youtube' className='text-smallTextColor text-[18] font-[600]'>

                  <i class="ri-instagram-line"></i>
                </a>
              </span>

            </div>
          </div>
          {/*===================hero left content==================*/}
          {/*===================hero img content==================*/}

          <div className='basis-1/3 mt-10 sm:mt-0'>
            <figure className='flex items-center justify-center'>
              <img src={heroImg} alt='#' />
            </figure>
          </div>
          {/*===================hero img end==================*/}


          {/*===================hero content right start ==================*/}


          <div className='md:basis-1/5 flex justify-between text-center mt-10 flex-wrap
         gap-3 md:mt-0 md:flex-col md:justify-end md:text-end' >
            <div className='mb-10'>
              <h2 className='text-headingTextColor font-[700] text-[32px]'>
                <CountUp start={0} end={6} duration={2} suffix='+' />
              </h2>
              <h4 className='text-headingTextColor font-[600] text-[18px'>
                Years Or Experience
              </h4>
            </div>

            <div className='mb-10'>
              <h2 className='text-headingTextColor font-[700] text-[32px]'>
                <CountUp start={0} end={100} duration={2} suffix='+' />
              </h2>
              <h4 className='text-headingTextColor font-[600] text-[18px'>
                Success Rate
              </h4>
            </div>

            <div className='mb-10'>
              <h2 className='text-headingTextColor font-[700] text-[32px]'>
                <CountUp start={0} end={150} duration={2} suffix='+' />
              </h2>
              <h4 className='text-headingTextColor font-[600] text-[18px'>
                Happy Clients
              </h4>
            </div>

            <div className='mb-10'>
              <h2 className='text-headingTextColor font-[700] text-[32px]'>
                <CountUp start={0} end={200} duration={2} suffix='+' />
              </h2>
              <h4 className='text-headingTextColor font-[600] text-[18px'>
                Project Completed
              </h4>
            </div>

          </div>

          {/*===================hero content right end==================*/}

        </div>
      </div>
    </section>
  );
};

export default Hero;
