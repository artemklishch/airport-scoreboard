import React from 'react';
import MainTopBlock from './main_top_block/MainTopBlock';
import MainMiddleBlock from './main_middle_block/MainMiddleBlock';
import MainNewsBlock from './main_news_block/MainNewsBlock';
import ScheduleList from './main_lists_schedule/ScheduleList';

const Main = () => {
  return (
    <main className='main'>
      <MainTopBlock />
      <MainMiddleBlock />
      <MainNewsBlock />
      {/* <ScheduleList /> */}
    </main>
  );
};
export default Main;