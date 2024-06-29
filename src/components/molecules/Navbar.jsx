import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../atoms/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav className="flex items-center justify-between bg-gray-100 p-4 border-b border-gray-300">
      <div className="flex items-center relative">
        <button onClick={toggleMenu} className="bg-none border-none cursor-pointer size-10">
           <img src="menu.png" alt="menu" />
        </button>
        <img src="logo.png" alt="logo" className='w-9 ml-3 mt-2'/>
        {isOpen && (
          <div className="absolute top-full left-0 mt-2 flex flex-col space-y-2 bg-white border border-gray-300 p-4 shadow-md z-10 space-">
            <Button className="" onClick={() => handleNavigation('/')}>Grupos</Button>
            <Button onClick={() => handleNavigation('/temarios')}>Temario</Button>
            <Button onClick={() => handleNavigation('/actividades')}>Actividades</Button>
            <Button onClick={() => handleNavigation('/contenido')}>Contenido</Button>
          </div>
        )}
        <div className="text-xl font-bold ml-4">
          <span className='text-teal-500'>CONALEP</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
