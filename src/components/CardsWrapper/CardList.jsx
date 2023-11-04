import './CardList.scss';

function CardList({children}) {

	return (
		<div className={'cards-wrapper'}>
			{children}
		</div>
	);
}

export default CardList;
