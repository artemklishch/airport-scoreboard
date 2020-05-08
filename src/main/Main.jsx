import React from 'react';
import MainTopBlock from './main_top_block/MainTopBlock';
import MainMiddleBlock from './main_middle_block/MainMiddleBlock';
import MainNewsBlock from './main_news_block/MainNewsBlock';

const Main = () => {
  return (
    <main className='main'>
      <MainTopBlock />
      <MainMiddleBlock />
      <MainNewsBlock />
    </main>
  );
};
export default Main;