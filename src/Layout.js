// Layout.js
import React from 'react';
import TopLoadingBar from './TopLoadingBar';

const Layout = ({ children }) => {
  return (
    <div>
      <TopLoadingBar />
      {children}
    </div>
  );
};

export default Layout;
