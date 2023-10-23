import './CardsWrapper.scss';

function CardsWrapper({children}) {

	return (
		<div className={'cards-wrapper'}>
			{children}
		</div>
	);
}

export default CardsWrapper;
