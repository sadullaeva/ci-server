import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import clsx from 'clsx';
import { cn } from 'utils/bem';

import './loader.css';

export interface LoaderProps {
  show?: boolean;
  disableTimeout?: boolean;
}

const Loader: React.FC<LoaderProps> = props => {
  const loader = cn('loader');
  const root = useRef(document.getElementById('loader') || document.body);
  const [show, setShow] = useState(props.show);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null;
    const showLoader = () => setShow(true);
    const hideLoader = () => setShow(false);

    if (props.show) {
      if (props.disableTimeout) {
        showLoader();
      } else {
        timeoutId = setTimeout(showLoader, 1000);
      }
    } else {
      hideLoader();
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [props]);

  return ReactDOM.createPortal(
    <div className={clsx(loader(), show && loader({ show: true }))} data-testid={'loader'} />,
    root.current
  );
};

export default Loader;
