import ShopItem from "./ShopItem";
import React from "react";
import '../ListView.css';


export default function ListView (props) {
    const shopItems = props.items.map((item, index) => <ShopItem key={index} item={item}/>)
 return (
     <div className='shopItems_list'>{shopItems}</div>
 )
}