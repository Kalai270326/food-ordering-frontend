import React, { useEffect } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Customerlogin from './pages/login/Customerlogin'
import Customerregiseter from './pages/register/Customerregiseter'
import Restaurantlogin from './pages/login/Restaurantlogin'
import Restaurantregister from './pages/register/Restaurantregister'
import Restaurant from './pages/customer/Restaurant'
import Home from './pages/home/Home'
import Mainlayout from './pages/home/Mainlayout'
import Restamenu from './pages/customer/Restamenu'
import Restanew from './pages/customer/restanew'
import Restaorder from './pages/customer/Restaorder'
import Customer from './pages/customer/Customer'
import Logout from './pages/customer/logout'
import Order from './pages/orders/Order'
import Customerorder from './pages/orders/Customerorder'
import OrderSummary from './pages/orders/OrderSummary'
import { useState } from 'react'
import axios from 'axios'



function App() {
  const [allmenu, setAllMenu] = useState()
    const[order,setOrder]=useState()
    const [customerorder, setCustomerOrder] = useState([])
   useEffect(() => {
     async function getallmenu (){
        const response=await axios.get('http://localhost:3000/menu/all')

        setAllMenu(response?.data)
     }
     getallmenu()
   }, [])
  return (
    <div> 
     
       <BrowserRouter>
      <Mainlayout>
<Routes>
   <Route path='/restaorder' element={<Restaorder customerorder={customerorder} />}/>

  <Route path='/' element={<Home/>}/>
  {/* //customer login and register */}
  <Route path='/custlogin'  element={<Customerlogin/>}/>
  <Route path='/custregister' element={<Customerregiseter/>}/>
  {/* restaurant login and register */}
  <Route path='/restalogin' element={<Restaurantlogin/>} />
  <Route path='/restaregister' element={<Restaurantregister/>} />
  <Route path='/customer' element={<Customer allmenu={allmenu} setOrder={setOrder}  order={order} />}/>
  <Route path='/logout' element={<Logout/>}/>
  <Route path='/restaurant' element={<Restaurant/>}/>
  <Route path='/restamenu' element={<Restamenu />}/>
  <Route path='/restanew' element={<Restanew  />}/>
     
      <Route path='/orders/:id' element={<Order order={order} setCustomerOrder={setCustomerOrder} customerorder={customerorder}  />}/>
      <Route path='/customerorder' element={<Customerorder/>}/>
      <Route path='/ordersummary' element={<OrderSummary customerorder={customerorder} />} />

</Routes>
 </Mainlayout>
    
    </BrowserRouter>
   
    </div>
  
  )
}

export default App