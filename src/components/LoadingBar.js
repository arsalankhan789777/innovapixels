import React from 'react';
import LoadingBar from 'react-top-loading-bar';

const LoadingBarComponent = React.forwardRef((props, ref) => {
  return <LoadingBar ref={ref} {...props} />;
});

export default LoadingBarComponent;
