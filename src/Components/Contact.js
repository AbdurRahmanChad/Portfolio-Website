import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className='pb-16'>
      <h2 className='text-headingTextColor font-[700] text-[2.5rem] mb-8 text-center'>
        Location Google Maps
      </h2>

      {/*============Location Google Maps====================== */}

      <div className='flex items-center justify-between gap-4'>
        <div className='w-full md:w-1/2 h-[300px] sm:h-[450px]'>
          <iframe
            title='google-maps'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.801064113323!2d90.3863370742589!3d23.754472488622035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9394e7af987%3A0x57abaa9664651146!2sRH%20Home%20Center!5e0!3m2!1sen!2sbd!4v1685645131595!5m2!1sen!2sbd"
            className='border-0 w-full h-full'
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>

        {/*============Contact from====================== */}
        <div className='w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center
            bg-indigo-100 px-4 lg:px-8 py-8'>
          <form className='w-full'>

            {/*============Enter Your Name====================== */}
            <div className='mb-5'>
              <input
                type='text'
                placeholder='Enter Your Name'
                className='w-full p-3 focus:outline-none rounded-[5px]'>
              </input>
            </div>

            {/*============Enter Your Email====================== */}
            <div className='mb-5'>
              <input
                type='email'
                placeholder='Enter Your Email'
                className='w-full p-3 focus:outline-none rounded-[5px]'>
              </input>
            </div>

            {/*=============Subject====================== */}
            <div className='mb-5'>
              <input
                type='subject'
                placeholder='subject'
                className='w-full p-3 focus:outline-none rounded-[5px]'>
              </input>
            </div>

            {/*================write Your Message=================== */}
            <div className='mb-5'>
              <textarea
                type='subject'
                row={5}
                placeholder='Write Your Message'
                className='w-full p-3 focus:outline-none rounded-[5px]'
              />
            </div>

            {/*================send Message=================== */}
            <button className='w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white
            hover:bg-headingTextColor text-center ease-linear duration-150 font-[700]'>
              Send Message
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
