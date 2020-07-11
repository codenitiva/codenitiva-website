import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full items-center p-4">
      <div className="flex flex-col w-full lg:max-w-3xl">
        <div className="flex flex-col lg:flex-row items-center">
          <img 
            alt="welcome"
            className="w-full lg:w-1/2" 
            src={require('../../assets/vector/welcome.svg')} 
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
