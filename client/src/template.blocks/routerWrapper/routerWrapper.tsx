import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getSettings } from 'store/settings/getSettings';
import { State } from 'store/store';

export interface RouterWrapperProps {
  children?: React.ReactNode;
}

const RouterWrapper: React.FC<RouterWrapperProps> = props => {
  const dispatch = useDispatch();
  const settings = useSelector((state: State) => state.settings.settings);

  useEffect(() => {
    if (!settings) {
      dispatch(getSettings());
    }
  }, [settings, dispatch]);

  return <>{props.children}</>;
};

export default RouterWrapper;
