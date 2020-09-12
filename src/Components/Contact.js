import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  render() {
    //desturction props
    const { name, email, phone } = this.props;
    return (
      <div>
        <h2>{name}</h2>
        <ol>
          <li>{email}</li>
          <li>{phone}</li>
        </ol>
      </div>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default Contact;

/*
utk style css bisa di lakukan dgn cara  pada masing2 tag
<tag style={{fontSize:'20px' }} > </tag>
atau dari file css nya trus diinport

*/
