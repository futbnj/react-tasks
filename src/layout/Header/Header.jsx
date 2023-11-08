import styles from './Header.module.css';
import MenuItem from '../../components/MenuItem/MenuItem.jsx';
import {useContext} from 'react';
import {UserContext} from '../../context/user.context.jsx';

function Header({userData, setUserData}) {
	const {userName, isLoggedIn, setIsLoggedIn} = useContext(UserContext);

	const handleLogOut = () => {
		setIsLoggedIn(false);
		setUserData([...userData.map(user => {
			return {
				...user,
				isLoggedIn: false
			};
		})]);
	};
	
	return (
		<header className={styles['header']}>
			<div className={styles['logo']}>
				<a href="#">
					<img src="/logo.svg" alt="Header"/>
				</a>
			</div>
			<nav className={styles['nav']}>
				<MenuItem title={'Search movies'} type={'blank'} active={true}/>
				<MenuItem title={'My movies'} type={'counter'} counter={2}/>
				{isLoggedIn && (<MenuItem title={userName} type={'blank'}/>)}
				<MenuItem title={isLoggedIn ? 'Log out' : 'Log in'} type={'logout'} onClick={handleLogOut}/>
			</nav>
		</header>
	);
}

export default Header;
