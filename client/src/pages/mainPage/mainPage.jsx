import React from 'react';
import { useSelector } from 'react-redux';

import HistoryPage from 'pages/historyPage/historyPage';
import StartPage from 'pages/startPage/startPage';

const MainPage = () => {
  const settings = useSelector(state => state.settings.settings);

  return !!settings ? <HistoryPage /> : <StartPage />;
};

export default MainPage;
