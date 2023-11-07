import './MenuItem.scss';
import classnames from 'classnames';

function MenuItem({className, type, title, counter = 0}) {

	return (
		<>
			<a href='#' target='_blank' className={classnames('menu-item', className)}>
				<span className={'menu-item__title'}>{title}</span>
				{type === 'logout' && (
					<img src="/logout.svg" alt="Log out" className={'menu-item__icon'}/>
				)}
				{type === 'counter' && (
					<span className={'menu-item__counter'}>{counter}</span>
				)}
			</a>
		</>
	);

}

export default MenuItem;
