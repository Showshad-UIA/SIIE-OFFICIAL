import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Research from "./components/RESERACH/Research";
import Phd from "./components/Postgraduate/Phd";
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
import EventsTraining from "./components/Events";
import UgEconomics from "./components/UNDERGRADUATE/UG ECONOMICS/UgEconomics";
import UgBusinessLaw from "./components/UNDERGRADUATE/UG BUSINESS LAW/UgBusinessLaw";
import UgIslamicInsurance from "./components/UNDERGRADUATE/UG ISLAMIC INSURANCE/UgIslamicInsurance";
import UgIslamicStudy from "./components/UNDERGRADUATE/UG ISLAMIC STUDY/UgIslamicStudy";
import Diploma from "./components/DIPLOMA/DIPLOMA/Diploma";
import DiplomaFinance from "./components/DIPLOMA/DIPLOMA FINANCE/DiplomaFinance";
import ArticleOne from "./components/Home Content/NEWS/ArticleOne";
import AirticleTwo from "./components/Home Content/NEWS/AirticleTwo";
import ArticleThree from "./components/Home Content/NEWS/ArticleThree";
import AcademicStructure from "./components/Navbar/AboutSubmenu/AcademicStructure";
import Footer from "./components/FOOTER/Footer";
import Events from "./components/Events";

function App() {
	return (
		<div className="bg-white">
			<Topbar></Topbar>
			{/* <Header></Header> */}
			<Navbar></Navbar>

			{/* <Megmenubar></Megmenubar> */}

			<Routes>
				<Route path="/" element={<Home></Home>}></Route>
				<Route path="/profile" element={<Profile></Profile>}></Route>
				{/* About pages  */}
				<Route
					path="/LeadershipGovernence"
					element={<LeadershipGovernence></LeadershipGovernence>}
				></Route>
				<Route
					path="/AcademicStructure"
					element={<AcademicStructure></AcademicStructure>}
				></Route>

				<Route path="/research" element={<Research></Research>}></Route>

				<Route path="/events" element={<Events></Events>}></Route>
				{/* <Route path="/research" element={<Research></Research>}></Route> */}

				{/* undergraduate pages start here */}
				<Route
					path="/undergraduate"
					element={<Undergraduate></Undergraduate>}
				></Route>
				<Route path="/ugfinance" element={<UgFinance></UgFinance>}></Route>
				<Route
					path="/ugeconomics"
					element={<UgEconomics></UgEconomics>}
				></Route>
				<Route
					path="/ugbusinesslaw"
					element={<UgBusinessLaw></UgBusinessLaw>}
				></Route>
				<Route
					path="/uginsurance"
					element={<UgIslamicInsurance></UgIslamicInsurance>}
				></Route>
				<Route
					path="/ugislamicstudy"
					element={<UgIslamicStudy></UgIslamicStudy>}
				></Route>

				{/* diploma program start here */}
				<Route path="/diploma" element={<Diploma></Diploma>}></Route>
				<Route
					path="/diplomafinance"
					element={<DiplomaFinance></DiplomaFinance>}
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

				{/* home page article  */}
				{/* news content start here */}
				<Route path="/articleone" element={<ArticleOne></ArticleOne>}></Route>
				<Route path="/articletwo" element={<AirticleTwo></AirticleTwo>}></Route>
				<Route
					path="/articlethree"
					element={<ArticleThree></ArticleThree>}
				></Route>
			</Routes>

			<Footer></Footer>
		</div>
	);
}

export default App;
