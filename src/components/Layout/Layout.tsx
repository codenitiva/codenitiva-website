import React from 'react';
import { LayoutProps } from './Layout.type';

const Layout: React.FC<LayoutProps> = ({ secondary, children }) => {

  const backgroundColorComputed = () => secondary ? 'bg-accent' : 'bg-white';

  return (
    <div className={`w-full flex justify-center px-4 py-8 lg:py-16 my-4 ${backgroundColorComputed()}`}>
      <div className="flex flex-col w-full md:max-w-md lg:max-w-5xl">
        {children}
      </div>
    </div>
  );
};

export default Layout;
