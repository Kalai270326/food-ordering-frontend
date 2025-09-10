import React from 'react'
import { useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router'
import './Order.css'

function Order({setCustomerOrder,customerorder,order}) {
  const navigate=useNavigate()
  const [quantity, setQuantity] = useState(1)
  const[message, setMessage] = useState('')
  const token=localStorage.getItem('token')
  const decode=jwtDecode(token)
  const username=decode?.name
  const useremail=decode?.email
  const userphone=decode?.phone
  const product = order;
  const totalPrice = product ? product.price * quantity : 0;

  function handleclick(prod) {

    setMessage('Order placed successfully!')
    
    if(customerorder?.length>0){
    setCustomerOrder([...customerorder, { ...prod, quantity, total: totalPrice, customerName: username, customerEmail: useremail, phone: userphone }]);

  }

    else{
        setCustomerOrder([{ ...prod, quantity, total: totalPrice, customerName: username, customerEmail: useremail, phone: userphone }]);
      }
    }
   
    console.log(customerorder);
    localStorage.setItem('customerorder', JSON.stringify(customerorder));


  
  return (
    <div className='order-summary'>
      <img src={product?.image} alt={product?.menuname} width="150" />
      <p>Name: {decode?.name}</p>
      <p>Phone no: {decode?.phone}</p>

      <p>Menuname: {product?.menuname}</p>
      <p>Price: ₹{product?.price}</p>
      <p>Restaurant: {product?.restaurantname}</p>
      <div className='quantity-input'>
        <label>Quantity: </label>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
      </div>

      <p>Total: ₹{totalPrice}</p>

      <button onClick={() => handleclick(product)}>
        Confirm Order
      </button>
      {message && <p className='success-message'>{message}</p>}
    </div>

  );
}



export default Order