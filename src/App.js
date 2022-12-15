import { Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Topbar from "./components/Navbar/Topbar";
import Navbar from "./components/Navbar/ACADEMIC PROGRAMS/NavBar";

// HOME
import Home from "./components/HOME/Home";
import ArticleOne from "./components/HOME/HOME CONTENT/NEWS/ArticleOne";
import AirticleTwo from "./components/HOME/HOME CONTENT/NEWS/AirticleTwo";
import ArticleThree from "./components/HOME/HOME CONTENT/NEWS/ArticleThree";
// PHD
import Phd from "./components/Postgraduate/Phd";
import PhdFinance from "./components/Postgraduate/PHD FINANCE/PhdFinance";
import PhdEconomics from "./components/Postgraduate/PHD ECONOMICS/PhdEconomics";
import PhDBusiness from "./components/Postgraduate/PHD BUSINESS LAW/PhDBusiness";
import PhDIslamicInsurance from "./components/Postgraduate/PHD BUSINESS INSURANCE/PhDIslamicInsurance";
import PhDManagement from "./components/Postgraduate/PHD MANAGEMENT/PhDManagement";
import PhdIBusiness from "./components/Postgraduate/PHD INTERNATIONAL BUSINESS/PhdIBusiness";
import Phdprogram from "./components/Postgraduate/PHD PROGRAM/Phdprogram";

// Masters Research
import Masters from "./components/MASTERS/MASTERS/Masters";
import MastersFinance from "./components/MASTERS/MASTERS FINANCE/MastersFinance";
import MasterEconomics from "./components/MASTERS/MASTERS ECONOMICS/MasterEconomics";
import MasterIslamicInsurance from "./components/MASTERS/MASTER ISLAMIC INSURANCE/MasterIslamicInsurance";
import MasterBLaw from "./components/MASTERS/MASTER BUSINESS LAW/MasterBLaw";
import MasterIslamicStudy from "./components/MASTERS/MASTER MANAGEMENT/MasterManagement";
import Masterprogram from "./components/MASTERS PROGRAM/Masterprogram";
import MasterIntBusiness from "./components/MASTERS/MASTER INT BUSINESS/MasterIntBusiness";
import MasterCwProgram from "./components/MASTERS ( COURSEWORK )/MASTER CW PROGRAM/MasterCwProgram";

// Masters Coursework
import MastersCw from "./components/MASTERS ( COURSEWORK )/MASTERS (CW)/MastersCw";
import MastersCwFinance from "./components/MASTERS ( COURSEWORK )/MASTER CW FINANCE/MastersCwFinance";
import MastersCwEconomics from "./components/MASTERS ( COURSEWORK )/MASTERS CW ECONOMICS/MastersCwEconomics";
import MastersCwBusinessLaw from "./components/MASTERS ( COURSEWORK )/MASTERS CW BUSINESS LAW/MastersCwBusinessLaw";
import MastersCwInsurance from "./components/MASTERS ( COURSEWORK )/MASTERS CW INSURANCE/MastersCwInsurance";
import MastersCwIslamicStudies from "./components/MASTERS ( COURSEWORK )/MASTERS CW ISLAMIC STUDY/MastersCwIslamicStudies";

// Diploma
import Diploma from "./components/DIPLOMA/DIPLOMA/Diploma";
import DiplomaFinance from "./components/DIPLOMA/DIPLOMA FINANCE/DiplomaFinance";
import DiplomaEconomics from "./components/DIPLOMA/DIPLOMA ECONOMICS/DiplomaEconomics";
import DiplomaBusinessLaw from "./components/DIPLOMA/DIPLOMA BUSINESS LAW/DiplomaBusinessLaw";
import DiplomaIslamicInsurance from "./components/DIPLOMA/DIPLOMA ISLAMIC INSURANCE/DiplomaIslamicInsurance";
import GDProgram from "./components/DIPLOMA/GRADUATE DIPLOMA PROGRAM/GDProgram";

// About Us pages
import AcademicStructure from "./components/Navbar/ABOUT SIBS/AcademicStructure";
import LeadershipGovernence from "./components/Navbar/ABOUT SIBS/LeadershipGovernence";
import Profile from "./components/Navbar/ABOUT SIBS/Profile";

// Other pages
import Events from "./components/Navbar/EVENT'S & NEWS/Events";
import EventsTraining from "./components/Navbar/EVENT'S & NEWS/Events";

import Footer from "./components/FOOTER/Footer";

import News from "./components/Navbar/EVENT'S & NEWS/News";
// Current students
import CurrentStudents from "./components/Navbar/RESERACH/CurrentStudents/CurrentStudents";
import GettingStarts from "./components/Navbar/RESERACH/CurrentStudents/Getting Started/GettingStarts";
import AcademicProgress from "./components/Navbar/RESERACH/CurrentStudents/Academic Progress/AcademicProgress";
import Safety from "./components/Navbar/RESERACH/CurrentStudents/Safety & wellbeing/Safety";
import Track from "./components/Navbar/RESERACH/CurrentStudents/Staying Track/Track";
import Degree from "./components/Navbar/RESERACH/CurrentStudents/Finishing Degree/Degree";
import Policies from "./components/Navbar/RESERACH/CurrentStudents/Policies/Policies";

// Future Students pages
import FutureStudents from "./components/Navbar/RESERACH/FutureStudents/FutureStudents";
import Apply from "./components/Navbar/RESERACH/FutureStudents/Apply/Apply";
import Faq from "./components/Navbar/RESERACH/FutureStudents/FAQ/Faq";
import Deadline from "./components/Navbar/RESERACH/FutureStudents/Application Deadline/Deadline";
import Supervisors from "./components/Navbar/RESERACH/FutureStudents/Supervisors/Supervisors";
import Dean from "./components/Navbar/RESERACH/FutureStudents/Supervisors/Staffs Profile/Dean/Dean";
import Contact from "./components/Navbar/RESERACH/FutureStudents/Supervisors/Staffs Profile/Dean/Contact";
import Publication from "./components/Navbar/RESERACH/FutureStudents/Supervisors/Staffs Profile/Dean/Publication";

// AboutUS- Our people pages
import People from "./components/Navbar/ABOUT SIBS/Our people/People";
import LeadershipTeam from "./components/Navbar/ABOUT SIBS/Our people/LeadershipTeam";
import Scholar from "./components/Navbar/ABOUT SIBS/Our people/Scholar";
import Adminstrative from "./components/Navbar/ABOUT SIBS/Our people/Adminstrative";
import AcademicTeam from "./components/Navbar/ABOUT SIBS/Our people/AcademicTeam";
import LivingSydney from "./components/HOME/HOME PAGE/Living Sydney/LivingSydney";
import EducationSystem from "./components/HOME/HOME CONTENT/DISCOVER/EducationSystem";
import Cost from "./components/HOME/HOME CONTENT/DISCOVER/Cost";
import JobProspect from "./components/HOME/HOME CONTENT/DISCOVER/JobProspect";
import PostStudyWork from "./components/HOME/HOME CONTENT/DISCOVER/PostStudyWork";

function App() {
	return (
		<div className="bg-gray-100">
			{/* navbar section added here  */}
			<Topbar></Topbar>
			<Navbar></Navbar>

			<Routes>
				<Route path="/" element={<Home></Home>}></Route>

				{/* AboutUs pages content added here */}
				<Route path="/profile" element={<Profile></Profile>}></Route>
				<Route
					path="/LeadershipGovernence"
					element={<LeadershipGovernence></LeadershipGovernence>}
				></Route>
				<Route
					path="/AcademicStructure"
					element={<AcademicStructure></AcademicStructure>}
				></Route>

				{/* our people pages  */}
				<Route path="/people" element={<People></People>}></Route>
				<Route
					path="/leadershipTeam"
					element={<LeadershipTeam></LeadershipTeam>}
				></Route>
				<Route path="/scholar" element={<Scholar></Scholar>}></Route>
				<Route
					path="/administrative"
					element={<Adminstrative></Adminstrative>}
				></Route>
				<Route path="/academic" element={<AcademicTeam></AcademicTeam>}></Route>

				{/* Graduate research pages added here  */}
				<Route
					path="/future"
					element={<FutureStudents></FutureStudents>}
				></Route>

				{/* Future students sub-pages added here */}

				<Route path="/supervisors" element={<Supervisors></Supervisors>}>
					{" "}
				</Route>
				<Route path="/dean" element={<Dean></Dean>}></Route>

				<Route path="/deadline" element={<Deadline></Deadline>}></Route>
				<Route path="/apply" element={<Apply></Apply>}></Route>
				<Route path="/faq" element={<Faq></Faq>}></Route>

				{/* Current students page added here */}
				<Route
					path="/current"
					element={<CurrentStudents></CurrentStudents>}
				></Route>

				{/* Current students sub-pages added here */}
				<Route
					path="/gettingStarted"
					element={<GettingStarts></GettingStarts>}
				></Route>
				<Route path="/policies" element={<Policies></Policies>}></Route>

				<Route
					path="/progress"
					element={<AcademicProgress></AcademicProgress>}
				></Route>
				<Route path="/safety" element={<Safety></Safety>}></Route>
				<Route path="/track" element={<Track></Track>}></Route>
				<Route path="/degree" element={<Degree></Degree>}></Route>

				{/* Events & News pages added here  */}
				<Route path="/events" element={<Events></Events>}></Route>
				<Route path="/news" element={<News></News>}></Route>

				{/* Academic programs sub-pages added here */}

				{/* graduate diploma programs */}
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
					path="/gdiplomaprogram"
					element={<GDProgram></GDProgram>}
				></Route>

				{/* Masters (MPhil) programs */}
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

				{/* Home page components added here  */}
				{/* News & all News  */}
				<Route path="/articleone" element={<ArticleOne></ArticleOne>}></Route>
				<Route path="/articletwo" element={<AirticleTwo></AirticleTwo>}></Route>
				<Route
					path="/articlethree"
					element={<ArticleThree></ArticleThree>}
				></Route>

				{/* Discover */}
				<Route
					path="/education"
					element={<EducationSystem></EducationSystem>}
				></Route>
				<Route path="/cost" element={<Cost></Cost>}></Route>
				<Route path="/jobs" element={<JobProspect></JobProspect>}></Route>
				<Route path="/postStudy" element={<PostStudyWork></PostStudyWork>}></Route>

				<Route path="/living" element={<LivingSydney></LivingSydney>}></Route>
			</Routes>

			<Footer></Footer>
		</div>
	);
}

export default App;
