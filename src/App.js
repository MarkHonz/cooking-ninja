import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeSelector } from './components/ThemeSelector';
import { useTheme } from './hooks/useTheme';
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Recipe from './pages/recipe/Recipe';
import Search from './pages/search/Search';
import './App.css';
import Navbar from './components/Navbar';

function App() {
	const { mode } = useTheme();

	return (
		<div className={`App ${mode}`}>
			<BrowserRouter>
				<Navbar />
				<ThemeSelector />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/create">
						<Create />
					</Route>
					<Route path="/search">
						<Search />
					</Route>
					<Route path="/recipes/:id">
						<Recipe />
					</Route>
					<Route path="*">
						<Redirect to="/" />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
