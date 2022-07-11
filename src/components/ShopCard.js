import React from "react";
import '../ShopCard.css';

export default function ShopCard ({card}) {

    return (
        <div className='shopCard'>
            <h3>{card.name}</h3>
            <div className='shopCard_color'>{card.color}</div>
            <div className='shopCard_image'>
                <img src={card.img} alt={card.name}/>
            </div>
            <div className='shopCard_wrapper'>
                <div className='shopCard_price'>${card.price}</div>
                <button className='shopCard_button'>Add to cart</button>
            </div>
        </div>
    )

}