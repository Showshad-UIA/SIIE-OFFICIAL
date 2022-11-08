import { Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Topbar from "./components/Navbar/Topbar";
import Header from "./components/Header";
import Home from "./components/HOME/Home";
import Navbar from "./components/Navbar/ACADEMIC PROGRAMS/NavBar";
// PHD
import Phd from "./components/Postgraduate/Phd";
import PhdFinance from "./components/Postgraduate/PHD FINANCE/PhdFinance";
import PhdEconomics from "./components/Postgraduate/PHD ECONOMICS/PhdEconomics";
import PhDBusiness from "./components/Postgraduate/PHD BUSINESS LAW/PhDBusiness";
import PhDIslamicInsurance from "./components/Postgraduate/PHD BUSINESS INSURANCE/PhDIslamicInsurance";

// Masters Research
import Masters from "./components/MASTERS/MASTERS/Masters";
import MastersFinance from "./components/MASTERS/MASTERS FINANCE/MastersFinance";
import MasterEconomics from "./components/MASTERS/MASTERS ECONOMICS/MasterEconomics";
import MasterIslamicInsurance from "./components/MASTERS/MASTER ISLAMIC INSURANCE/MasterIslamicInsurance";
import MasterBLaw from "./components/MASTERS/MASTER BUSINESS LAW/MasterBLaw";
import MasterIslamicStudy from "./components/MASTERS/MASTER ISLAMIC STUDY/MasterIslamicStudy";
// Masters Coursework
import MastersCw from "./components/MASTERS ( COURSEWORK )/MASTERS (CW)/MastersCw";
import MastersCwFinance from "./components/MASTERS ( COURSEWORK )/MASTER CW FINANCE/MastersCwFinance";
import MastersCwEconomics from "./components/MASTERS ( COURSEWORK )/MASTERS CW ECONOMICS/MastersCwEconomics";
import MastersCwBusinessLaw from "./components/MASTERS ( COURSEWORK )/MASTERS CW BUSINESS LAW/MastersCwBusinessLaw";
import MastersCwInsurance from "./components/MASTERS ( COURSEWORK )/MASTERS CW INSURANCE/MastersCwInsurance";
import MastersCwIslamicStudies from "./components/MASTERS ( COURSEWORK )/MASTERS CW ISLAMIC STUDY/MastersCwIslamicStudies";
// Undergraduate
import Undergraduate from "./components/UNDERGRADUATE/UNDERGRADUATE/Undergraduate";
import UgFinance from "./components/UNDERGRADUATE/UG FINANCE/UgFinance";
import UgEconomics from "./components/UNDERGRADUATE/UG ECONOMICS/UgEconomics";
import UgBusinessLaw from "./components/UNDERGRADUATE/UG BUSINESS LAW/UgBusinessLaw";
import UgIslamicInsurance from "./components/UNDERGRADUATE/UG ISLAMIC INSURANCE/UgIslamicInsurance";
import UgIslamicStudy from "./components/UNDERGRADUATE/UG ISLAMIC STUDY/UgIslamicStudy";
// Diploma
import Diploma from "./components/DIPLOMA/DIPLOMA/Diploma";
import DiplomaFinance from "./components/DIPLOMA/DIPLOMA FINANCE/DiplomaFinance";
import DiplomaEconomics from "./components/DIPLOMA/DIPLOMA ECONOMICS/DiplomaEconomics";
import DiplomaBusinessLaw from "./components/DIPLOMA/DIPLOMA BUSINESS LAW/DiplomaBusinessLaw";
import DiplomaIslamicInsurance from "./components/DIPLOMA/DIPLOMA ISLAMIC INSURANCE/DiplomaIslamicInsurance";
// Other pages
import Events from "./components/Navbar/EVENT'S & NEWS/Events";
import EventsTraining from "./components/Navbar/EVENT'S & NEWS/Events";
import Research from "./components/Navbar/RESERACH/Research";
import Footer from "./components/FOOTER/Footer";
import ArticleOne from "./components/HOME/HOME CONTENT/NEWS/ArticleOne";
import AirticleTwo from "./components/HOME/HOME CONTENT/NEWS/AirticleTwo";
import ArticleThree from "./components/HOME/HOME CONTENT/NEWS/ArticleThree";
import AcademicStructure from "./components/Navbar/ABOUT SIBS/AcademicStructure";
import LeadershipGovernence from "./components/Navbar/ABOUT SIBS/LeadershipGovernence";
import Profile from "./components/Navbar/ABOUT SIBS/Profile";
import DiplomaIslamicStudies from "./components/DIPLOMA/DIPLOMA ISLAMIC STUDIES/DiplomaIslamicStudies";
import PhDManagement from "./components/Postgraduate/PHD MANAGEMENT/PhDManagement";
import PhdIBusiness from "./components/Postgraduate/PHD INTERNATIONAL BUSINESS/PhdIBusiness";



function App() {
	return (
		<div className="bg-white">
			<Topbar></Topbar>
			{/* <Header></Header> */}
			<Navbar></Navbar>

			<Routes>
				<Route path="/" element={<Home></Home>}></Route>

				{/* About sibs navbar pages  */}
				<Route path="/profile" element={<Profile></Profile>}></Route>
				<Route
					path="/LeadershipGovernence"
					element={<LeadershipGovernence></LeadershipGovernence>}
				></Route>
				<Route
					path="/AcademicStructure"
					element={<AcademicStructure></AcademicStructure>}
				></Route>

				{/* Research navbar  */}
				<Route path="/research" element={<Research></Research>}></Route>
				{/* Events & News navbar  */}
				<Route path="/events" element={<Events></Events>}></Route>

				{/* diploma program start here */}
				<Route path="/diploma" element={<Diploma></Diploma>}></Route>
				<Route
					path="/diplomafinance"
					element={<DiplomaFinance></DiplomaFinance>}
				></Route>
				<Route
					path="/diplomaeconomics"
					element={<DiplomaEconomics></DiplomaEconomics>}
				></Route>
				<Route
					path="/diplomabusinesslaw"
					element={<DiplomaBusinessLaw></DiplomaBusinessLaw>}
				></Route>
				<Route
					path="/diplomainsurance"
					element={<DiplomaIslamicInsurance></DiplomaIslamicInsurance>}
				></Route>
				<Route
					path="/diplomaislamicstudies"
					element={<DiplomaIslamicStudies></DiplomaIslamicStudies>}
				></Route>

				{/* undergraduate program start here */}
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

				{/* Masters (research) start here */}
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
				{/* Masters (Coursework) start here */}
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

				{/* phd program start from here */}
				<Route path="/phd" element={<Phd></Phd>}></Route>
				<Route path="/phdfinance" element={<PhdFinance></PhdFinance>}></Route>
				<Route
					path="/phdinsurance"
					element={<PhDIslamicInsurance></PhDIslamicInsurance>}
				></Route>

				<Route
					path="/phdeconomics"
					element={<PhdEconomics></PhdEconomics>}
				></Route>
				<Route
					path="/phdbusinesslaw"
					element={<PhDBusiness></PhDBusiness>}
				></Route>
				<Route
					path="/phdmanagement"
					element={<PhDManagement></PhDManagement>}
				></Route>
				<Route
					path="/phdIntbusiness"
					element={<PhdIBusiness></PhdIBusiness>}
				></Route>

				{/* home page article  */}
				{/* Home page article - (news)  */}
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
