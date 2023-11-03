import styles from './WishlistButton.module.css';
import classnames from 'classnames';

function WishlistButton({saved}) {

	return (
		<div className={styles['wishlist-button']}>
			{!saved && <img className={styles['wishlist-button--svg']} src="/like.svg" alt="Like"/>}
			{saved && <img className={styles['wishlist-button--svg']} src="/saved.svg" alt="Saved"/>}
			<button className={classnames(styles['wishlist-button--btn'], saved === true && styles['active'])}>
				{saved ? 'Saved' : 'Add to favourites'}
			</button>
		</div>
	);
}

export default WishlistButton;
