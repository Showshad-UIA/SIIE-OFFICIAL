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
import MasterIslamicStudy from "./components/MASTERS/MASTER MANAGEMENT/MasterManagement";
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

import Footer from "./components/FOOTER/Footer";
import ArticleOne from "./components/HOME/HOME CONTENT/NEWS/ArticleOne";
import AirticleTwo from "./components/HOME/HOME CONTENT/NEWS/AirticleTwo";
import ArticleThree from "./components/HOME/HOME CONTENT/NEWS/ArticleThree";
import AcademicStructure from "./components/Navbar/ABOUT SIBS/AcademicStructure";
import LeadershipGovernence from "./components/Navbar/ABOUT SIBS/LeadershipGovernence";
import Profile from "./components/Navbar/ABOUT SIBS/Profile";
import DiplomaIslamicStudies from "./components/DIPLOMA/DIPLOMA MANAGEMENT/DiplomaManagement";
import PhDManagement from "./components/Postgraduate/PHD MANAGEMENT/PhDManagement";
import PhdIBusiness from "./components/Postgraduate/PHD INTERNATIONAL BUSINESS/PhdIBusiness";
import Phdprogram from "./components/Postgraduate/PHD PROGRAM/Phdprogram";
import Masterprogram from "./components/MASTERS PROGRAM/Masterprogram";
import MasterIntBusiness from "./components/MASTERS/MASTER INT BUSINESS/MasterIntBusiness";
import MasterCwProgram from "./components/MASTERS ( COURSEWORK )/MASTER CW PROGRAM/MasterCwProgram";
import GDProgram from "./components/DIPLOMA/GRADUATE DIPLOMA PROGRAM/GDProgram";
import DiplomaManagement from "./components/DIPLOMA/DIPLOMA MANAGEMENT/DiplomaManagement";
import DiplomaIntBusiness from "./components/DIPLOMA/DIPLOMA INTERNATIONAL BUSINESS/DiplomaIntBusiness";
import News from "./components/Navbar/EVENT'S & NEWS/News";
import CurrentStudents from "./components/Navbar/RESERACH/CurrentStudents/CurrentStudents";
import FutureStudents from "./components/Navbar/RESERACH/FutureStudents/FutureStudents";
// import Deadline from "./components/Navbar/RESERACH/FutureStudents/Deadline/Deadline";

import Apply from "./components/Navbar/RESERACH/FutureStudents/Apply/Apply";
import Faq from "./components/Navbar/RESERACH/FutureStudents/FAQ/Faq";
import Deadline from "./components/Navbar/RESERACH/FutureStudents/Application Deadline/Deadline";
import Supervisors from "./components/Navbar/RESERACH/FutureStudents/Supervisors/Supervisors";
import Dean from "./components/Navbar/RESERACH/FutureStudents/Supervisors/Staffs Profile/Dean/Dean";
import Contact from "./components/Navbar/RESERACH/FutureStudents/Supervisors/Staffs Profile/Dean/Contact";
import Publication from "./components/Navbar/RESERACH/FutureStudents/Supervisors/Staffs Profile/Dean/Publication";
import GettingStarts from "./components/Navbar/RESERACH/CurrentStudents/Getting Started/GettingStarts";
import AcademicProgress from "./components/Navbar/RESERACH/CurrentStudents/Academic Progress/AcademicProgress";
import Safety from "./components/Navbar/RESERACH/CurrentStudents/Safety & wellbeing/Safety";
import Track from "./components/Navbar/RESERACH/CurrentStudents/Staying Track/Track";

function App() {
	return (
		<div className="bg-white">
			{/* navbar section added here  */}
			<Topbar></Topbar>
			<Navbar></Navbar>

			<Routes>
				<Route path="/" element={<Home></Home>}></Route>

				{/* Under about Us pages added here */}
				<Route path="/profile" element={<Profile></Profile>}></Route>
				<Route
					path="/LeadershipGovernence"
					element={<LeadershipGovernence></LeadershipGovernence>}
				></Route>
				<Route
					path="/AcademicStructure"
					element={<AcademicStructure></AcademicStructure>}
				></Route>

				{/* Graduate research pages added here  */}
				<Route
					path="/future"
					element={<FutureStudents></FutureStudents>}
				></Route>
				{/* Future students content start here */}

				<Route path="/supervisors" element={<Supervisors></Supervisors>}>
					{" "}
				</Route>
				<Route path="/dean" element={<Dean></Dean>}></Route>

				<Route path="/deadline" element={<Deadline></Deadline>}></Route>
				<Route path="/apply" element={<Apply></Apply>}></Route>
				<Route path="/faq" element={<Faq></Faq>}></Route>


				{/* Current students content start here */}
				<Route
					path="/current"
					element={<CurrentStudents></CurrentStudents>}
				></Route>
				<Route
					path="/gettingStarted"
					element={<GettingStarts></GettingStarts>}
				></Route>
				<Route
					path="/progress"
					element={<AcademicProgress></AcademicProgress>}
				></Route>
				<Route
					path="/safety"
					element={<Safety></Safety>}
				></Route>
				<Route
					path="/track"
					element={<Track></Track>}
				></Route>

				{/* Events & News pages added here  */}
				<Route path="/events" element={<Events></Events>}></Route>
				<Route path="/news" element={<News></News>}></Route>

				{/* Academic programs pages added here */}

				{/* diploma programs */}
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
					path="/diplomamanagement"
					element={<DiplomaManagement></DiplomaManagement>}
				></Route>
				<Route
					path="/diplomaIntbusiness"
					element={<DiplomaIntBusiness></DiplomaIntBusiness>}
				></Route>
				<Route
					path="/gdiplomaprogram"
					element={<GDProgram></GDProgram>}
				></Route>

				{/* undergraduate programs */}
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

				{/* Masters (research) programs */}
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
					path="/managementresearch"
					element={<MasterIslamicStudy></MasterIslamicStudy>}
				></Route>
				<Route
					path="/Intbusinessresearch"
					element={<MasterIntBusiness></MasterIntBusiness>}
				></Route>
				<Route
					path="/mastersprogram"
					element={<Masterprogram></Masterprogram>}
				></Route>

				{/* Masters (Coursework) programs */}
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

				<Route
					path="/mastersCwProgram"
					element={<MasterCwProgram></MasterCwProgram>}
				></Route>

				{/* PhD programs */}

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
				<Route path="/phdprogram" element={<Phdprogram></Phdprogram>}></Route>

				{/* home content added here  */}
				{/* News & all News  */}
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
