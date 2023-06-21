import React from 'react'
import frontendImg from "../Components/image/front-end.png";
import backendImg from "../Components/image/backend.png";
import designdImg from "../Components/image/design.png";
import appsImg from "../Components/image/apps.png";


const services = () => {
  return (
    <section id="services">
      <div className='lg:pt-5'>
        <div className='text-center'>
          <h2 className='text-headingTextColor font-[700] text-[2.4rem] md-5'>
            What Do I Help
          </h2>
          <p className='md:max-w-[600px] md:mx-auto text-center text-headingTextColor font-[500] text-[16px] leading-7'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500
          </p>
        </div>

        {/*====================================================================== */}
        <div className='flex flex:col justify-center sm:py-12'>
          <div className='w-full py-3 px-4 sm:max-w-xl sm:mx-auto sm:px-0'>
            <div className='relative text-gray-700 antialiased text-sm font-semibold'>
              {/* =======Vertical Line running Through The Middle================== */}
              <div className='hidden absolute w-1 sm:block bg-indigo-300 
                       h-full left-1/2 transform -translate-x-1/2'></div>



              {/*=========================================================================== */}
              {/* ============Left Card Start frontend================== */}
              <div className='mt-6 sm:mt-0 sm:mb-12'>
                <div className='flex items-center flex-col sm:flex-row'>
                  <div className='flex justify-start w-full mx-auto items-center'>
                    <div className='w-full sm:w-1/2 sm:pr-8'>

                      <div data-aos="fade-right"
                        data-aos-delay="50"
                        data-aos-duration="1300"
                        className='bg-white p-4 rounded shadow group hover:bg-primaryColor
                          cursor-pointer ease-in duration-150'>
                        <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white 
                            group-hover:font-[600] text-xl'>Frontend Development
                        </h3>
                        <p className='text-[15px] text-smallTextColor group-hover:text-white 
                            group-hover:font-[500]'>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting stext e1500
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                    <figure>
                      <img src={frontendImg} alt='#' />
                    </figure>
                  </div>


                </div>
              </div>
              {/* ============Left Card End================== */}

              {/*=========================================================================== */}
              {/* ============Right Card start backend ================== */}

              <div className='mt-6 sm:mt-0 sm:mb-12'>
                <div className='flex items-center flex-col sm:flex-row'>
                  <div className='flex justify-end w-full mx-auto items-center'>
                    <div className='w-full sm:w-1/2 sm:pl-8'>

                      <div data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="1300"
                        className='bg-white p-4 rounded shadow group hover:bg-primaryColor
                          cursor-pointer ease-in duration-150'>
                        <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white 
                            group-hover:font-[600] text-xl'>Backend Development
                        </h3>
                        <p className='text-[15px] text-smallTextColor group-hover:text-white 
                            group-hover:font-[500]'>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting stext e1500
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                    <figure>
                      <img src={backendImg} alt='#' />
                    </figure>
                  </div>
                </div>
              </div>
              {/* ============Right Card End================== */}

              {/*=========================================================================== */}


              {/* ============Left Card Start ui/ux================== */}
              <div className='mt-6 sm:mt-0 sm:mb-12'>
                <div className='flex items-center flex-col sm:flex-row'>
                  <div className='flex justify-start w-full mx-auto items-center'>
                    <div className='w-full sm:w-1/2 sm:pr-8'>

                      <div data-aos="fade-right"
                        data-aos-dealy="100"
                        data-aos-duration="1400"
                        className='bg-white p-4 rounded shadow group hover:bg-primaryColor
                          cursor-pointer ease-in duration-150'>
                        <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white 
                            group-hover:font-[600] text-xl'>UI/UX Development
                        </h3>
                        <p className='text-[15px] text-smallTextColor group-hover:text-white 
                            group-hover:font-[500]'>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting stext e1500
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                    <figure>
                      <img src={designdImg} alt='#' />
                    </figure>
                  </div>


                </div>
              </div>
              {/* ============Left Card End================== */}

              {/*=========================================================================== */}
              {/* ============Right Card start apps================== */}

              <div className='mt-6 sm:mt-0 sm:mb-12'>
                <div className='flex items-center flex-col sm:flex-row'>
                  <div className='flex justify-end w-full mx-auto items-center'>
                    <div className='w-full sm:w-1/2 sm:pl-8'>

                      <div data-aos="fade-left"
                        data-aos-duration="1500"
                        className='bg-white p-4 rounded shadow group hover:bg-primaryColor
                          cursor-pointer ease-in duration-150'>
                        <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white 
                            group-hover:font-[600] text-xl'>Apps Development
                        </h3>
                        <p className='text-[15px] text-smallTextColor group-hover:text-white 
                            group-hover:font-[500]'>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting stext e1500
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                    <figure>
                      <img src={appsImg} alt='#' />
                    </figure>
                  </div>
                </div>
              </div>
              {/* ============Right Card End================== */}

              {/*=========================================================================== */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default services;

