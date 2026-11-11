import AboutMe from './AboutMe';
import ProjectsList from './ProjectsList';
import Divider from './Divider'
import Skillsets from './Skillsets'
import Footer from './Footer';
import './App.css';

// Returns the App component which renders the entire website
function App() {
	return (
		<div>
			<div className='body'>
				<AboutMe />
				<ProjectsList />
				<Divider />
				<Skillsets />
			</div>
			<Footer />
		</div>
	);
}

export default App;
