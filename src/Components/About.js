import React from 'react'
import heroImg from '../Components/image/chad.png'

const About = () => {
    return (
        <section className='' id='about'>
            <h2 className='text-headingTextColor font-[700] text-[2.5rem] mb-8 text-center'>
                About Us
            </h2>
            {/*=============================about imges========================== */}
            <div className='flex items-center justify-between gap-4'>
                <div className='basis-1/2 '>
                    <div className='flex items-center'>
                        <figure className='flex items-center justify-center'>
                            <img src={heroImg} alt='#' />
                        </figure>
                    </div>
                </div>

                {/*=============================about Text========================== */}
                <div className='basis-1/2'>
                    <div className='pt-5'>
                        <h2 className='text-[45px] font-[700]'>Hello About Us</h2>
                        <p className='text-[20px] font-[500]'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500
                        </p>
                        {/*=============================about button========================== */}
                        <div className='mt-10'>
                            <a href='#contact'>
                                <button className='bg-primaryColor text-white font-[500] flex items-center gap-2
                    hover:bg-smallTextColor hover:text-white ease-in duration-300 py-2 px-4 rounded-[8px]'>
                                    Click Me
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
