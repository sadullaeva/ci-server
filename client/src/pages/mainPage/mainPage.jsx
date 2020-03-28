import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HistoryPage from 'pages/historyPage/historyPage';
import StartPage from 'pages/startPage/startPage';

import { getSettings } from 'store/settings/getSettings';

const MainPage = () => {
  const dispatch = useDispatch();
  const settings = useSelector(state => state.settings.settings);

  useEffect(() => {
    if (!settings) {
      dispatch(getSettings());
    }
  }, [settings, dispatch]);

  return !!settings ? <HistoryPage heading={settings.repoName} /> : <StartPage />;
};

export default MainPage;
