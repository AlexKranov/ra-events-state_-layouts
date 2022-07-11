import '../CardsView.css';
import ShopCard from "./ShopCard";
import React from "react";

export default function CardsView (props) {
    const shopCards = props.cards.map((item, index) => <ShopCard key={index} card={item}/>)

    return (
        <div className='shopCard_list'>{shopCards}</div>
    )


}