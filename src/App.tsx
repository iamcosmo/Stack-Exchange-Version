
import MetaInfo from "./components/MetaInfo";
import SideBar from "./components/SideBar";
import Navbar from "./components/NavBar";
import QuestionsCompo from "./QuestionsCompo";
function App() {
	return (
		<>
			<Navbar />
			<div className="flex justify-between">
				<SideBar />
				<QuestionsCompo />
				<MetaInfo />
			</div>
		</>
	);
}

export default App;
