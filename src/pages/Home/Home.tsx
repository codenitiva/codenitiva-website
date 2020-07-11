import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full items-center p-4">
      <div className="flex flex-col w-full lg:max-w-5xl">
        <div className="flex flex-col lg:flex-row items-center">
          <img 
            alt="welcome"
            className="w-full lg:w-0 lg:flex-grow" 
            src={require('../../assets/vector/welcome.svg')} 
          />
          <div className="ml-0 lg:ml-16 mt-8 lg:mt-0 w-full lg:w-0 lg:flex-grow text-center lg:text-left">
            <h1>Learning, Sharing, Coding</h1>
            <p>
              Codenitiva is a place where you can learn, share, and code with others that 
              have same passion and willing to bring a better future for technology 
              and education growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
