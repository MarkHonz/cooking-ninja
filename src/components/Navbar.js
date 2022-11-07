import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import './Navbar.css';
import Searchbar from './Searchbar';

const Navbar = () => {
	const { color, changeColor } = useTheme();

	return (
		<div className="navbar" style={{ background: color }}>
			<nav>
				<Link to="/" className="brand">
					<h1>Recipe Book</h1>
				</Link>
				<Searchbar />
				<Link to="/create">Create Recipe</Link>
			</nav>
		</div>
	);
};

export default Navbar;
