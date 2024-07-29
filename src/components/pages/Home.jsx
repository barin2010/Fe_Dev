import React from 'react';

import Header from 'components/Header/Header';
import About from 'components/About/About';
import VideoPlayer from 'components/VideoPlayer/VideoPlayer';
import Story from 'components/Story/Story';
import Servises from 'components/Servises/Servises';
import Carieers from 'components/Carieers/Carieers';

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <VideoPlayer />
      <Story />
      <Servises />
      <Carieers />
    </div>
  );
};

export default Home;