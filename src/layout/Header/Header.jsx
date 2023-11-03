import styles from './Header.module.css';
import MenuItem from '../../components/MenuItem/MenuItem.jsx';

function Header() {

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
				<MenuItem title={'Log out'} type={'logout'}/>
			</nav>
		</header>
	);
}

export default Header;
