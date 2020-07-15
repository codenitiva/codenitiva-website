import React, { useState } from 'react';
import { menuItemsLabel } from './NavBar.const';
import { DrawerProps } from './NavBar.type';
import images from '../../variables/images';

const mockUsePath = () => '/';

const Drawer: React.FC<DrawerProps> = ({ open, close }) => {
  const currentPath = mockUsePath();

  const isActive = (path: string) => currentPath === path;

  return (
    <div className="absolute left-0 top-0">
      <div 
        className={`flex flex-col p-4 lg:hidden absolute transition duration-200 bg-gray-100 
          left-0 top-0 transform h-screen w-64 z-20 ${open ? 'translate-x-0' : '-translate-x-full'}`} 
      >
        <div onClick={close} className="self-end mb-4">
          <img
            className="w-6"
            src={images("cross")}
            alt="Close"
          />
        </div>
        {menuItemsLabel.map(({ label, path }, index) => (
          <a 
            key={`#drawer-link-${label}-${index}`}
            className={`${isActive(path) ? 'active' : ''} nav-drawer mx-2 border-t-2 py-2`}
            href={path}
          >
            {label}
          </a>
        ))}
      </div>
      <div
        onClick={close}
        className={`bg-muted absolute top-0 left-0 opacity-75 z-10 w-screen h-screen lg:hidden 
        ${open ? 'block' : 'hidden'}`} />
    </div>
  );
};

const NavBar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const currentPath = mockUsePath();

  const isActive = (path: string) => currentPath === path;
  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <nav className="flex flex-row bg-white lg:flex-row-reverse items-center justify-between py-4 px-4 lg:px-12 sticky top-0 z-50">
      <Drawer open={drawerOpen} close={closeDrawer} />
      <div onClick={openDrawer} className="lg:hidden">
        <img
          className="w-8"
          src={images("hamburger")}
          alt="Menu"
        />
      </div>
      <div className="hidden lg:flex flex-row">
        {menuItemsLabel.map(({ label, path }, index) => (
          <a 
            key={`#nav-link-${label}-${index}`}
            className={`${isActive(path) ? 'active' : ''} nav-drawer mx-2`}
            href={path}
          >
            {label}
          </a>
        ))}
      </div>
      <a href="/">
        <img
          className="w-48 lg:w-56"
          src={images("Codenitiva")}
          alt="This is Codenitiva"
        />
      </a>
    </nav>
  );
};

export default NavBar;
