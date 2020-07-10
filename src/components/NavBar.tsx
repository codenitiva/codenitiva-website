import React, { useState } from 'react';
const menuItemsLabel = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'About Us',
    path: '/about'
  }
];

const mockUsePath = () => '/';

type DrawerProps = {
  open: boolean;
  close: () => void;
};

const Drawer: React.FC<DrawerProps> = ({ open, close }) => {
  const currentPath = mockUsePath();

  const isActive = (path: string) => currentPath === path;

  return (
    <div className="absolute left-0 top-0">
      <div 
        className={`flex flex-col p-4 lg:hidden absolute transition duration-200 bg-gray-100 
          left-0 top-0 transform h-screen w-64 z-20 ${open ? 'translate-x-0' : '-translate-x-full'}`} 
      >
        <div onClick={close} className="self-end mb-4">Silang</div>
        {menuItemsLabel.map(({ label, path }, index) => (
          <a 
            key={`#drawer-link-${label}-${index}`}
            className={`${isActive(path) ? 'active' : ''} mx-2 border-t-2 py-2`}
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
  )
};

const NavBar: React.FC = () => {
  const [drawerOpen, setdrawerOpen] = useState(false);
  const currentPath = mockUsePath();

  const isActive = (path: string) => currentPath === path;
  const openDrawer = () => setdrawerOpen(true);
  const closeDrawer = () => setdrawerOpen(false);

  return (
    <nav className="flex flex-row lg:flex-row-reverse items-center justify-between p-4">
      <Drawer open={drawerOpen} close={closeDrawer} />
      <div onClick={openDrawer} className="lg:hidden">Hamburger</div>
      <div className="hidden lg:flex flex-row">
        {menuItemsLabel.map(({ label, path }, index) => (
          <a 
            key={`#nav-link-${label}-${index}`}
            className={`${isActive(path) ? 'active' : ''} mx-2`}
            href={path}
          >
            {label}
          </a>
        ))}
      </div>
      <p>Logo</p>
    </nav>
  );
};

export default NavBar;
