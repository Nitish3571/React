import React from 'react'
import Typewriter from 'typewriter-effect';

function Home() {
  const word = [
    { text: "Nitish ", className: "text-yellow-500" },
    { text: "Nitish Rana", className: "text-blue-500" },
    { text: "Software", className: "text-green-500" },
    { text: "Software Developer", className: "text-red-500" },
    { text: "Software Development", className: "text-purple-500" },
  ];

  return (
    <header className='bg-slate-800 opacity-80 md:h-[612px] py-16 gap-10 flex md:justify-between md:items-center flex-col md:flex-row-reverse '>
        <div className='px-14  md:w-[50%]'>
          <img className='rounded-full' src="https://rare-gallery.com/thumbs/5408546-woman-female-girl-photographer-camera-beanie-pine-holding-hand-jean-jacket-red-film-caucasian-blonde-photography-nature-exterior-hat-vintage-contax-creative-commons-images.jpg" alt="" />
        </div>
        <div className='text-white px-8 text-3xl md:text-5xl font-semibold md:w-[50%]'>
          <h2>Lorem ipsum dolor
             sit amet, consectetur adipisicing elit. Velit, ducimus?</h2>
             <Typewriter
              className="text-white"
              options={{
                strings: word.map(item => `<span class="${item.className}">${item.text}</span>`),
                autoStart: true,
                loop: true,
                initDelay: 500,
                typeSpeed: 50,
                deleteSpeed: 50,
                pauseFor: 2000,
                loopCount: Infinity,
                cursor: '|',
                html: true, 
              }}
            />
            <div className='flex justify-center items-center gap-5 '>
            <button className='bg-yellow-500 text-xl p-3 text-white mt-8 rounded-full px-5'>Hire Me</button>
            <button className='bg-yellow-500 text-xl p-3 text-white mt-8 rounded-full px-5'>Download CV</button>
            </div>

        </div>
    </header>
  )
}

export default Home
