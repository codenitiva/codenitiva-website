import React from "react";
import Layout from "../../components/Layout/Layout";
import images from "../../variables/images";

const About : React.FC = () => {
  return (
    <div className="flex flex-col justify-between">
      <Layout narrow>
        <div className="w-full flex flex-col items-center">
          <h1><span className="text-primary">Codenitiva</span>? What's that?</h1>
          <img
            className="w-full lg:w-1/2 my-4"
            src={images('about-who')}
            alt="What is Codenitiva?"
          />
          <div className="w-full lg:w-1/2 text-center mt-4">
            <p>
                Codenitiva is a place where you can learn, share, and code with others that 
                have same passion and willing to bring a better future for technology 
                and education growth.
            </p>
          </div>
        </div>
      </Layout>
      <Layout>
        <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start">
          <div className="lg:hidden mb-2 text-center">
            <h1>Our Vision:</h1>
            <h1 className="text-primary">Freedom of Learning</h1>
          </div>
          <img
            className="w-full lg:w-0 lg:flex-grow mt-4"
            src={images('about-vision')}
            alt="What is Codenitiva?"
          />
          <div className="ml-0 lg:ml-16 mt-8 lg:mt-0 w-full lg:w-0 lg:flex-grow text-center lg:text-left">
            <div className="hidden lg:block">
              <h1>Our Vision:</h1>
              <h1 className="text-primary">Learning by Sharing</h1>
            </div>
            <p>
                Codenitiva is a place where you can learn, share, and code with others that 
                have same passion and willing to bring a better future for technology 
                and education growth.
            </p>
          </div>
        </div>
      </Layout>
      <Layout>
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="lg:hidden mb-2 text-center">
            <h1>Our Vision:</h1>
            <h1 className="text-primary">Learning by Sharing</h1>
          </div>
          <img
            className="w-full lg:w-0 lg:flex-grow mt-4"
            src={images('about-mission')}
            alt="What is Codenitiva?"
          />
          <div className="ml-0 lg:ml-16 mt-8 lg:mt-0 w-full lg:w-0 lg:flex-grow text-center lg:text-left">
            <div className="hidden lg:block">
              <h1>Our Mission:</h1>
              <h1 className="text-primary">Freedom of Learning</h1>
            </div>
            <p>
                Codenitiva is a place where you can learn, share, and code with others that 
                have same passion and willing to bring a better future for technology 
                and education growth.
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default About;