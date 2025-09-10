import React, { useState } from 'react';
import axios from 'axios';
import './Restanew.css'


function CreateMenu() {
  const [menuname, setMenuName] = useState('');
  const [price, setPrice] = useState('');
  const [restaurantname, setRestaurantname] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState('');

  function handleclick(e) {
    const value=e.target.value;
    if(e.target.name =="menuname"){
        setMenuName(value);
    }
    if(e.target.name =="price"){
        setPrice(value);
    }
    if(e.target.name =="restaurantname"){
        setRestaurantname(value);
    }
    if(e.target.name =="email"){
        setEmail(value);
    }
    if(e.target.name =="image"){
        setImage(value);
    }
  }

async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/menu/createmenu', { menuname,
        price,
        restaurantname,
        email,
        image
      });
      console.log(response.data);
     
      setError(response?.data.message);
    
      setMenuName('');
      setPrice('');
      setRestaurantname('');
      setEmail('');
      setImage('');

    } catch (error) {
      console.error('Error creating menu:', error);
      alert('Failed to create menu');
    }
  }

  return (
    <div className='create-menu'>
    <form >
      <input type="text" name='menuname' placeholder="Menu Name" value={menuname} onChange={(e) => {handleclick(e)}} required />
      <input type="text" name='price' placeholder="Price" value={price} onChange={(e) => {handleclick(e)}} required />
      <input type="text" name='restaurantname' placeholder="Restaurant Name" value={restaurantname} onChange={(e) => {handleclick(e)}} required />
      <input type="email" name='email' placeholder="Email" value={email} onChange={(e) => {handleclick(e)}} required />
      <input type="text" name='image' placeholder="Image URL" value={image} onChange={(e) =>{handleclick(e)}} required />
    <h4>{error}</h4>
      <button className='create-menu-button' onClick={handleSubmit}>Create Menu</button>
    </form>
    </div>
  );
}

export default CreateMenu;