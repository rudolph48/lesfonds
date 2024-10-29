import React from 'react';

type Props = {
  children?: React.ReactNode;
};

const Header = ({ children }: Props) => {
  return (
    <>
      <nav className='centered-nav'>2 0 2 4 年 秋季甜點籌備中</nav>
      {children}
    </>
  );
};

export default Header;
