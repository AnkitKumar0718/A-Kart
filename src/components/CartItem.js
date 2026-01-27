import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
import { CartContext } from '../contexts/CartContext';

function Cartitem({item}) {
  const {removeFromCart, increaseAmount, decreaseAmount}=useContext(CartContext); 

  const {id,title,amount,image,price}=item;

  return (
    <div className='flex gap-x-4 py-2 lg:px-6 border-b 
    border-gray-200 w-full font-light  text-gray-500'>
       <div className='w-full min-h-[130px] flex items-center gap-x-4'>
        {    }
        <Link to={`/prdouct/${id}`}>
          <img className='max-w-[60px]' src={image}  alt=""/>
        </Link>

        <div className='w-full flex flex-col'>
          {     }
          <div className='flex justify-between mb-2 cursor-pointer'>
            <Link to={`/prdouct/${id}`} className='text-sm uppercase
            font-medium max-w-[240px] text-primary hover:underline'>
            {title}
            </Link>

            <div onClick={()=>removeFromCart(id)}>
              <IoMdClose  className='text-white hover:bg-red-600 transition text-xl bg-red-400'/>
            </div>
          </div>
          <div className=' flex gap-x-2 h-[36px] text-sm'>
            <div className=' flex flex-1 max-w-[100px] 
            items-center h-full border text-primary font-medium'>
             
              <div onClick={()=>decreaseAmount(id)} className='flex-1 flex justify-center items-center
              cursor-pointer bg-yellow-400 h-full'>
              <IoMdRemove/>
              </div>
              <div className='h-full flex justify-center 
              items-center px-2'>{amount}</div>
              <div onClick={()=>increaseAmount(id)} className ='flex-1 h-full flex justify-center items-center
              cursor-pointer bg-blue-500 h-full'>
                <IoMdAdd/>
              </div>
            </div>
            <div className='flex-1 justify-around items-center'x>
              ${price}</div>
            <div className=' flex flex-1 justify-end 
            items-center text-primary font-medium'>
              {`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
          </div>
        </div> 
      </div> 
    </div>
  )
}

export default Cartitem


