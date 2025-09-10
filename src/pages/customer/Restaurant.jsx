import React, { useState } from 'react';
import './Restaurant.css';
import Restamenu from './Restamenu';
import Restanew from './restanew';
import Restaorder from './Restaorder';

function Restaurant() {
  const [activeSection, setActiveSection] = useState(''); // '' | 'menu' | 'add' | 'order'

  return (
    <div className='restaurant'>
      <h1>🍽️ Restaurant Dashboard</h1>

      <div className='nav-button'>
        <button onClick={() => setActiveSection('menu')}>Menus</button>
        <button onClick={() => setActiveSection('add')}>Add Menu</button>
        <button onClick={() => setActiveSection('order')}>Orders</button>
      </div>

      <div className='section-content'>
        {activeSection === 'menu' && <Restamenu />}
        {activeSection === 'add' && <Restanew />}
        {activeSection === 'order' && <Restaorder />}
      </div>
    </div>
  );
}

export default Restaurant;