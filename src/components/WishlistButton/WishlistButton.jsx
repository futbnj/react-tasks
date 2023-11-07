import './WishlistButton.scss';
import classnames from 'classnames';

function WishlistButton({saved}) {

	return (
		<div className={'wishlist-button'}>
			{!saved && <img className={'wishlist-button--svg'} src="/like.svg" alt="Like"/>}
			{saved && <img className={'wishlist-button--svg'} src="/saved.svg" alt="Saved"/>}
			<button className={classnames('wishlist-button--btn', saved === true && 'active')}>
				{saved ? 'Saved' : 'Add to favourites'}
			</button>
		</div>
	);
}

export default WishlistButton;
