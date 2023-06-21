import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#12141e] pt-12'>
      <div className="max-w-[1024px]  mx-auto">
        <div className='sm:flex items-center justify-between md:gap-8'>
          <div className='w-full sm:w-1/2'>
            <h2 className='text=[26px] leading-10 text-white font=[600] mb-5 md:text-[2rem]'>
              Do You Wont To Make Beautifull Products?
            </h2>

            {/*==================Button================================ */}
            <a href='#contact'>
              <button className='bg-primaryColor text-white font-[500] flex items-center gap-2
           hover:bg-smallTextColor hover:text-white ease-in duration-300 py-2 px-4 rounded-[8px]'>
                <i class="ri-mail-line"></i>Hire Me
              </button>
            </a>
          </div>

          {/*==================Text================================ */}
          <div className='w-full sm:w-1/2'>
            <p className='text-gray-300 leading-7 mt-4 sm:mt-0'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            </p>

            {/*==================Text Button================================ */}
            <div className='flex items-center gap-4 flex-wrap md:gap-8 mt-10'>
              <span className='text-gray-300 font-[600] text-[15px]'>
                Follw Me
              </span>
              {/*==================Github Button================================ */}
              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                <a href='#github' className='text-gray-300 font-[500] text-[18px]'>
                  <i class="ri-github-line" />
                </a>
              </span>
              {/*================== Youtube Button================================ */}
              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                <a href='#youtube' className='text-gray-300 font-[500] text-[18px]'>
                  <i class="ri-youtube-line" />
                </a>
              </span>
              {/*==================Facebook Button================================ */}
              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                <a href='#facebook' className='text-gray-300 font-[500] text-[18px]'>
                  <i class="ri-facebook-line" />
                </a>
              </span>
              {/*================== Instagram Button================================ */}
              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                <a href='#instagram' className='text-gray-300 font-[500] text-[18px]'>
                  <i class="ri-instagram-line" />
                </a>
              </span>
            </div>
          </div>
        </div>
        {/*==================Footer Menu start================================ */}
        <div>
          <ul className='flex items-center justify-center gap-10 mt-10'>
            <li><a className='text-gray-400 text-xl font-[700] hover:text-orange-500' href='#home'>Home</a></li>
            <li><a className='text-gray-400 text-xl font-[700] hover:text-orange-500 ' href='#about'>About</a></li>
            <li><a className='text-gray-400 text-xl font-[700] hover:text-orange-500 ' href='#services'>Services</a></li>
            <li><a className='text-gray-400 text-xl font-[700] hover:text-orange-500 ' href='#blog'>Blog</a></li>
            <li><a className='text-gray-400 text-xl font-[700] hover:text-orange-500 ' href='#contact'>Contact</a></li>
          </ul>
        </div>
      </div>
      {/*==================Footer Menu end================================ */}

      <div className='bg-[#1b1e29] py-3 mt-14'>
        <div className='container max-w-[1024px] mx-auto'>
          <div className='flex items-center justify-center sm:justify-between'>
            <div className='hidden sm:block'>
              <div className='flex items-center gap-[10px]'>
                <span className='w-[35px] h-[35px] rounded-full bg-[#3255c0]
                     text-white font-[500] text-[18px] flex items-center justify-center'>
                  AR
                </span>
                <div className='leading-[20px]'>
                  <h2 className='text-gray-200 font-[500] text-[16px]'>
                    ABDUR
                  </h2>
                  <p className='text-gray-400 font-[500] text-[14px]'>
                    RAHMAN
                  </p>
                </div>
              </div>
            </div>
            {/*==================Footer Menu end================================ */}
            <div>
              <p className='text-gray-400 text-[14px]'>
                Copyright 2023 by ABDUR RAHMAN -All Right reserved
              </p>
            </div>


          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
