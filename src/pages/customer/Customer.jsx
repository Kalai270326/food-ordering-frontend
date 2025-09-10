import React from 'react'
import './Customer.css'
import { useNavigate } from 'react-router'

 
function Customer({allmenu,setOrder,order}) {
 const navigate=useNavigate()
  // const [allmenu, setAllMenu] = useState()
  // const[order,setOrder]=useState()
  // async function getallmenu (){
  //    const response=await axios.get('http://localhost:3000/menu/all')
    
  //    setAllMenu(response?.data)
  // }
  // getallmenu()

    function handlesubmit(pro){
      setOrder(pro)
      navigate(`/orders/${pro._id}`)
  }

  return (
    < div className='customer-page'>
      <div className='view-order'><button onClick={() => navigate('/ordersummary')}>View order</button></div>
    <div className='customer'>
       { allmenu?.map((item,index) => (
        <div className='menu-list' key={index}>
          <img src={item.image} alt='' height={'100px'} width={'100px'} />
            <p>{item.menuname}</p>
            <p>Price:{item.price}</p>
            <p>Restaurant:{item.restaurantname}</p>
           <button className='order-button' onClick={() => handlesubmit(item)}>Order Now</button>

          </div>
        ))}

    </div>
    </div>
  )
}

export default Customer


    