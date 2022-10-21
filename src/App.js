import { Route, Routes } from "react-router-dom";
// import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import News from "./components/News";
import Research from "./components/Research";

import Phd from "./components/Postgraduate/Phd";
import Diploma from "./components/Pages/diploma/Diploma";
import DiplomaFinance from "./components/Pages/diploma/DiplomaFinance";
import DiplomaShariah from "./components/Pages/diploma/DiplomaShariah";
import DiplomaEconomics from "./components/Pages/diploma/DiplomaEconomics";
import DiplomaIslamicInsurance from "./components/Pages/diploma/DiplomaIslamicInsurance";
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
import MasterEconomics from "./components/MASTERS/MASTERS ECONOMICS/MasterEconomics";
import MasterIslamicInsurance from "./components/MASTERS/MASTER ISLAMIC INSURANCE/MasterIslamicInsurance";
import MasterBLaw from "./components/MASTERS/MASTER BUSINESS LAW/MasterBLaw";
import MasterIslamicStudy from "./components/MASTERS/MASTER ISLAMIC STUDY/MasterIslamicStudy";
import MastersCw from "./components/MASTERS ( COURSEWORK )/MASTERS (CW)/MastersCw";
import MastersCwFinance from "./components/MASTERS ( COURSEWORK )/MASTER CW FINANCE/MastersCwFinance";
import MastersCwEconomics from "./components/MASTERS ( COURSEWORK )/MASTERS CW ECONOMICS/MastersCwEconomics";
import MastersCwBusinessLaw from "./components/MASTERS ( COURSEWORK )/MASTERS CW BUSINESS LAW/MastersCwBusinessLaw";
import MastersCwInsurance from "./components/MASTERS ( COURSEWORK )/MASTERS CW INSURANCE/MastersCwInsurance";
import MastersCwIslamicStudies from "./components/MASTERS ( COURSEWORK )/MASTERS CW ISLAMIC STUDY/MastersCwIslamicStudies";
import Undergraduate from "./components/UNDERGRADUATE/UNDERGRADUATE/Undergraduate";
import UgFinance from "./components/UNDERGRADUATE/UG FINANCE/UgFinance";
import EventsTraining from "./components/EventsTraining";
import UgEconomics from "./components/UNDERGRADUATE/UG ECONOMICS/UgEconomics";
import UgBusinessLaw from "./components/UNDERGRADUATE/UG BUSINESS LAW/UgBusinessLaw";

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
				<Route path="/profile" element={<Profile></Profile>}></Route>
				<Route
					path="/LeadershipGovernence"
					element={<LeadershipGovernence></LeadershipGovernence>}
				></Route>

				<Route path="/research" element={<Research></Research>}></Route>

				<Route path="/news" element={<News></News>}></Route>

				<Route
					path="/events"
					element={<EventsTraining></EventsTraining>}
				></Route>
				{/* <Route path="/research" element={<Research></Research>}></Route> */}
				<Route path="/program" element={<Program></Program>}></Route>

				{/* undergraduate pages start here */}
				<Route
					path="/undergraduate"
					element={<Undergraduate></Undergraduate>}
				></Route>
				<Route path="/ugfinance" element={<UgFinance></UgFinance>}></Route>
				<Route path="/ugeconomics" element={<UgEconomics></UgEconomics>}></Route>
				<Route path="/ugbusinesslaw" element={<UgBusinessLaw></UgBusinessLaw>} ></Route>






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
					path="/financeresearch"
					element={<MastersFinance></MastersFinance>}
				></Route>
				<Route
					path="/economicsresearch"
					element={<MasterEconomics></MasterEconomics>}
				></Route>
				<Route
					path="/insuranceresearch"
					element={<MasterIslamicInsurance></MasterIslamicInsurance>}
				></Route>
				<Route
					path="/businesslawresearch"
					element={<MasterBLaw></MasterBLaw>}
				></Route>
				<Route
					path="/islamicstudyresearch"
					element={<MasterIslamicStudy></MasterIslamicStudy>}
				></Route>
				{/* Masters Coursework start here */}
				<Route
					path="/masterscoursework"
					element={<MastersCw></MastersCw>}
				></Route>
				<Route
					path="/financecoursework"
					element={<MastersCwFinance></MastersCwFinance>}
				></Route>
				<Route
					path="/economicscoursework"
					element={<MastersCwEconomics></MastersCwEconomics>}
				></Route>
				<Route
					path="/businesslawcoursework"
					element={<MastersCwBusinessLaw></MastersCwBusinessLaw>}
				></Route>
				<Route
					path="/insurancecoursework"
					element={<MastersCwInsurance></MastersCwInsurance>}
				></Route>
				<Route
					path="/islamicstudiescoursework"
					element={<MastersCwIslamicStudies></MastersCwIslamicStudies>}
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

			<Footer></Footer>
		</div>
	);
}

export default App;
