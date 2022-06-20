import React from "react"
import Cards from "./Cards"

let cardPorp = [
    {title: 'First img', button: 'First button', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, porro!', img: 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'},
    {title: 'Second img', button: 'Second button', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, est!', img:  'https://images.unsplash.com/photo-1529148482759-b35b25c5f217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'},
    {title: 'Third img', button: 'Third button', text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, quas.', img: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxpYnJhcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
    {title: 'Fourth img', button: 'Fourth button', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, quod.', img: 'https://images.unsplash.com/photo-1555116505-38ab61800975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGxpYnJhcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'}
];

let cardsProperties = cardPorp.map(ele => {
    return  <Cards title={ele.title} button={ele.button} text={ele.text} img={ele.img} />
})


export {cardsProperties}