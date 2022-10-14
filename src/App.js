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
import MenuBar from "./components/Navbar/MenuBar";
import UgEconomics from "./components/Submenu/UndergraduateCourses/UgEconomics";
import UgShariah from "./components/Submenu/UgShariah";
import UgIslamicInsurance from "./components/Submenu/UndergraduateCourses/UgIslamicInsurance";
import UgBusinessLaw from "./components/Submenu/UgBusinessLaw";
import UgFaq from "./components/Submenu/UgFaq";
import UgFiqh from "./components/Submenu/UndergraduateCourses/UgFiqh";
import PhdFinance from "./components/Postgraduate/PhdFinance";
import PhdShariah from "./components/Postgraduate/PhdShariah";
import PhdEconomics from "./components/Postgraduate/PhdEconomics";
import PhdIslamicInsurance from "./components/Postgraduate/PhdIslamicInsurance";
import PhdBusinessLaw from "./components/Postgraduate/PhdBusinessLaw";
import PhdUsalFiq from "./components/Postgraduate/PhdUsalFiq";
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
				<Route path="/masters" element={<Masters></Masters>}></Route>
				<Route path="/masters" element={<Masters></Masters>}></Route>
				<Route path="/phd" element={<Phd></Phd>}></Route>
				<Route path="/phdfinance" element={<PhdFinance></PhdFinance>}></Route>
				<Route path="/phdsariah" element={<PhdShariah></PhdShariah>}></Route>
				<Route
					path="/phdinsurance"
					element={<PhdIslamicInsurance></PhdIslamicInsurance>}
				></Route>
				<Route
					path="/phdeconomics"
					element={<PhdEconomics></PhdEconomics>}
				></Route>
				<Route
					path="/phdbusinesslaw"
					element={<PhdBusinessLaw></PhdBusinessLaw>}
				></Route>
				<Route path="/phdusalfiq" element={<PhdUsalFiq></PhdUsalFiq>}></Route>
			</Routes>
			{/* <MediasIcon></MediasIcon> */}
			<Footer></Footer>
		</div>
	);
}

export default App;
