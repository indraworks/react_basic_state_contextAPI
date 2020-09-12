import React, { Component } from 'react';
import Contact from './Contact';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  render() {
    return (
      <div>
        <Header branding='Contact Manager' />
        <Contact
          name='Jhon Doe'
          email='jhon@gmail.com'
          phone='+6287885272244'
        />
        <Contact
          name='Indra'
          email='indra.works2020@gmail.com'
          phone='+6285212886886'
        />
      </div>
    );
  }
}

export default App;

/*
cara access props ke child component kalau 
rfc : function_name=(props)=> {}
    dichild component jsx: tag{props.nama_argument} end tag


rcc: langsung this.props.nama_argument dari parent comonent
   dhicld componebt langsng di tulusnya
*/

/*
install bootsrap yg dipakai  4.1.2; npm i --save bootstrap@4.1.2
jangan lupa di app.js nya paling atas kita tulis/declare :
import 'bootstrap/dist/css/bootstrap.min.css' // ini didapat dri node_moudles yg 
hirakri bootstrap package ada disitu 


*/
