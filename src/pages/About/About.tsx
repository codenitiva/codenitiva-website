import React from "react";
import Layout from "../../components/Layout/Layout";
import Card from '../../components/Card/Card';
import images from "../../variables/images";
import { Helmet } from "react-helmet";

const About : React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
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
        <Layout secondary>
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
          <div className="flex flex-col lg:flex-row items-center lg:items-start mt-8 lg:mt-24">
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
        <Layout>
          <h1 className="text-center">Meet Our Core Team Members</h1>
          <div className="flex flex-wrap justify-center">
            <div className="flex justify-center my-4 w-full sm:w-1/2 lg:w-1/3">
              <Card
                name="Andrew Cen"
                position="Music Enthusiast"
                picture="https://media-exp1.licdn.com/dms/image/C4E03AQE2CPQI3cenxg/profile-displayphoto-shrink_400_400/0?e=1601510400&v=beta&t=xVG-StdEOCFVLSdZ10YRKJX3lwv9tG90d47PyZ7K3VE"
                iconType={['github', 'linkedin']}
                iconURL={['https://github.com/werdna521', 'https://linkedin.com/linktoandrewcen']}
              />
            </div>
            <div className="flex justify-center my-4 w-full sm:w-1/2 lg:w-1/3">
              <Card
                name="Jayaku Briliantio"
                position="Machine Learning Developer"
                picture="https://media-exp1.licdn.com/dms/image/C5603AQEqzJ1-J7hvRA/profile-displayphoto-shrink_400_400/0?e=1601510400&v=beta&t=pefyT7FWAOiZyx6_eTPz0Xi7zoT2_yYsglbFs74eLho"
                iconType={['github', 'linkedin']}
                iconURL={['https://github.com/ukayaj620', 'https://linkedin.com/neartojayakubriliantio']}
              />
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
};

export default About;
