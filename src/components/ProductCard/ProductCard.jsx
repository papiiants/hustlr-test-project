import './ProductCard.css'
import {Link} from 'react-router-dom'
import toast from 'react-hot-toast'
import React from 'react'

const ProductCard = (props) => {

  const {
    product,
    addProduct,
  } = props

  return (
    <div
      id={product.id}
      className="product-card"
    >
      <img
        class="product-card__image"
        src={product.image}
        alt={product.title}
        height="200"
        loading="lazy"
      />

      <div className="product-card__body">
        <h3 className="product-card__title">{product.title.substring(0, 35)}...</h3>
        <div className="product-card__description">
          <p>{product.description.substring(0, 90)}...</p>
        </div>
        <div className="product-card__price">
          <span className="product-card__price-currency">$</span>
          {product.price}
        </div>
      </div>
      <div className="product-card__actions">
        <Link
          className="product-card__button product-card__button--link"
          to={"/product/" + product.id}
        >
          More information
        </Link>
        <button
          className="product-card__button product-card__button--action"
          onClick={() => {
            toast.success("Product added to cart")
            addProduct(product)
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard