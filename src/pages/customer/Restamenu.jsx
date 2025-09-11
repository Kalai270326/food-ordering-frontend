import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import './Restamenu.css'



function Restamenu({customerorder}) {

   const [restaurantname, setRestaurantName] = useState('');
    const [menuItems, setMenuItems] = useState();
  useEffect(() => {
  const token = localStorage.getItem('token');
  if (token) {
    const decoded = jwtDecode(token);
    const name = decoded?.restaurantname;
    setRestaurantName(name);
    getSpecificMenu(name);
  }
}, []);

    




    async function getSpecificMenu(name) {
      try {
        const response = await axios.get('http://localhost:3000/menu/getspecific', { params: { restaurantname: name } });
        setMenuItems(response?.data);
        console.log(response.data);
        console.log(customerorder);
      } catch (error) {
        console.error('Error fetching specific menu:', error);
      }
    }


  return (
    <>
    <h2>menu in {restaurantname}</h2>
    <div className='restamenu'>
      

        {menuItems?.map((item) => (

          <div className='menu-list-rest' key={item._id}>
            <img src={item.image} alt='' height={'100px'} width={'100px'} />
            <p>{item.menuname}</p>
            <p>Price:{item.price}</p>
          
           
          
        
        
          </div>
        ))}

    </div>
    </>
  )
  
}
export default Restamenu;
