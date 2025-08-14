import './ProductDetails.css'
import React from 'react'
import {Link} from 'react-router-dom'
import toast from 'react-hot-toast'

const ProductDetails = (props) => {

  const {
    product,
    addProduct,
  } = props

  return (
    <div className='product-details'>
      <img
        className="product-details__image"
        src={product.image}
        alt={product.title}
        width="400"
        height="400"
        loading="lazy"
      />
      <div className="product-details__body">
        <div className="product-details__category">
          {product.category}
        </div>
        <h1 className="product-details__title">
          {product.title}
        </h1>
        <div className="product-details__rating">
          {product.rating && product.rating.rate}{" "}
          <i className="fa fa-star"></i>
        </div>
        <div className="product-details__price">
          <span className="product-details__price-label">Price:</span>
          <span className="product-details__price-value">
            {product.price}
          </span>
          <span className="product-details__price-currency">$</span>
        </div>
        <div className="product-details__description">
          <p>{product.description}</p>
        </div>
        <div className="product-details__actions">
          <button
            className="product-details__button product-details__button--action"
            onClick={() => {
              toast.success("Product added to cart")
              addProduct(product)
            }}
          >
            Add to cart
          </button>
          <Link
            className="product-details__button product-details__button--link"
            to="/cart"
          >
            Go to cart
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails