import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Cards from "./Cards";
import Footer from "./Footer";
import {titles} from "./cardProp";
//include images into your bundle

//create your first component
const Home = () => {

	let cardPorp = {
		title:['First Img','Second Img', 'Third Img', 'Fourth Img'],
		button:['First button', 'Second button', 'Third button', 'Fourth button'],
		text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, porro!',
		img:['https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
			'https://images.unsplash.com/photo-1529148482759-b35b25c5f217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
			'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxpYnJhcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
			'https://images.unsplash.com/photo-1555116505-38ab61800975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGxpYnJhcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60']
	}

	return (
		<div className="container-fluid px-0">
			<Navbar/>
			<div className="container">				
				<Jumbotron/>
				<div className='row mx-1 mb-2'>
					<Cards title={cardPorp.title[0]} button={cardPorp.button[0]} text={cardPorp.text} img={cardPorp.img[0]}/>
					<Cards title={cardPorp.title[1]} button={cardPorp.button[1]} text={cardPorp.text} img={cardPorp.img[1]}/>
					<Cards title={cardPorp.title[2]} button={cardPorp.button[2]} text={cardPorp.text} img={cardPorp.img[2]}/>
					<Cards title={cardPorp.title[3]} button={cardPorp.button[3]} text={cardPorp.text} img={cardPorp.img[3]}/>
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
