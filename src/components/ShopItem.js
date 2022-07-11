import React from "react";
import '../ShopItem.css';

export default function ShopItem ({item}) {
    return (
        <div className='shopItem'>
            <div className='shopItem_image'>
                <img src={item.img} alt={item.name}/>
            </div>
            <h3>{item.name}</h3>
            <div className='shopItem_color'>{item.color}</div>
            <div className='shopItem_price'>${item.price}</div>
            <button className='shopItem_button'>Add to cart</button>
        </div>
    )

}