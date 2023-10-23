import './Card.scss';
import Paragraph from '../Paragraph/Paragraph.jsx';
import WishlistButton from '../WishlistButton/WishlistButton.jsx';

function Card({imageTitle, title, rating, saved = false}) {

	const coverSrc = '/movie-covers/' + imageTitle + '.jpg';

	return (
		<div className={'card'}>
			<div className={'card-rating'}>
				<img src="/star.svg" alt="Rating" className={'card-rating--svg'}/>
				<span className={'card-rating--svg'}>{rating}</span>
			</div>
			<img className={'card--img'} src={coverSrc} alt={imageTitle}/>
			<div className={'card-details'}>
				<Paragraph size={16}>{title}</Paragraph>
				<WishlistButton saved={saved}/>
			</div>
		</div>
	);
}

export default Card;
