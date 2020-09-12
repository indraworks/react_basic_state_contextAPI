import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const { branding } = props;
  return (
    <div>
      <h1>{branding}</h1>
    </div>
  );
};

Header.defaultProps = {
  branding: 'myApp',
};

Header.propTypes = {
  branding: PropTypes.string.isRequired,
};

export default Header;

/*
not utk stateless component 
kita buat pakai fungsi krn memang tidak akan/
brtujuan buat sate didalamnya ini bukan hooks
nnti kita buat hooks 

*/
