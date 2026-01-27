import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { CartContext } from '../contexts/CartContext';
import { WishlistContext } from '../contexts/WishlistContext';
import { ToastContext } from '../contexts/ToastContext';

function Product({ product }) {
  const { id, title, category, image, price } = product;
  const { addToCart } = useContext(CartContext);
  const { toggleWishlist, isInWishlist } = useContext(WishlistContext);
  const { addToast } = useContext(ToastContext);
  const inWishlist = isInWishlist(id);

  const handleAddToCart = () => {
    addToCart(product, id);
    addToast('Item added to cart!', 'success');
  };

  const handleToggleWishlist = () => {
    toggleWishlist(product);
    const message = inWishlist ? 'Removed from wishlist' : 'Added to wishlist!';
    addToast(message, 'success');
  };

  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col'>
      {/* Image Section */}
      <div className='bg-gray-100 h-48 relative overflow-hidden group flex items-center justify-center'>
        <img
          className='w-full h-full object-contain p-4 group-hover:scale-110 transition duration-300'
          src={image}
          alt={title}
        />

        {/* Action Buttons - Vertical in Right Corner */}
        <div className='absolute top-2 right-2 flex flex-col gap-2'>
          <button
            onClick={handleAddToCart}
            className='bg-yellow-400 hover:bg-yellow-500 text-black p-1.5 transform hover:scale-110 transition'
            title='Add to cart'
          >
            <BsPlus className='text-lg' />
          </button>
          <Link
            to={`/product/${id}`}
            className='bg-white rounded-full text-gray-800 p-1.5 transform hover:scale-110 transition flex items-center justify-center hover:bg-gray-200'
            title='Quick view'
          >
            <BsEyeFill className='text-lg' />
          </Link>
          <button
            onClick={handleToggleWishlist}
            className={`rounded-full p-1.5 transform hover:scale-110 transition flex items-center justify-center ${inWishlist
              ? 'bg-red-500 text-white hover:bg-red-600'
              : 'bg-white text-red-500 hover:bg-gray-200'
              }`}
            title={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            {inWishlist ? <BsHeartFill className='text-lg' /> : <BsHeart className='text-lg' />}
          </button>
        </div>
      </div>

      {/* Product Info Section */}
      <div className='p-3 flex flex-col flex-grow'>
        <div className='text-xs uppercase tracking-wide text-gray-500 font-semibold mb-2'>
          {category}
        </div>
        <Link to={`/product/${id}`} className='block mb-2 flex-grow'>
          <h2 className='font-semibold text-gray-800 line-clamp-2 hover:text-red-500 transition'>
            {title}
          </h2>
        </Link>
        <div className='text-lg font-bold text-red-500 mt-auto'>
          ${price.toFixed(2)}
        </div>
      </div>
    </div>
  )
}

export default Product
