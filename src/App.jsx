import './App.css';
import Folder from './component/Folder';
import explorer from './data/folders';
const App = () => {
	return (
		<>
			<h3 className="folder-area-header">Folders</h3>
			<Folder folder={explorer} />
		</>
	);
};

export default App;
