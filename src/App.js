import { Route, Routes } from "react-router-dom";
// import "./App.css";

import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import News from "./components/News";
import Research from "./components/Research";
import Funding from "./components/Funding";
import EventsTraining from "./components/EventsTraining";

import MediasIcon from "./components/MediasIcon";
import Undergraduate from "./components/Submenu/Undergraduate";
import Postgraduate from "./components/Submenu/Postgraduate";

function App() {
	return (
		<div className="App">
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home></Home>}></Route>

				<Route path="/about" element={<AboutUs></AboutUs>}></Route>
				<Route path="/news" element={<News></News>}></Route>
				<Route path="/funding" element={<Funding></Funding>}></Route>
				<Route
					path="/events"
					element={<EventsTraining></EventsTraining>}
				></Route>
				<Route path="/research" element={<Research></Research>}></Route>
				<Route
					path="/undergraduate"
					element={<Undergraduate></Undergraduate>}
				></Route>
				<Route
					path="/postgraduate"
					element={<Postgraduate></Postgraduate>}
				></Route>
			</Routes>
			{/* <MediasIcon></MediasIcon> */}
			<Footer></Footer>
		</div>
	);
}

export default App;
