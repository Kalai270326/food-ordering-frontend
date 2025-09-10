import React from 'react';
import './OrderSummary.css';
import { jwtDecode } from 'jwt-decode';

function OrderSummary({ customerorder }) {
    const token = localStorage.getItem('token');
    const decode = jwtDecode(token);
    const username = decode?.name;
   

    const filteredOrders = Array.isArray(customerorder)
    ? customerorder.filter(order => order.customerName === username)
    : [];



  return (
    <div className='order'>
     
     
        {filteredOrders.length > 0 ? (
        filteredOrders.map((order, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ccc',
              marginBottom: '10px',
              padding: '10px',
            }}
          >
            <p><strong>Customer:</strong> {order.customerName}</p>
            <p><strong>Phone:</strong> {order.phone}</p>
            <p><strong>Item:</strong> {order.menuname}</p>
            <p><strong>Quantity:</strong> {order.quantity}</p>
            <p><strong>Price:</strong> ₹{order.price}</p>
            <p><strong>Total:</strong> ₹{order.total}</p>
            <p><strong>Restaurant:</strong> {order.restaurantname}</p>
            <p><strong>Status:</strong> {order.status}</p>
          </div>
        ))
      ) : (
        <p>No orders found for this customer.</p>
      )}

    </div>
  );
}

export default OrderSummary;