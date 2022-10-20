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

import Phd from "./components/Postgraduate/Phd";
import UgBankingFinanceCourseplan from "./components/Submenu/UndergraduateCourses/UgBankingFinanceCourseplan";
import Diploma from "./components/Pages/diploma/Diploma";
import MenuBar from "./components/Navbar/MenuBar";
import UgEconomics from "./components/Submenu/UndergraduateCourses/UgEconomics";
import UgShariah from "./components/Submenu/UgShariah";
import UgIslamicInsurance from "./components/Submenu/UndergraduateCourses/UgIslamicInsurance";
import UgBusinessLaw from "./components/Submenu/UgBusinessLaw";
import UgFaq from "./components/Submenu/UgFaq";
import UgFiqh from "./components/Submenu/UndergraduateCourses/UgFiqh";

import DiplomaFinance from "./components/Pages/diploma/DiplomaFinance";
import DiplomaShariah from "./components/Pages/diploma/DiplomaShariah";
import DiplomaEconomics from "./components/Pages/diploma/DiplomaEconomics";
import DiplomaIslamicInsurance from "./components/Pages/diploma/DiplomaIslamicInsurance";
// import Navbar from "./components/Submenu/UndergraduateCourses/Navbar";
import Program from "./components/Submenu/Program";

import Megmenubar from "./components/Megamenu/Megmenubar";
import Topbar from "./components/Navbar/Topbar";
import Navbar from "./components/Navbar/NavBar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeadershipGovernence from "./components/Navbar/AboutSubmenu/LeadershipGovernence";
import Profile from "./components/Navbar/AboutSubmenu/Profile";
import PhdFinance from "./components/Postgraduate/PHD FINANCE/PhdFinance";
import PhdEconimics from "./components/Postgraduate/PHD ECONOMICS/PhdEconimics";
import PhDBusiness from "./components/Postgraduate/PHD BUSINESS LAW/PhDBusiness";
import PhDIslamicInsurance from "./components/Postgraduate/PHD BUSINESS INSURANCE/PhDIslamicInsurance";
import PhDIslamicStudies from "./components/Postgraduate/PHD ISLAMIC STUDIES/PhDIslamicStudies";
import Masters from "./components/MASTERS/MASTERS/Masters";
import MastersFinance from "./components/MASTERS/MASTERS FINANCE/MastersFinance";

function App() {
	return (
		<div className="bg-white">
			<Topbar></Topbar>
			{/* <Header></Header> */}
			<Navbar></Navbar>
			{/* <MenuBar></MenuBar> */}
			{/* <Megmenubar></Megmenubar> */}

			<Routes>
				<Route path="/" element={<Home></Home>}></Route>
				<Route path="/about" element={<AboutUs></AboutUs>}></Route>
				<Route path="/profile" element={<Profile></Profile>}></Route>
				<Route
					path="/LeadershipGovernence"
					element={<LeadershipGovernence></LeadershipGovernence>}
				></Route>

				<Route path="/research" element={<Research></Research>}></Route>

				<Route path="/news" element={<News></News>}></Route>
				<Route path="/funding" element={<Funding></Funding>}></Route>
				<Route
					path="/events"
					element={<EventsTraining></EventsTraining>}
				></Route>
				{/* <Route path="/research" element={<Research></Research>}></Route> */}
				<Route path="/program" element={<Program></Program>}></Route>
				<Route
					path="/undergraduate"
					element={<Undergraduate></Undergraduate>}
				></Route>

				<Route
					path="/banking"
					element={<BankingFinance></BankingFinance>}
				></Route>
				<Route
					path="/plan"
					element={<UgBankingFinanceCourseplan></UgBankingFinanceCourseplan>}
				></Route>
				<Route path="/economics" element={<UgEconomics></UgEconomics>}></Route>
				<Route path="/shariah" element={<UgShariah></UgShariah>}></Route>
				<Route
					path="/insurance"
					element={<UgIslamicInsurance></UgIslamicInsurance>}
				></Route>
				<Route
					path="/businesslaw"
					element={<UgBusinessLaw></UgBusinessLaw>}
				></Route>
				<Route path="/fiqh" element={<UgFiqh></UgFiqh>}></Route>
				<Route path="/diploma" element={<Diploma></Diploma>}></Route>
				<Route
					path="/diplomafinance"
					element={<DiplomaFinance></DiplomaFinance>}
				></Route>
				<Route
					path="/diplomashariah"
					element={<DiplomaShariah></DiplomaShariah>}
				></Route>
				<Route
					path="/diplomainsurance"
					element={<DiplomaIslamicInsurance></DiplomaIslamicInsurance>}
				></Route>
				<Route
					path="/diplomaeconomics"
					element={<DiplomaEconomics></DiplomaEconomics>}
				></Route>
				{/* Masters reserach start here */}
				<Route path="/mastersreserach" element={<Masters></Masters>}></Route>
				<Route
					path="/masterfinance"
					element={<MastersFinance></MastersFinance>}
				></Route>

				{/* phd components start from here */}
				<Route path="/phd" element={<Phd></Phd>}></Route>
				<Route path="/phdfinance" element={<PhdFinance></PhdFinance>}></Route>
				<Route
					path="/phdinsurance"
					element={<PhDIslamicInsurance></PhDIslamicInsurance>}
				></Route>

				<Route
					path="/phdeconomics"
					element={<PhdEconimics></PhdEconimics>}
				></Route>
				<Route
					path="/phdbusinesslaw"
					element={<PhDBusiness></PhDBusiness>}
				></Route>
				<Route
					path="/phdislamicstudy"
					element={<PhDIslamicStudies></PhDIslamicStudies>}
				></Route>
			</Routes>
			{/* <MediasIcon></MediasIcon> */}
			<Footer></Footer>
		</div>
	);
}

export default App;
