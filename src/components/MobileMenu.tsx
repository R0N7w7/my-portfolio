"use client"
import { useRef, useState } from 'react';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { PiBracketsAngleBold } from 'react-icons/pi';

const Routes = [
  {
    path: '#about',
    title: 'Sobre Mí'
  },
  {
    path: '#experience',
    title: 'Experiencia'
  },
  {
    path: '#projects',
    title: 'Proyectos'
  },
  {
    path: '#skills',
    title: 'Habilidades'
  },
  {
    path: '#contact',
    title: 'Contacto'
  }
]

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleMenuClick = (event) => {
    if (event.target === menuRef.current) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-end rounded-md md:hidden">
        <IoMdMenu size={35} className="fill-white" onClick={() => setIsOpen(!isOpen)} />
      </div>
      <nav ref={menuRef} className={`w-screen min-h-screen fixed top-0 overflow-x-hidden ${isOpen ? 'left-0' : 'translate-x-full'} transition-all ease-linear flex justify-end`} onClick={handleMenuClick}>
        <nav className='flex w-3/4 bg-gray-950 items-start px-4 py-12 flex-col'>
          <div className="flex items-center justify-end rounded-md md:hidden py-2 px-4 top-0 absolute right-0">
            <IoMdClose size={35} className="fill-white" onClick={() => setIsOpen(!isOpen)} />
          </div>
          <div className="flex w-full items-center gap-4 cursor-pointer justify-center">
            <PiBracketsAngleBold size={35} className="fill-white" /> <p className="text-2xl font-semibold text-white">Roberto <span className="text-orange-600">Cruz</span></p>
          </div>
          <ul className='text-white font-medium flex flex-col text-2xl mt-8 px-3 w-full'>
            {
              Routes.map((route, index) => (
                <li key={route.path} onClick={() => setIsOpen(false)} className="hover:text-orange-600 active:text-orange-600 border-b border-white py-4">
                  <a href={route.path}>
                    {route.title}
                  </a>
                </li>
              ))
            }
          </ul>
        </nav>
      </nav>
    </>
  );
}

export { MobileMenu };
