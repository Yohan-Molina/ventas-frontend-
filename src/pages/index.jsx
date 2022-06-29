import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Clientes from './Clientes';

const Webpages = () => {
    return ( 
        <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/clientes' element={<Clientes />} />
        </Routes>
      </Router>
     );
}
 
export default Webpages;