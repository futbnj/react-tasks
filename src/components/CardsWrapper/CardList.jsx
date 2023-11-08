import styles from './CardList.module.css';

function CardList({children}) {

	return (
		<div className={styles['cards-wrapper']}>
			{children}
		</div>
	);
}

export default CardList;
