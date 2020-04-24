import React from 'react';
import { useSelector } from 'react-redux';

import HistoryPage from 'pages/historyPage/historyPage';
import StartPage from 'pages/startPage/startPage';

import { State } from 'store/store';
import Settings from 'typings/settings';

const MainPage = () => {
  const settings = useSelector((state: State): Settings => state.settings.settings);

  return !!settings ? <HistoryPage /> : <StartPage />;
};

export default MainPage;
