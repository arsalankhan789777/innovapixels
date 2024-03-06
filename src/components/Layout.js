import React from 'react';
import LoadingBar from 'react-top-loading-bar';

const Layout = ({ children }) => {
  const [loading, setLoading] = React.useState(0);

  return (
    <div>
      <LoadingBar progress={loading} height={3} color="#f11946" onLoaderFinished={() => setLoading(0)} />
      {children}
    </div>
  );
};

export default Layout;
