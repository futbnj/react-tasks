import styles from './Card.module.css';
import Paragraph from '../Paragraph/Paragraph.jsx';
import WishlistButton from '../WishlistButton/WishlistButton.jsx';

function Card({imageTitle, title, rating, saved = false}) {

	const coverSrc = '/movie-covers/' + imageTitle + '.jpg';

	return (
		<div className={styles['card']}>
			<div className={styles['card-rating']}>
				<img src="/star.svg" alt="Rating" className={styles['card-rating--svg']}/>
				<span>{rating}</span>
			</div>
			<img className={styles['card--img']} src={coverSrc} alt={imageTitle}/>
			<div className={styles['card-details']}>
				<Paragraph size={16}>{title}</Paragraph>
				<WishlistButton saved={saved}/>
			</div>
		</div>
	);
}

export default Card;
