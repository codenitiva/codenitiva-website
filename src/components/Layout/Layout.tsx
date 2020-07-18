import React from 'react';
import { LayoutProps } from './Layout.type';

const Layout: React.FC<LayoutProps> = ({ secondary, children, narrow }) => {

  const _backgroundColorComputed = () => secondary ? 'bg-accent' : 'bg-white';
  const _paddingNarrow = () => narrow ? 'py-4 lg:py-8' : 'py-8 lg:py-16';

  return (
    <div className={`w-full flex justify-center px-4 ${_paddingNarrow()} my-4 ${_backgroundColorComputed()}`}>
      <div className="flex flex-col w-full md:max-w-md lg:max-w-5xl">
        {children}
      </div>
    </div>
  );
};

export default Layout;
