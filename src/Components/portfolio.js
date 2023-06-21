import React from 'react'
import data from "../Components/data/portfolioData";

const portfolio = () => {
  return (
    <section id="blog">
      <div className='flex items-center justify-between flex-wrap'>
        <div className='md-7 sm:mb-0'>
          <h3 className='text-headingTextColor text-[2rem] font-[700]'>
            My Recent Projects
          </h3>
        </div>

        {/*===================Button start========================== */}
        <div className='flex gap-3'>
          <button className='text-smallTextColor border border-solid
             border-smallTextColor py-2 px-4 rounded-[8px] font-[500]'>
            All
          </button>
          <button className='text-smallTextColor border border-solid
             border-smallTextColor py-2 px-4 rounded-[8px] font-[500]'>
            Web Design
          </button>
          <button className='text-smallTextColor border border-solid
             border-smallTextColor py-2 px-4 rounded-[8px] font-[500]'>
            UX Design
          </button>
        </div>
        {/*===================Button End========================== */}

        {/*===================Imge card start========================== */}

        <div className='flex items-center gap-4 flex-wrap mt-12'>
          {data?.map((portfolioData, index) => (
            <div data-aos="fade-zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              className='group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]'>
              <figure>
                <img className="rounded-[8px]" src={portfolioData.imgUrl} alt='' />
              </figure>
              {/*===================Imge card animation start========================== */}
              <div className='w-full h-full bg-primaryColor bg-opacity-40 absolute 
            top-0 left-0 z-[5] hidden group-hover:block'>
                <div className='w-full h-full flex items-center justify-center'>
                  <button className='text-white bg-headingTextColor hover:bg-smallTextColor
            py-2 px-4 rounded-[8px] font-[500] ease-in duration-200'>
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/*===================Imge card last button========================== */}
        <div className='mx-auto mt-6'>
          <button className='text-white bg-headingTextColor hover:bg-smallTextColor
            py-2 px-4 rounded-[8px] font-[500] ease-in duration-200'>
            Lode More
          </button>
        </div>



      </div>
    </section>
  );
};

export default portfolio;
