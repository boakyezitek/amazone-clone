import React from 'react'
import './CheckoutProduct.css';
import { useStateValue } from '../../../Provider/StateProvider';
function CheckoutProduct({id, image, title, price, rating}) {
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = () => {
           if(window.confirm('Are you Sure you want to remove from  basket')){
              dispatch({
               type:'REMOVE_FROM_BASKET',
               id:id,

             })
           }

    }
    return (
        <div className="checkoutProduct">
                <img src={image} className="checkoutProduct__image"/>
                <div className="checkoutProduct__info">
                <p>{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                   <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                  {
                        Array(rating).fill().map((_, i) => (
                            <p key={i}>⭐</p>
                        ))
                  }

                </div>
                <button onClick={removeFromBasket}>Remove From Basket</button>
                </div>
        </div>
    )
}

export default CheckoutProduct
