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
import BankingFinance from "./components/Submenu/UndergraduateCourses/BankingFinance";

import Masters from "./components/Pages/masters/Masters";
import Phd from "./components/Postgraduate/Phd";
import UgBankingFinanceCourseplan from "./components/Submenu/UndergraduateCourses/UgBankingFinanceCourseplan";
import Diploma from "./components/Pages/diploma/Diploma";
// import NavBar from "./components/Navbar/NavBar";

function App() {
	return (
		<div className="App">
			<Header></Header>
			{/* <NavBar></NavBar> */}
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
				<Route path="/phd" element={<Phd></Phd>}></Route>
				<Route
					path="/banking"
					element={<BankingFinance></BankingFinance>}
				></Route>
				<Route
					path="/plan"
					element={<UgBankingFinanceCourseplan></UgBankingFinanceCourseplan>}
				></Route>
				<Route path="/diploma" element={<Diploma></Diploma>}></Route>
				<Route path="/masters" element={<Masters></Masters>}></Route>
			</Routes>
			{/* <MediasIcon></MediasIcon> */}
			<Footer></Footer>
		</div>
	);
}

export default App;
