import React from "react"
import Cards from "./Cards"

let cardProp = {
    title:['First Img','Second Img', 'Third Img', 'Fourth Img'],
    button:['First button', 'Second button', 'Third button', 'Fourth button'],
    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, porro!',
    img1:'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
}

let titles = cardProp.title.map(ele => {
    let n = <Cards title={ele}/>
    return n
})
let buttons = cardProp.button.map(ele => {
    let n = <Cards button={ele}/>
    return n
})

export {titles}