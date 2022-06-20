import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";
import {cardsProperties} from "./cardProp";
//include images into your bundle

//create your first component
const Home = () => {

	return (
		<div className="container-fluid px-0">
			<Navbar/>
			<div className="container">				
				<Jumbotron/>
				<div className='row mx-1 mb-2'>
					{cardsProperties}
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
