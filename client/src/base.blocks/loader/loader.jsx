import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { cn } from 'utils/bem';

import './loader.css';

const Loader = props => {
  const loader = cn('loader');
  const root = useRef(document.getElementById('loader') || document.body);
  const [show, setShow] = useState(props.show);

  useEffect(() => {
    let timeoutId;
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
      clearTimeout(timeoutId);
    };
  }, [props]);

  return ReactDOM.createPortal(
    <div className={clsx(loader(), show && loader({ show: true }))} data-testid={'loader'} />,
    root.current
  );
};

Loader.propTypes = {
  show: PropTypes.bool,
  disableTimeout: PropTypes.bool,
};

export default Loader;
