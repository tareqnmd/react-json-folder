import './App.css';
import Folder from './component/Folder';
import explorer from './folders';
const App = () => {
	return <Folder folder={explorer} />;
};

export default App;
