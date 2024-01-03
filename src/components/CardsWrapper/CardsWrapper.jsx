import styles from './CardsWrapper.module.css';

function CardsWrapper({children}) {

	return (
		<div className={styles['cards-wrapper']}>
			{children}
		</div>
	);
}

export default CardsWrapper;
