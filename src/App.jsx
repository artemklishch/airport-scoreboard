import React from 'react';
import Header from './header/Header';
import MainTopBlock from './main_top_block/MainTopBlock';
import MainMiddleBlock from './main_middle_block/MainMiddleBlock';
import MainNewsBlock from './main_news_block/MainNewsBlock';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className='main'>
        <MainTopBlock />
        <MainMiddleBlock />
        <MainNewsBlock />
      </main>
    </div>
  );
};
export default App; 