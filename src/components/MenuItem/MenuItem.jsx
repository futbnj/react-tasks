import styles from './MenuItem.module.css';
import classnames from 'classnames';

function MenuItem({type, title, counter = 0, active = false}) {

	return (
		<>
			<a href='#' target='_blank' className={classnames(styles['menu-item'], {
				[styles['active']]: active
			})}>
				<span className={styles['menu-item__title']}>{title}</span>
				{type === 'logout' && (
					<img src="/logout.svg" alt="Log out" className={styles['menu-item__icon']}/>
				)}
				{type === 'counter' && (
					<span className={styles['menu-item__counter']}>{counter}</span>
				)}
			</a>
		</>
	);

}

export default MenuItem;
