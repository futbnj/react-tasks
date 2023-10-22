import './Header.scss';
import MenuItem from '../../components/MenuItem/MenuItem.jsx';

function Header() {

	return (
		<header className={'header'}>
			<div className="logo">
				<img src="/logo.svg" alt="Header"/>
			</div>
			<nav className={'nav'}>
				<MenuItem title={'Search movies'} type={'blank'} className={'active'}/>
				<MenuItem title={'My movies'} type={'counter'} counter={2}/>
				<MenuItem title={'Log out'} type={'logout'}/>
			</nav>
		</header>
	);
}

export default Header;
