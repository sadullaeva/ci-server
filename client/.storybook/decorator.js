import React from 'react';
import 'src/index.css';

const Decorator = storyFn => <div style={{ margin: 40 }}>{storyFn()}</div>;

export default Decorator;
