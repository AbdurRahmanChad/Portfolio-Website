import React, { useRef, useEffect } from 'react'


const Header = () => {



  const headerRef = useRef(null)
  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {

      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header')
      }
      else {
        headerRef.current.classList.add('sticky__header')
      }
    })
  }
  useEffect(() => {
    stickyHeaderFunc()
    return window.removeEventListener('scroll', stickyHeaderFunc)
  }, [])




  return (
    <div ref={headerRef} className='w-full '>
      <div className=' h-20 flex items-center justify-between'>

        {/*=====================Logo Start================== */}
        <div className='flex items-center gap-[10px]'>
          <span className='w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] 
                rounded-full flex items-center justify-center'>
            AR
          </span>
          <div className='leading-[20px]'>
            <h2 className='text-xl text-smallTextColor font-[700]'>ABDUR</h2>
            <p className='text-smallTextColor text-[16px] font-[600]'>RAHMAN</p>
          </div>
        </div>
        {/*=====================Logo End============ */}

        {/*=====================Menu Start================= */}
        <div className='menu'>
          <ul className='flex items-center gap-10'>
            <li><a className='text-smallTextColor text-xl font-[800] hover:text-orange-500' href='#home'>Home</a></li>
            <li><a className='text-smallTextColor text-xl font-[800] hover:text-orange-500 ' href='#about'>About</a></li>
            <li><a className='text-smallTextColor text-xl font-[800] hover:text-orange-500 ' href='#services'>Services</a></li>
            <li><a className='text-smallTextColor text-xl font-[800] hover:text-orange-500 ' href='#blog'>Blog</a></li>
            <li><a className='text-smallTextColor text-xl font-[800] hover:text-orange-500 ' href='#contact'>Contact</a></li>
          </ul>
        </div>

        {/*=====================Menu End================== */}
        <div className='flex items-center gap-4'>
          <button className='flex items-center gap-2 text-smallTextColor font-[800] 
    border border-solid hover:text-white border-smallTextColor py-2 px-4 rounded-[40px]
    max-h-[40px] hover:bg-smallTextColor'>
            Let's Talk
          </button>
        </div>
      </div>
    </div>

  );
};

export default Header;
