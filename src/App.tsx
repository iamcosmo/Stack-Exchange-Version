
import MetaInfo from "./components/MetaInfo";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";
function App() {
	return (
		<>
			<Navbar />
			<div className="flex justify-between">
				<SideBar />
				<MetaInfo />
			</div>
		</>
	);
}

export default App;
