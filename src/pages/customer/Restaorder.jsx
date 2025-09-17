import React from 'react'
import { jwtDecode } from 'jwt-decode';
import { useEffect } from 'react';
import './Restaorder.css'
function Restaorder() {
  const storedOrders = JSON.parse(localStorage.getItem('customerorder')) || [];
    const token = localStorage.getItem('token');
       const decode = jwtDecode(token);
       const restaname = decode?.restaurantname;

 const filtered = Array.isArray(storedOrders)
    ? storedOrders.filter(order => order.restaurantname === restaname)
    : [];
    useEffect(() => {
  console.log('Updated customerorder:', storedOrders);
}, [storedOrders]);


  console.log('customerorder:', storedOrders);
  function  handleUpdateStatus(index) {
    const statuschange=index.status
    console.log('Update status for order:', index);
    index.status=statuschange==='Pending'?'Delivered':'Pending'
     localStorage.setItem('customerorder', JSON.stringify(storedOrders));
    window.location.reload();
  
  }

  return (
    <div>
      <h2> {restaname} Customer Orders</h2>

 <div className='orderrest'>

 {       filtered.map((order, index) => (
          <div  key={index} style={{ border: '1px solid #ccc', marginBottom: '10px', padding: '10px' }}>
            <p><strong>Customer:</strong> {order.customerName}</p>
            <p><strong>Phone:</strong> {order.phone}</p>
            <p><strong>Item:</strong> {order.menuname}</p>
            <p><strong>Quantity:</strong> {order.quantity}</p>
            <p><strong>Price:</strong> ₹{order.price}</p>
            <p><strong>Total:</strong> ₹{order.total}</p>
          <p><strong>Status:</strong> <span style={{ color: order.status === 'Pending' ? 'orange' : 'blue' }}>{order.status}</span></p>

            <button onClick={() => handleUpdateStatus(order)}>Update Status</button>
        </div>

       

        ))
      }
     
 </div>
          
    </div>
  )
}

export default Restaorder